import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { open, stat } from "node:fs/promises";
import { basename, isAbsolute } from "node:path";
import { buildErrorResponse } from "../services/formatters.js";
import { fortnoxRequest } from "../services/api.js";
import { FORTNOX_API_OPERATIONS } from "../generated/fortnoxApiOperations.js";

type ApiParameter = {
  name: string;
  required: boolean;
  description: string;
  style?: string;
  explode?: boolean;
};

type ApiOperation = {
  operationId: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  summary: string;
  description: string;
  tags: readonly string[];
  pathParameters: readonly ApiParameter[];
  queryParameters: readonly ApiParameter[];
  headerParameters: readonly ApiParameter[];
  requestBodyRequired: boolean;
  requestBodyDescription: string;
  requestContentTypes: readonly string[];
  requestEncoding: Readonly<Record<string, { contentType?: string }>>;
  requestBodySchema?: unknown;
  responseContentTypes: readonly string[];
};

const API_OPERATIONS: readonly ApiOperation[] = FORTNOX_API_OPERATIONS;
const OPERATIONS_BY_ID = new Map<string, ApiOperation>(
  API_OPERATIONS.map((operation) => [operation.operationId, operation]),
);
const OPERATION_IDS = API_OPERATIONS.map(
  (operation) => operation.operationId,
) as [string, ...string[]];

function buildApiResponse<T>(output: T) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(output, null, 2) }],
    structuredContent: output,
  };
}

const ListOperationsSchema = z.object({
  search: z
    .string()
    .max(200)
    .optional()
    .describe(
      "Search operation IDs, summaries, descriptions, paths, and tags.",
    ),
  limit: z.number().int().min(1).max(50).default(20),
  offset: z.number().int().min(0).default(0),
});

const QueryValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.union([z.string(), z.number(), z.boolean()])),
]);

const UploadFileSchema = z.union([
  z
    .object({
      filename: z.string().min(1),
      content_base64: z.string(),
      content_type: z.string().optional(),
    })
    .strict(),
  z
    .object({
      file_path: z.string().min(1),
      filename: z.string().min(1).optional(),
      content_type: z.string().optional(),
    })
    .strict(),
]);

const AttachmentEntityTypeSchema = z.enum([
  "OF",
  "O",
  "F",
  "C",
  "LGR_IO",
  "LGR_IG",
]);
const AttachmentSchema = z
  .object({
    entityId: z.number().int().safe().optional(),
    entityType: AttachmentEntityTypeSchema.optional(),
    fileId: z.string().optional(),
    id: z.string().uuid().optional(),
    includeOnSend: z.boolean().optional(),
  })
  .strict();

const CallOperationSchema = z.object({
  operation_id: z
    .enum(OPERATION_IDS)
    .describe("An operation ID returned by fortnox_list_api_operations."),
  path_parameters: z
    .record(z.union([z.string(), z.number(), z.boolean()]))
    .optional()
    .describe("Values for placeholders in the endpoint path."),
  query_parameters: z
    .record(QueryValueSchema)
    .optional()
    .describe("Documented query parameters for the operation."),
  header_parameters: z
    .record(z.string().max(1024))
    .optional()
    .describe("Documented header parameters for the operation."),
  body: z
    .unknown()
    .optional()
    .describe(
      "JSON request body. For multipart uploads, provide file.content_base64 and filename, or file.file_path with local stdio; content_type is optional.",
    ),
});

function matchesSearch(operation: ApiOperation, search: string): boolean {
  const haystack = [
    operation.operationId,
    operation.path,
    operation.summary,
    operation.description,
    ...operation.tags,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(search.toLowerCase());
}

function validateParameters(
  operation: ApiOperation,
  pathParameters: Record<string, string | number | boolean>,
  headerParameters: Record<string, string>,
  queryParameters: Record<
    string,
    string | number | boolean | (string | number | boolean)[]
  >,
): string {
  const pathNames = new Set<string>(
    operation.pathParameters.map(({ name }) => name),
  );
  const queryNames = new Set<string>(
    operation.queryParameters.map(({ name }) => name),
  );
  const headerNames = new Set<string>(
    operation.headerParameters.map(({ name }) => name.toLowerCase()),
  );

  for (const parameter of operation.pathParameters) {
    if (parameter.required && pathParameters[parameter.name] === undefined) {
      throw new Error(
        `Missing required path parameter '${parameter.name}' for ${operation.operationId}.`,
      );
    }
  }
  for (const name of Object.keys(pathParameters)) {
    if (!pathNames.has(name)) {
      throw new Error(
        `Unknown path parameter '${name}' for ${operation.operationId}.`,
      );
    }
  }
  for (const parameter of operation.queryParameters) {
    if (parameter.required && queryParameters[parameter.name] === undefined) {
      throw new Error(
        `Missing required query parameter '${parameter.name}' for ${operation.operationId}.`,
      );
    }
  }
  for (const name of Object.keys(queryParameters)) {
    if (!queryNames.has(name)) {
      throw new Error(
        `Unknown query parameter '${name}' for ${operation.operationId}.`,
      );
    }
  }
  for (const parameter of operation.headerParameters) {
    if (
      parameter.required &&
      !Object.keys(headerParameters).some(
        (name) => name.toLowerCase() === parameter.name.toLowerCase(),
      )
    ) {
      throw new Error(
        `Missing required header parameter '${parameter.name}' for ${operation.operationId}.`,
      );
    }
  }
  for (const [name, value] of Object.entries(headerParameters)) {
    if (!headerNames.has(name.toLowerCase())) {
      throw new Error(
        `Unknown header parameter '${name}' for ${operation.operationId}.`,
      );
    }
    if (/[\r\n]/.test(value)) {
      throw new Error(
        `Header parameter '${name}' contains invalid line breaks.`,
      );
    }
    if (
      [
        "authorization",
        "accept",
        "content-type",
        "content-length",
        "host",
      ].includes(name.toLowerCase())
    ) {
      throw new Error(
        `Header parameter '${name}' cannot override a protected header.`,
      );
    }
  }

  return operation.path.replace(
    /\{([^}]+)\}/g,
    (_placeholder, name: string) => {
      const value = pathParameters[name];
      if (value === undefined) {
        throw new Error(
          `Missing path parameter '${name}' for ${operation.operationId}.`,
        );
      }
      return encodeURIComponent(String(value));
    },
  );
}

function serializeQueryParameters(
  operation: ApiOperation,
  parameters: Record<
    string,
    string | number | boolean | (string | number | boolean)[]
  >,
): Record<string, string | number | boolean | (string | number | boolean)[]> {
  const metadata = new Map(
    operation.queryParameters.map((parameter) => [parameter.name, parameter]),
  );
  const serialized: Record<
    string,
    string | number | boolean | (string | number | boolean)[]
  > = {};

  for (const [name, value] of Object.entries(parameters)) {
    if (!Array.isArray(value)) {
      serialized[name] = value;
      continue;
    }
    const parameter = metadata.get(name);
    const style = parameter?.style ?? "form";
    const explode = parameter?.explode ?? style === "form";
    if (explode) {
      serialized[name] = value;
    } else {
      const delimiter =
        style === "pipeDelimited"
          ? "|"
          : style === "spaceDelimited"
            ? " "
            : ",";
      serialized[name] = value.map(String).join(delimiter);
    }
  }
  return serialized;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

async function readLocalFile(
  filePath: string,
  allowLocalFileUploads: boolean,
): Promise<Buffer> {
  if (!allowLocalFileUploads) {
    throw new Error("Local file uploads are only available over stdio.");
  }
  if (!isAbsolute(filePath)) {
    throw new Error("The file path must be absolute.");
  }
  if (!(await stat(filePath)).isFile()) {
    throw new Error("Upload path must refer to a regular file.");
  }
  const file = await open(filePath, "r");
  try {
    const stat = await file.stat();
    if (!stat.isFile()) {
      throw new Error("Upload path must refer to a regular file.");
    }
    return await file.readFile();
  } finally {
    await file.close();
  }
}

async function createMultipartBody(
  body: unknown,
  encoding: ApiOperation["requestEncoding"],
  allowLocalFileUploads: boolean,
): Promise<FormData> {
  if (!isRecord(body)) {
    throw new Error("Multipart request bodies must be an object.");
  }

  const form = new FormData();
  for (const [name, value] of Object.entries(body)) {
    if (name === "file") {
      if (!isRecord(value)) {
        throw new Error(
          "Multipart 'file' must contain content_base64 or file_path.",
        );
      }
      const hasPath = value.file_path !== undefined;
      const hasBase64 = value.content_base64 !== undefined;
      if (
        hasPath === hasBase64 ||
        (hasPath && typeof value.file_path !== "string") ||
        (hasBase64 &&
          (typeof value.content_base64 !== "string" ||
            typeof value.filename !== "string")) ||
        (value.filename !== undefined && typeof value.filename !== "string")
      ) {
        throw new Error(
          "Multipart 'file' must contain either file_path or filename and content_base64.",
        );
      }
      let fileBytes: Buffer;
      let filename: string;
      if (typeof value.file_path === "string") {
        fileBytes = await readLocalFile(value.file_path, allowLocalFileUploads);
        filename =
          typeof value.filename === "string"
            ? value.filename
            : basename(value.file_path);
      } else if (
        typeof value.content_base64 === "string" &&
        typeof value.filename === "string"
      ) {
        if (
          value.content_base64.length % 4 !== 0 ||
          !/^[A-Za-z0-9+/]*={0,2}$/.test(value.content_base64)
        ) {
          throw new Error(
            "Multipart file content_base64 must be valid base64.",
          );
        }
        fileBytes = Buffer.from(value.content_base64, "base64");
        filename = value.filename;
      } else {
        throw new Error(
          "Multipart 'file' must contain either file_path or filename and content_base64.",
        );
      }
      const contentType =
        typeof value.content_type === "string"
          ? value.content_type
          : (encoding.file?.contentType ?? "application/octet-stream");
      if (
        encoding.file?.contentType &&
        contentType !== encoding.file.contentType
      ) {
        throw new Error(
          `Multipart field 'file' must use content type '${encoding.file.contentType}'.`,
        );
      }
      const blob = new Blob([Uint8Array.from(fileBytes)], {
        type: contentType,
      });
      form.append(name, blob, filename);
    } else if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      form.append(name, String(value));
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (
          typeof item !== "string" &&
          typeof item !== "number" &&
          typeof item !== "boolean"
        ) {
          throw new Error(
            `Multipart array field '${name}' must contain scalars.`,
          );
        }
        form.append(name, String(item));
      }
    } else if (isRecord(value)) {
      form.append(name, JSON.stringify(value));
    } else {
      throw new Error(`Multipart field '${name}' has an unsupported value.`);
    }
  }
  return form;
}

function getResponseType(
  operation: ApiOperation,
): "json" | "text" | "arraybuffer" {
  if (
    ["ArchiveController_doShow", "InboxController_doShow"].includes(
      operation.operationId,
    )
  ) {
    return "arraybuffer";
  }
  if (
    (operation.responseContentTypes as readonly string[]).includes(
      "application/pdf",
    )
  ) {
    return "arraybuffer";
  }
  if (
    (operation.responseContentTypes as readonly string[]).includes(
      "application/octet-stream",
    )
  ) {
    return "arraybuffer";
  }
  if (
    (operation.responseContentTypes as readonly string[]).includes("text/csv")
  ) {
    return "text";
  }
  return "json";
}

function getAcceptHeader(operation: ApiOperation): string {
  const contentTypes = operation.responseContentTypes as readonly string[];
  if (
    ["ArchiveController_doShow", "InboxController_doShow"].includes(
      operation.operationId,
    )
  ) {
    return "*/*";
  }
  if (contentTypes.includes("application/pdf")) {
    return "application/pdf";
  }
  if (contentTypes.includes("application/octet-stream")) {
    return "application/octet-stream";
  }
  if (contentTypes.includes("text/csv")) {
    return "text/csv";
  }
  const contentType = contentTypes.find((value) => value !== "*/*");
  return contentType ?? "application/json";
}

function toBuffer(value: unknown): Buffer {
  if (Buffer.isBuffer(value)) return value;
  if (value instanceof ArrayBuffer) return Buffer.from(value);
  if (ArrayBuffer.isView(value)) {
    return Buffer.from(value.buffer, value.byteOffset, value.byteLength);
  }
  throw new Error("Fortnox returned an unsupported binary response.");
}

async function buildRequestBody(
  operation: ApiOperation,
  body: unknown,
  allowLocalFileUploads: boolean,
): Promise<{ data: unknown; contentType?: string }> {
  if (operation.requestBodyRequired && body === undefined) {
    throw new Error(`Request body is required for ${operation.operationId}.`);
  }
  if (body === undefined) return { data: undefined };

  const requestContentTypes =
    operation.requestContentTypes as readonly string[];
  const schema = operation.requestBodySchema;
  if (isRecord(body) && isRecord(schema) && Array.isArray(schema.required)) {
    for (const field of schema.required) {
      if (typeof field === "string" && body[field] === undefined) {
        throw new Error(
          `Missing required request body field '${field}' for ${operation.operationId}.`,
        );
      }
    }
  }

  if (requestContentTypes.includes("multipart/form-data")) {
    return {
      data: await createMultipartBody(
        body,
        operation.requestEncoding,
        allowLocalFileUploads,
      ),
      contentType: "multipart/form-data",
    };
  }

  const contentType =
    requestContentTypes.find(
      (value) => value === "application/json-patch+json",
    ) ??
    requestContentTypes.find((value) => value === "application/json") ??
    (requestContentTypes.includes("*/*") && typeof body === "string"
      ? "text/plain"
      : undefined);
  return { data: body, contentType };
}

export function registerFortnoxApiTools(
  server: McpServer,
  options: { allowLocalFileUploads?: boolean } = {},
): void {
  server.registerTool(
    "fortnox_list_api_operations",
    {
      title: "List Fortnox API Operations",
      description:
        "Search documented Fortnox API operations by resource, action, path, or business term.",
      inputSchema: ListOperationsSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async ({ search, limit, offset }) => {
      try {
        const matches = search
          ? FORTNOX_API_OPERATIONS.filter((operation) =>
              matchesSearch(operation, search),
            )
          : FORTNOX_API_OPERATIONS;
        const operations = matches
          .slice(offset, offset + limit)
          .map((operation) => ({
            operation_id: operation.operationId,
            method: operation.method,
            path: operation.path,
            summary: operation.summary,
            tags: operation.tags,
            path_parameters: operation.pathParameters,
            query_parameters: operation.queryParameters,
            header_parameters: operation.headerParameters,
            request_body_required: operation.requestBodyRequired,
            request_body_description: operation.requestBodyDescription,
            request_content_types: operation.requestContentTypes,
            response_content_types: operation.responseContentTypes,
          }));
        const output = {
          total: matches.length,
          offset,
          limit,
          has_more: offset + operations.length < matches.length,
          operations,
        };
        return buildApiResponse(output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  server.registerTool(
    "fortnox_get_api_operation_details",
    {
      title: "Get Fortnox API Operation Details",
      description:
        "Get the full documented request-body schema and parameters for one Fortnox API operation. Use fortnox_list_api_operations to find its operation_id first.",
      inputSchema: z.object({
        operation_id: z.enum(OPERATION_IDS),
      }),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async ({ operation_id }) => {
      try {
        const operation = OPERATIONS_BY_ID.get(operation_id);
        if (!operation) {
          throw new Error(`Unknown Fortnox API operation '${operation_id}'.`);
        }
        const output = {
          operation_id: operation.operationId,
          method: operation.method,
          path: operation.path,
          summary: operation.summary,
          description: operation.description,
          tags: operation.tags,
          path_parameters: operation.pathParameters,
          query_parameters: operation.queryParameters,
          header_parameters: operation.headerParameters,
          request_body_required: operation.requestBodyRequired,
          request_body_description: operation.requestBodyDescription,
          request_content_types: operation.requestContentTypes,
          request_body_schema: operation.requestBodySchema,
          response_content_types: operation.responseContentTypes,
        };
        return buildApiResponse(output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  const callOperation = async ({
    operation_id,
    path_parameters = {},
    query_parameters = {},
    header_parameters = {},
    body,
  }: z.infer<typeof CallOperationSchema>) => {
    try {
      const operation = OPERATIONS_BY_ID.get(operation_id);
      if (!operation) {
        throw new Error(`Unknown Fortnox API operation '${operation_id}'.`);
      }

      const endpoint = validateParameters(
        operation,
        path_parameters,
        header_parameters,
        query_parameters,
      );
      const requestBody = await buildRequestBody(
        operation,
        body,
        options.allowLocalFileUploads ?? false,
      );
      const responseType = getResponseType(operation);
      let responseContentType: string | undefined;
      const response = await fortnoxRequest<unknown>(
        endpoint,
        operation.method,
        requestBody.data,
        serializeQueryParameters(operation, query_parameters),
        {
          contentType: requestBody.contentType,
          accept: getAcceptHeader(operation),
          responseType,
          headers: header_parameters,
          onResponseContentType: (contentType) => {
            responseContentType = contentType;
          },
        },
      );
      let data = response;
      if (responseType === "arraybuffer") {
        const file = toBuffer(response);
        const contentType = responseContentType
          ?.split(";")[0]
          .trim()
          .toLowerCase();
        if (
          contentType === "application/json" ||
          contentType?.endsWith("+json")
        ) {
          data = JSON.parse(file.toString("utf8"));
        } else {
          data = {
            encoding: "base64",
            content_type: contentType || "application/octet-stream",
            data: file.toString("base64"),
          };
        }
      }
      const output = {
        operation_id,
        method: operation.method,
        path: endpoint,
        data,
      };
      return buildApiResponse(output);
    } catch (error) {
      return buildErrorResponse(error);
    }
  };

  const readOnlyAnnotations = {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: true,
  };
  const createAnnotations = {
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  };
  const deleteAnnotations = {
    readOnlyHint: false,
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  };

  for (const connection of [
    {
      name: "supplier_invoice",
      label: "Supplier Invoice",
      controller: "SupplierInvoiceFileConnectionController",
      filter: "supplier_invoice_number",
      query: "supplierinvoicenumber",
      hasGet: true,
    },
    {
      name: "article",
      label: "Article",
      controller: "ArticleFileConnectionController",
      filter: "article_number",
      query: "articlenumber",
      hasGet: true,
    },
    {
      name: "asset",
      label: "Asset",
      controller: "AssetFileConnectionController",
      filter: "asset_id",
      query: "assetid",
      hasGet: false,
    },
  ]) {
    server.registerTool(
      `fortnox_list_${connection.name}_file_connections`,
      {
        title: `List Fortnox ${connection.label} File Connections`,
        description: `List ${connection.label.toLowerCase()} file connections with an optional filter.`,
        inputSchema: z.object({ [connection.filter]: z.string().optional() }),
        annotations: readOnlyAnnotations,
      },
      async (args) => {
        const filter = args[connection.filter];
        return callOperation({
          operation_id: `${connection.controller}_doIndex`,
          query_parameters:
            filter === undefined ? {} : { [connection.query]: filter },
        });
      },
    );
    if (connection.hasGet) {
      server.registerTool(
        `fortnox_get_${connection.name}_file_connection`,
        {
          title: `Get Fortnox ${connection.label} File Connection`,
          description: `Retrieve a ${connection.label.toLowerCase()} file connection by file ID.`,
          inputSchema: z.object({ file_id: z.string().min(1) }),
          annotations: readOnlyAnnotations,
        },
        async ({ file_id }) =>
          callOperation({
            operation_id: `${connection.controller}_doShow`,
            path_parameters: { FileId: file_id },
          }),
      );
    }
    server.registerTool(
      `fortnox_delete_${connection.name}_file_connection`,
      {
        title: `Delete Fortnox ${connection.label} File Connection`,
        description: `Remove a ${connection.label.toLowerCase()} file connection by file ID.`,
        inputSchema: z.object({ file_id: z.string().min(1) }),
        annotations: deleteAnnotations,
      },
      async ({ file_id }) =>
        callOperation({
          operation_id: `${connection.controller}_doDelete`,
          path_parameters: { FileId: file_id },
        }),
    );
  }

  server.registerTool(
    "fortnox_create_supplier_invoice_file_connection",
    {
      title: "Create Fortnox Supplier Invoice File Connection",
      description: "Connect a file to a supplier invoice.",
      inputSchema: z.object({
        file_id: z.string().min(1),
        supplier_invoice_number: z.string().min(1),
        name: z.string().optional(),
        supplier_name: z.string().optional(),
      }),
      annotations: createAnnotations,
    },
    async ({ file_id, supplier_invoice_number, name, supplier_name }) =>
      callOperation({
        operation_id: "SupplierInvoiceFileConnectionController_doCreate",
        body: {
          SupplierInvoiceFileConnection: {
            FileId: file_id,
            SupplierInvoiceNumber: supplier_invoice_number,
            Name: name,
            SupplierName: supplier_name,
          },
        },
      }),
  );

  server.registerTool(
    "fortnox_create_article_file_connection",
    {
      title: "Create Fortnox Article File Connection",
      description: "Connect a file to an article.",
      inputSchema: z.object({
        file_id: z.string().min(1),
        article_number: z.string().min(1),
      }),
      annotations: createAnnotations,
    },
    async ({ file_id, article_number }) =>
      callOperation({
        operation_id: "ArticleFileConnectionController_doCreate",
        body: {
          ArticleFileConnection: {
            FileId: file_id,
            ArticleNumber: article_number,
          },
        },
      }),
  );

  server.registerTool(
    "fortnox_create_asset_file_connection",
    {
      title: "Create Fortnox Asset File Connection",
      description:
        "Connect a file to an asset. Requires access to Fortnox Assets.",
      inputSchema: z.object({
        file_id: z.string().min(1),
        asset_id: z.string().min(1),
        name: z.string().optional(),
      }),
      annotations: createAnnotations,
    },
    async ({ file_id, asset_id, name }) =>
      callOperation({
        operation_id: "AssetFileConnectionController_doCreate",
        body: { FileId: file_id, AssetId: asset_id, Name: name },
      }),
  );

  server.registerTool(
    "fortnox_list_inbox",
    {
      title: "List Fortnox Inbox",
      description: "List the inbox root folder.",
      inputSchema: z.object({}),
      annotations: readOnlyAnnotations,
    },
    async () => callOperation({ operation_id: "InboxController_doIndex" }),
  );

  server.registerTool(
    "fortnox_get_inbox_item",
    {
      title: "Get Fortnox Inbox Item",
      description:
        "Retrieve an inbox file or folder by ID. Binary files are returned as base64.",
      inputSchema: z.object({ id: z.string().min(1) }),
      annotations: readOnlyAnnotations,
    },
    async ({ id }) =>
      callOperation({
        operation_id: "InboxController_doShow",
        path_parameters: { Id: id },
      }),
  );

  server.registerTool(
    "fortnox_upload_inbox_file",
    {
      title: "Upload Fortnox Inbox File",
      description:
        "Upload a file to the inbox. Local file paths are available only over stdio.",
      inputSchema: z.object({
        file: UploadFileSchema,
        folder_id: z.string().optional(),
        path: z.string().optional(),
      }),
      annotations: createAnnotations,
    },
    async ({ file, folder_id, path }) => {
      const query_parameters: Record<string, string> = {};
      if (folder_id !== undefined) query_parameters.folderId = folder_id;
      if (path !== undefined) query_parameters.path = path;
      return callOperation({
        operation_id: "InboxController_doCreate",
        query_parameters,
        body: { file },
      });
    },
  );

  server.registerTool(
    "fortnox_delete_inbox_item",
    {
      title: "Delete Fortnox Inbox Item",
      description:
        "Delete an inbox file or folder by ID. Deleting a folder can remove its contents.",
      inputSchema: z.object({ id: z.string().min(1) }),
      annotations: deleteAnnotations,
    },
    async ({ id }) =>
      callOperation({
        operation_id: "InboxController_doDelete",
        path_parameters: { Id: id },
      }),
  );

  for (const attachmentQuery of [
    { name: "list", operation: "getAttachments", query: "entityid" },
    {
      name: "count",
      operation: "getNumberOfAttachmentsForEntity",
      query: "entityids",
    },
  ]) {
    server.registerTool(
      `fortnox_${attachmentQuery.name}_attachments`,
      {
        title: `${attachmentQuery.name === "list" ? "List" : "Count"} Fortnox Attachments`,
        description:
          "Query attachments by entity IDs and Fortnox entity type. Entity mappings and required scope are not confirmed.",
        inputSchema: z.object({
          entity_ids: z.array(z.number().int().safe()).min(1),
          entity_type: AttachmentEntityTypeSchema,
        }),
        annotations: readOnlyAnnotations,
      },
      async ({ entity_ids, entity_type }) =>
        callOperation({
          operation_id: attachmentQuery.operation,
          query_parameters: {
            [attachmentQuery.query]: entity_ids,
            entitytype: entity_type,
          },
        }),
    );
  }

  for (const attachmentAction of [
    {
      name: "attach_files",
      title: "Attach Fortnox Files",
      operation: "attach",
      description: "Attach files to one or more entities.",
    },
    {
      name: "validate_attachments_on_send",
      title: "Validate Fortnox Attachments on Send",
      operation: "validateIncludedOnSend",
      description: "Validate attachments for inclusion on send.",
    },
  ]) {
    server.registerTool(
      `fortnox_${attachmentAction.name}`,
      {
        title: attachmentAction.title,
        description: `${attachmentAction.description} Entity mappings and required scope are not confirmed.`,
        inputSchema: z.object({ attachments: z.array(AttachmentSchema) }),
        annotations: createAnnotations,
      },
      async ({ attachments }) =>
        callOperation({
          operation_id: attachmentAction.operation,
          body: attachments,
        }),
    );
  }

  server.registerTool(
    "fortnox_update_attachment",
    {
      title: "Update Fortnox Attachment",
      description:
        "Update an attachment by ID. Entity mappings and required scope are not confirmed.",
      inputSchema: z.object({
        attachment_id: z.string().uuid(),
        attachment: AttachmentSchema,
      }),
      annotations: createAnnotations,
    },
    async ({ attachment_id, attachment }) =>
      callOperation({
        operation_id: "updateAttachment",
        path_parameters: { attachmentId: attachment_id },
        body: attachment,
      }),
  );

  server.registerTool(
    "fortnox_detach_file",
    {
      title: "Detach Fortnox File",
      description: "Detach a file from an entity by attachment ID.",
      inputSchema: z.object({ attachment_id: z.string().uuid() }),
      annotations: deleteAnnotations,
    },
    async ({ attachment_id }) =>
      callOperation({
        operation_id: "detach",
        path_parameters: { attachmentId: attachment_id },
      }),
  );

  server.registerTool(
    "fortnox_list_voucher_file_connections",
    {
      title: "List Fortnox Voucher File Connections",
      description:
        "List file connections for vouchers, optionally filtered by voucher year, description, number, or series.",
      inputSchema: z.object({
        voucher_year: z.union([z.string(), z.number()]).optional(),
        voucher_description: z.string().optional(),
        voucher_number: z.union([z.string(), z.number()]).optional(),
        voucher_series: z.string().optional(),
      }),
      annotations: readOnlyAnnotations,
    },
    async ({
      voucher_year,
      voucher_description,
      voucher_number,
      voucher_series,
    }) => {
      const query_parameters: Record<string, string | number> = {};
      if (voucher_year !== undefined)
        query_parameters.voucheryear = voucher_year;
      if (voucher_description !== undefined)
        query_parameters.voucherdescription = voucher_description;
      if (voucher_number !== undefined)
        query_parameters.vouchernumber = voucher_number;
      if (voucher_series !== undefined)
        query_parameters.voucherseries = voucher_series;
      return callOperation({
        operation_id: "VoucherFileConnectionController_doIndex",
        query_parameters,
      });
    },
  );

  server.registerTool(
    "fortnox_get_voucher_file_connection",
    {
      title: "Get Fortnox Voucher File Connection",
      description: "Retrieve a voucher file connection by file ID.",
      inputSchema: z.object({ file_id: z.string().min(1) }),
      annotations: readOnlyAnnotations,
    },
    async ({ file_id }) =>
      callOperation({
        operation_id: "VoucherFileConnectionController_doShow",
        path_parameters: { FileId: file_id },
      }),
  );

  server.registerTool(
    "fortnox_create_voucher_file_connection",
    {
      title: "Create Fortnox Voucher File Connection",
      description: "Connect an archive file to a voucher.",
      inputSchema: z.object({
        file_id: z.string().min(1),
        voucher_number: z.string().min(1),
        voucher_series: z.string().min(1),
        voucher_year: z.number().int().optional(),
        voucher_description: z.string().optional(),
      }),
      annotations: createAnnotations,
    },
    async ({
      file_id,
      voucher_number,
      voucher_series,
      voucher_year,
      voucher_description,
    }) =>
      callOperation({
        operation_id: "VoucherFileConnectionController_doCreate",
        body: {
          VoucherFileConnection: {
            FileId: file_id,
            VoucherNumber: voucher_number,
            VoucherSeries: voucher_series,
            ...(voucher_year === undefined
              ? {}
              : { VoucherYear: voucher_year }),
            ...(voucher_description === undefined
              ? {}
              : { VoucherDescription: voucher_description }),
          },
        },
      }),
  );

  server.registerTool(
    "fortnox_delete_voucher_file_connection",
    {
      title: "Delete Fortnox Voucher File Connection",
      description: "Remove a voucher file connection by file ID.",
      inputSchema: z.object({ file_id: z.string().min(1) }),
      annotations: deleteAnnotations,
    },
    async ({ file_id }) =>
      callOperation({
        operation_id: "VoucherFileConnectionController_doDelete",
        path_parameters: { FileId: file_id },
      }),
  );

  server.registerTool(
    "fortnox_list_archive",
    {
      title: "List Fortnox Archive",
      description: "List the root archive or an archive folder by path.",
      inputSchema: z.object({ path: z.string().optional() }),
      annotations: readOnlyAnnotations,
    },
    async ({ path }) =>
      callOperation({
        operation_id: "ArchiveController_doIndex",
        query_parameters: path === undefined ? {} : { path },
      }),
  );

  server.registerTool(
    "fortnox_upload_archive_file",
    {
      title: "Upload Fortnox Archive File",
      description:
        "Upload a file to the archive root or a folder. Local file paths are available only over stdio.",
      inputSchema: z.object({
        file: UploadFileSchema,
        folder_id: z.string().optional(),
        path: z.string().optional(),
      }),
      annotations: createAnnotations,
    },
    async ({ file, folder_id, path }) => {
      const query_parameters: Record<string, string> = {};
      if (folder_id !== undefined) query_parameters.folderid = folder_id;
      if (path !== undefined) query_parameters.path = path;
      return callOperation({
        operation_id: "ArchiveController_doCreate",
        query_parameters,
        body: { file },
      });
    },
  );

  server.registerTool(
    "fortnox_delete_archive_item",
    {
      title: "Delete Fortnox Archive Item",
      description:
        "Delete an archive file or folder by ID. Deleting a folder can remove its contents.",
      inputSchema: z.object({
        id: z.string().min(1),
        path: z.string().optional(),
      }),
      annotations: deleteAnnotations,
    },
    async ({ id, path }) =>
      callOperation({
        operation_id: "ArchiveController_doDelete",
        path_parameters: { id },
        query_parameters: path === undefined ? {} : { path },
      }),
  );

  server.registerTool(
    "fortnox_get_archive_file",
    {
      title: "Get Fortnox Archive File",
      description:
        "Retrieve an archive file by ID. Binary files are returned as base64 in data.data.",
      inputSchema: z.object({
        id: z.string().min(1),
        path: z.string().optional(),
        file_id: z.string().optional(),
      }),
      annotations: readOnlyAnnotations,
    },
    async ({ id, path, file_id }) => {
      const query_parameters: Record<string, string> = {};
      if (path !== undefined) query_parameters.path = path;
      if (file_id !== undefined) query_parameters.fileid = file_id;
      return callOperation({
        operation_id: "ArchiveController_doShow",
        path_parameters: { id },
        query_parameters,
      });
    },
  );

  server.registerTool(
    "fortnox_call_api_operation",
    {
      title: "Call Fortnox API Operation",
      description: `Call one of the documented Fortnox API operations using the connected Fortnox account.

First use fortnox_list_api_operations to find an operation_id, then fortnox_get_api_operation_details for its body schema and required parameters. This tool only accepts operation IDs from the bundled Fortnox OpenAPI catalog; arbitrary URLs and undocumented HTTP headers are not accepted.

Supply path_parameters and query_parameters using the exact names shown in the catalog. Supply the documented JSON body when required. For multipart uploads, body.file must contain filename and content_base64, or an absolute file_path with local stdio. Optional fields: filename for file_path, content_type. PDF responses are returned as base64. API permissions, enabled modules, and partner restrictions still apply.`,
      inputSchema: CallOperationSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    callOperation,
  );
}
