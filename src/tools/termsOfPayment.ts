import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fortnoxRequest } from "../services/api.js";
import { ResponseFormat } from "../constants.js";
import {
  buildToolResponse,
  buildErrorResponse,
} from "../services/formatters.js";
import {
  ListTermsOfPaymentSchema,
  GetTermsOfPaymentSchema,
  CreateTermsOfPaymentSchema,
  UpdateTermsOfPaymentSchema,
  DeleteTermsOfPaymentSchema,
  type ListTermsOfPaymentInput,
  type GetTermsOfPaymentInput,
  type CreateTermsOfPaymentInput,
  type UpdateTermsOfPaymentInput,
  type DeleteTermsOfPaymentInput,
} from "../schemas/termsOfPayment.js";

interface FortnoxTermsOfPayment {
  Code: string;
  Description: string;
  "@url"?: string;
}

interface TermsOfPaymentListResponse {
  TermsOfPayments: FortnoxTermsOfPayment[];
}

interface TermsOfPaymentResponse {
  TermsOfPayment: FortnoxTermsOfPayment;
}

export function registerTermsOfPaymentTools(server: McpServer): void {
  // List
  server.registerTool(
    "fortnox_list_terms_of_payment",
    {
      title: "List Fortnox Terms of Payment",
      description: `List all payment terms configured in Fortnox.

Args:
  - response_format ('markdown' | 'json'): Output format

Returns:
  All payment terms with code and description.

Examples:
  Common codes: '0' (immediate), '10' (10 days), '30' (30 days net)`,
      inputSchema: ListTermsOfPaymentSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: ListTermsOfPaymentInput) => {
      try {
        const response =
          await fortnoxRequest<TermsOfPaymentListResponse>(
            "/3/termsofpayments",
          );
        const terms = response.TermsOfPayments || [];

        const output = {
          count: terms.length,
          terms_of_payment: terms.map((t) => ({
            code: t.Code,
            description: t.Description,
          })),
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          const lines = [`# Terms of Payment (${terms.length})\n`];
          for (const t of terms) {
            lines.push(`- **${t.Code}**: ${t.Description}`);
          }
          textContent = lines.join("\n");
        }

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Get
  server.registerTool(
    "fortnox_get_terms_of_payment",
    {
      title: "Get Fortnox Terms of Payment",
      description: `Retrieve a specific payment term by code.

Args:
  - code (string): Payment term code (required)
  - response_format ('markdown' | 'json'): Output format`,
      inputSchema: GetTermsOfPaymentSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: GetTermsOfPaymentInput) => {
      try {
        const response = await fortnoxRequest<TermsOfPaymentResponse>(
          `/3/termsofpayments/${encodeURIComponent(params.code)}`,
        );
        const t = response.TermsOfPayment;

        const output = { code: t.Code, description: t.Description };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `# Terms of Payment: ${t.Code}\n\n- **Description**: ${t.Description}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Create
  server.registerTool(
    "fortnox_create_terms_of_payment",
    {
      title: "Create Fortnox Terms of Payment",
      description: `Create a new payment term in Fortnox.

Args:
  - code (string): Payment term code, max 25 chars (e.g., '45', 'NET45') (required)
  - description (string): Human-readable description (required)
  - response_format ('markdown' | 'json'): Output format`,
      inputSchema: CreateTermsOfPaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: CreateTermsOfPaymentInput) => {
      try {
        const response = await fortnoxRequest<TermsOfPaymentResponse>(
          "/3/termsofpayments",
          "POST",
          {
            TermsOfPayment: {
              Code: params.code,
              Description: params.description,
            },
          },
        );
        const t = response.TermsOfPayment;

        const output = { code: t.Code, description: t.Description };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Terms of Payment Created\n\n- **Code**: ${t.Code}\n- **Description**: ${t.Description}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Update
  server.registerTool(
    "fortnox_update_terms_of_payment",
    {
      title: "Update Fortnox Terms of Payment",
      description: `Update the description of a payment term.

Args:
  - code (string): Payment term code to update (required)
  - description (string): New description (required)
  - response_format ('markdown' | 'json'): Output format`,
      inputSchema: UpdateTermsOfPaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: UpdateTermsOfPaymentInput) => {
      try {
        const response = await fortnoxRequest<TermsOfPaymentResponse>(
          `/3/termsofpayments/${encodeURIComponent(params.code)}`,
          "PUT",
          { TermsOfPayment: { Description: params.description } },
        );
        const t = response.TermsOfPayment;

        const output = { code: t.Code, description: t.Description };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Terms of Payment Updated\n\n- **Code**: ${t.Code}\n- **Description**: ${t.Description}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Delete
  server.registerTool(
    "fortnox_delete_terms_of_payment",
    {
      title: "Delete Fortnox Terms of Payment",
      description: `Remove a payment term from Fortnox.

WARNING: This action is irreversible.

Args:
  - code (string): Payment term code to delete (required)
  - response_format ('markdown' | 'json'): Output format`,
      inputSchema: DeleteTermsOfPaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: DeleteTermsOfPaymentInput) => {
      try {
        await fortnoxRequest<void>(
          `/3/termsofpayments/${encodeURIComponent(params.code)}`,
          "DELETE",
        );

        const output = { deleted: true, code: params.code };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Terms of Payment Deleted\n\nPayment term **${params.code}** has been removed.`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );
}
