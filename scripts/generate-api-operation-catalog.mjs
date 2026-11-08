import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const specPath = resolve(root, "fortnox_docs", "fortnox_api.json");
const outputPath = resolve(root, "src", "generated", "fortnoxApiOperations.ts");
const spec = JSON.parse(readFileSync(specPath, "utf8"));
const operations = [];

function summarizeSchema(schema, depth = 0, seen = new Set()) {
  if (!schema || typeof schema !== "object") return undefined;

  if (schema.$ref) {
    const name = schema.$ref.split("/").at(-1);
    if (depth >= 3 || seen.has(name)) return { reference: name };
    const target = spec.components?.schemas?.[name];
    if (!target) return { reference: name };
    const nextSeen = new Set(seen);
    nextSeen.add(name);
    return {
      reference: name,
      ...summarizeSchema(target, depth + 1, nextSeen),
    };
  }

  const summary = {};
  for (const key of ["type", "format", "description", "enum", "required"]) {
    if (schema[key] !== undefined) summary[key] = schema[key];
  }

  if (schema.properties && depth < 3) {
    summary.properties = Object.fromEntries(
      Object.entries(schema.properties).map(([name, property]) => [
        name,
        summarizeSchema(property, depth + 1, seen),
      ]),
    );
  }
  if (schema.items && depth < 3) {
    summary.items = summarizeSchema(schema.items, depth + 1, seen);
  }
  for (const key of ["oneOf", "anyOf", "allOf"]) {
    if (Array.isArray(schema[key]) && depth < 3) {
      summary[key] = schema[key].map((item) =>
        summarizeSchema(item, depth + 1, seen),
      );
    }
  }
  return summary;
}

for (const [path, pathItem] of Object.entries(spec.paths)) {
  const pathParameters = pathItem.parameters ?? [];

  for (const [method, operation] of Object.entries(pathItem)) {
    if (!["get", "post", "put", "patch", "delete"].includes(method)) continue;

    const parameters = new Map();
    for (const parameter of [
      ...pathParameters,
      ...(operation.parameters ?? []),
    ]) {
      parameters.set(`${parameter.in}:${parameter.name}`, parameter);
    }

    const requestBody = operation.requestBody;
    const responseContentTypes = new Set();
    for (const [status, response] of Object.entries(
      operation.responses ?? {},
    )) {
      if (status === "default") continue;
      for (const contentType of Object.keys(response.content ?? {})) {
        responseContentTypes.add(contentType);
      }
    }

    operations.push({
      operationId: operation.operationId,
      method: method.toUpperCase(),
      path,
      summary:
        operation.summary ?? operation.description ?? operation.operationId,
      description: operation.description ?? "",
      tags: operation.tags ?? [],
      pathParameters: [...parameters.values()]
        .filter((parameter) => parameter.in === "path")
        .map(({ name, required = false, description = "" }) => ({
          name,
          required,
          description,
        })),
      headerParameters: [...parameters.values()]
        .filter((parameter) => parameter.in === "header")
        .map(({ name, required = false, description = "" }) => ({
          name,
          required,
          description,
        })),
      queryParameters: [...parameters.values()]
        .filter((parameter) => parameter.in === "query")
        .map(
          ({ name, required = false, description = "", style, explode }) => ({
            name,
            required,
            description,
            style,
            explode,
          }),
        ),
      requestBodyRequired: requestBody?.required ?? false,
      requestBodyDescription: requestBody?.description ?? "",
      requestContentTypes: Object.keys(requestBody?.content ?? {}),
      requestEncoding:
        Object.values(requestBody?.content ?? {}).find(
          (content) => content.encoding,
        )?.encoding ?? {},
      requestBodySchema: summarizeSchema(
        Object.values(requestBody?.content ?? {})[0]?.schema,
      ),
      responseContentTypes: [...responseContentTypes],
    });
  }
}

operations.sort((a, b) => a.operationId.localeCompare(b.operationId));

const operationIds = new Set();
for (const operation of operations) {
  if (!operation.operationId || operationIds.has(operation.operationId)) {
    throw new Error(
      `Missing or duplicate operationId: ${operation.operationId}`,
    );
  }
  operationIds.add(operation.operationId);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(
  outputPath,
  `// Generated from fortnox_docs/fortnox_api.json. Run npm run generate:api-catalog to refresh.\n` +
    `export const FORTNOX_API_OPERATIONS = ${JSON.stringify(operations, null, 2)} as const;\n`,
);
console.log(`Generated ${operations.length} Fortnox API operations.`);
