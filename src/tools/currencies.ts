import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fortnoxRequest } from "../services/api.js";
import { ResponseFormat } from "../constants.js";
import { buildToolResponse, buildErrorResponse } from "../services/formatters.js";
import {
  ListCurrenciesSchema,
  GetCurrencySchema,
  CreateCurrencySchema,
  UpdateCurrencySchema,
  DeleteCurrencySchema,
  type ListCurrenciesInput,
  type GetCurrencyInput,
  type CreateCurrencyInput,
  type UpdateCurrencyInput,
  type DeleteCurrencyInput
} from "../schemas/currencies.js";

interface FortnoxCurrency {
  Code: string;
  Description: string;
  BuyRate?: number;
  SellRate?: number;
  Unit?: number;
  Date?: string;
  IsAutomatic?: boolean;
  "@url"?: string;
}

interface CurrencyListResponse {
  Currencies: FortnoxCurrency[];
}

interface CurrencyResponse {
  Currency: FortnoxCurrency;
}

export function registerCurrencyTools(server: McpServer): void {
  // List
  server.registerTool(
    "fortnox_list_currencies",
    {
      title: "List Fortnox Currencies",
      description: `List all configured currencies in Fortnox.

Args:
  - response_format ('markdown' | 'json'): Output format

Returns:
  All currencies with code, description, and exchange rates.`,
      inputSchema: ListCurrenciesSchema,
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: true }
    },
    async (params: ListCurrenciesInput) => {
      try {
        const response = await fortnoxRequest<CurrencyListResponse>("/3/currencies");
        const currencies = response.Currencies || [];

        const output = {
          count: currencies.length,
          currencies: currencies.map((c) => ({
            code: c.Code,
            description: c.Description,
            buy_rate: c.BuyRate ?? null,
            sell_rate: c.SellRate ?? null,
            unit: c.Unit ?? null,
            date: c.Date || null,
            is_automatic: c.IsAutomatic ?? null
          }))
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          const lines = [`# Currencies (${currencies.length})\n`];
          for (const c of currencies) {
            lines.push(
              `## ${c.Code} — ${c.Description}\n` +
              (c.BuyRate !== undefined ? `- **Buy Rate**: ${c.BuyRate}\n` : "") +
              (c.SellRate !== undefined ? `- **Sell Rate**: ${c.SellRate}` : "")
            );
          }
          textContent = lines.join("\n");
        }

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Get
  server.registerTool(
    "fortnox_get_currency",
    {
      title: "Get Fortnox Currency",
      description: `Retrieve exchange rate details for a specific currency.

Args:
  - code (string): Three-letter currency code (e.g., 'EUR') (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Currency details with current exchange rates.`,
      inputSchema: GetCurrencySchema,
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: true }
    },
    async (params: GetCurrencyInput) => {
      try {
        const response = await fortnoxRequest<CurrencyResponse>(
          `/3/currencies/${encodeURIComponent(params.code)}`
        );
        const c = response.Currency;

        const output = {
          code: c.Code,
          description: c.Description,
          buy_rate: c.BuyRate ?? null,
          sell_rate: c.SellRate ?? null,
          unit: c.Unit ?? null,
          date: c.Date || null,
          is_automatic: c.IsAutomatic ?? null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `# ${c.Code} — ${c.Description}\n\n` +
            (c.BuyRate !== undefined ? `- **Buy Rate**: ${c.BuyRate}\n` : "") +
            (c.SellRate !== undefined ? `- **Sell Rate**: ${c.SellRate}\n` : "") +
            (c.Unit !== undefined ? `- **Unit**: ${c.Unit}\n` : "") +
            (c.Date ? `- **Date**: ${c.Date}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Create
  server.registerTool(
    "fortnox_create_currency",
    {
      title: "Create Fortnox Currency",
      description: `Add a new currency to Fortnox.

Args:
  - code (string): Three-letter ISO currency code (e.g., 'EUR') (required)
  - description (string): Currency name (required)
  - buy_rate (number): Buy exchange rate vs SEK
  - sell_rate (number): Sell exchange rate vs SEK
  - unit (number): Unit amount for the rate (e.g., 1, 100)
  - response_format ('markdown' | 'json'): Output format

Returns:
  The created currency.`,
      inputSchema: CreateCurrencySchema,
      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true }
    },
    async (params: CreateCurrencyInput) => {
      try {
        const data: Record<string, unknown> = { Code: params.code, Description: params.description };
        if (params.buy_rate !== undefined) data.BuyRate = params.buy_rate;
        if (params.sell_rate !== undefined) data.SellRate = params.sell_rate;
        if (params.unit !== undefined) data.Unit = params.unit;

        const response = await fortnoxRequest<CurrencyResponse>(
          "/3/currencies", "POST", { Currency: data }
        );
        const c = response.Currency;

        const output = { code: c.Code, description: c.Description, buy_rate: c.BuyRate ?? null, sell_rate: c.SellRate ?? null };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Currency Created\n\n- **Code**: ${c.Code}\n- **Description**: ${c.Description}\n` +
            (c.BuyRate !== undefined ? `- **Buy Rate**: ${c.BuyRate}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Update
  server.registerTool(
    "fortnox_update_currency",
    {
      title: "Update Fortnox Currency",
      description: `Update exchange rates or description for a currency.

Args:
  - code (string): Currency code to update (required)
  - description (string): New description
  - buy_rate (number): New buy exchange rate
  - sell_rate (number): New sell exchange rate
  - unit (number): New unit amount
  - response_format ('markdown' | 'json'): Output format

Returns:
  The updated currency.`,
      inputSchema: UpdateCurrencySchema,
      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: true }
    },
    async (params: UpdateCurrencyInput) => {
      try {
        const data: Record<string, unknown> = {};
        if (params.description !== undefined) data.Description = params.description;
        if (params.buy_rate !== undefined) data.BuyRate = params.buy_rate;
        if (params.sell_rate !== undefined) data.SellRate = params.sell_rate;
        if (params.unit !== undefined) data.Unit = params.unit;

        const response = await fortnoxRequest<CurrencyResponse>(
          `/3/currencies/${encodeURIComponent(params.code)}`, "PUT", { Currency: data }
        );
        const c = response.Currency;

        const output = { code: c.Code, description: c.Description, buy_rate: c.BuyRate ?? null, sell_rate: c.SellRate ?? null };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Currency Updated\n\n- **Code**: ${c.Code}\n- **Buy Rate**: ${c.BuyRate ?? "-"}\n- **Sell Rate**: ${c.SellRate ?? "-"}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Delete
  server.registerTool(
    "fortnox_delete_currency",
    {
      title: "Delete Fortnox Currency",
      description: `Remove a currency from Fortnox.

WARNING: This action is irreversible.

Args:
  - code (string): Currency code to delete (required)
  - response_format ('markdown' | 'json'): Output format`,
      inputSchema: DeleteCurrencySchema,
      annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: false, openWorldHint: true }
    },
    async (params: DeleteCurrencyInput) => {
      try {
        await fortnoxRequest<void>(`/3/currencies/${encodeURIComponent(params.code)}`, "DELETE");

        const output = { deleted: true, code: params.code };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Currency Deleted\n\nCurrency **${params.code}** has been removed.`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );
}
