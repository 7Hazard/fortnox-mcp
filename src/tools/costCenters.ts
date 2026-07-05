import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fortnoxRequest } from "../services/api.js";
import { ResponseFormat } from "../constants.js";
import {
  buildToolResponse,
  buildErrorResponse,
  formatBoolean,
} from "../services/formatters.js";
import {
  ListCostCentersSchema,
  GetCostCenterSchema,
  CreateCostCenterSchema,
  UpdateCostCenterSchema,
  DeleteCostCenterSchema,
  type ListCostCentersInput,
  type GetCostCenterInput,
  type CreateCostCenterInput,
  type UpdateCostCenterInput,
  type DeleteCostCenterInput,
} from "../schemas/projects.js";

// API response types
interface FortnoxCostCenter {
  Code: string;
  Description: string;
  Note?: string;
  Active?: boolean;
  "@url"?: string;
}

interface CostCenterListResponse {
  CostCenters: FortnoxCostCenter[];
}

interface CostCenterResponse {
  CostCenter: FortnoxCostCenter;
}

/**
 * Register all cost center tools
 */
export function registerCostCenterTools(server: McpServer): void {
  // List
  server.registerTool(
    "fortnox_list_cost_centers",
    {
      title: "List Fortnox Cost Centers",
      description: `List cost centers from Fortnox.

Args:
  - response_format ('markdown' | 'json'): Output format

Returns:
  All cost centers with code, description, and active status.`,
      inputSchema: ListCostCentersSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: ListCostCentersInput) => {
      try {
        const response =
          await fortnoxRequest<CostCenterListResponse>("/3/costcenters");
        const centers = response.CostCenters || [];

        const output = {
          count: centers.length,
          cost_centers: centers.map((c) => ({
            code: c.Code,
            description: c.Description,
            active: c.Active ?? null,
            note: c.Note || null,
          })),
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          const lines = [`# Cost Centers (${centers.length})\n`];
          for (const c of centers) {
            lines.push(
              `## ${c.Description} (${c.Code})\n` +
                `- **Active**: ${formatBoolean(c.Active)}` +
                (c.Note ? `\n- **Note**: ${c.Note}` : ""),
            );
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
    "fortnox_get_cost_center",
    {
      title: "Get Fortnox Cost Center",
      description: `Retrieve details about a specific cost center.

Args:
  - code (string): Cost center code (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Cost center details.`,
      inputSchema: GetCostCenterSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: GetCostCenterInput) => {
      try {
        const response = await fortnoxRequest<CostCenterResponse>(
          `/3/costcenters/${encodeURIComponent(params.code)}`,
        );
        const c = response.CostCenter;

        const output = {
          code: c.Code,
          description: c.Description,
          active: c.Active ?? null,
          note: c.Note || null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `# Cost Center: ${c.Description} (${c.Code})\n\n` +
              `- **Active**: ${formatBoolean(c.Active)}\n` +
              (c.Note ? `- **Note**: ${c.Note}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Create
  server.registerTool(
    "fortnox_create_cost_center",
    {
      title: "Create Fortnox Cost Center",
      description: `Create a new cost center in Fortnox.

Args:
  - code (string): Cost center code, max 6 characters (required)
  - description (string): Description (required)
  - note (string): Additional notes
  - active (boolean): Whether active (default: true)
  - response_format ('markdown' | 'json'): Output format

Returns:
  The created cost center.`,
      inputSchema: CreateCostCenterSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: CreateCostCenterInput) => {
      try {
        const data: Record<string, unknown> = {
          Code: params.code,
          Description: params.description,
        };
        if (params.note !== undefined) data.Note = params.note;
        if (params.active !== undefined) data.Active = params.active;

        const response = await fortnoxRequest<CostCenterResponse>(
          "/3/costcenters",
          "POST",
          { CostCenter: data },
        );
        const c = response.CostCenter;

        const output = {
          code: c.Code,
          description: c.Description,
          active: c.Active ?? null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Cost Center Created\n\n- **Code**: ${c.Code}\n- **Description**: ${c.Description}\n- **Active**: ${formatBoolean(c.Active)}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Update
  server.registerTool(
    "fortnox_update_cost_center",
    {
      title: "Update Fortnox Cost Center",
      description: `Update an existing cost center. Only provided fields are changed.

Args:
  - code (string): Cost center code to update (required)
  - description (string): New description
  - note (string): Updated notes
  - active (boolean): Set active/inactive
  - response_format ('markdown' | 'json'): Output format

Returns:
  The updated cost center.`,
      inputSchema: UpdateCostCenterSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: UpdateCostCenterInput) => {
      try {
        const data: Record<string, unknown> = {};
        if (params.description !== undefined)
          data.Description = params.description;
        if (params.note !== undefined) data.Note = params.note;
        if (params.active !== undefined) data.Active = params.active;

        const response = await fortnoxRequest<CostCenterResponse>(
          `/3/costcenters/${encodeURIComponent(params.code)}`,
          "PUT",
          { CostCenter: data },
        );
        const c = response.CostCenter;

        const output = {
          code: c.Code,
          description: c.Description,
          active: c.Active ?? null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Cost Center Updated\n\n- **Code**: ${c.Code}\n- **Description**: ${c.Description}\n- **Active**: ${formatBoolean(c.Active)}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Delete
  server.registerTool(
    "fortnox_delete_cost_center",
    {
      title: "Delete Fortnox Cost Center",
      description: `Permanently delete a cost center from Fortnox.

WARNING: This action is irreversible.

Args:
  - code (string): Cost center code to delete (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Confirmation of deletion.`,
      inputSchema: DeleteCostCenterSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: DeleteCostCenterInput) => {
      try {
        await fortnoxRequest<void>(
          `/3/costcenters/${encodeURIComponent(params.code)}`,
          "DELETE",
        );

        const output = { deleted: true, code: params.code };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Cost Center Deleted\n\nCost center **${params.code}** has been permanently deleted.`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );
}
