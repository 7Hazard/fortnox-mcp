import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fortnoxRequest } from "../services/api.js";
import { ResponseFormat } from "../constants.js";
import {
  buildToolResponse,
  buildErrorResponse,
  formatMoney,
  formatDisplayDate,
  formatBoolean,
  buildPaginationMeta
} from "../services/formatters.js";
import {
  ListContractsSchema,
  GetContractSchema,
  CreateContractSchema,
  UpdateContractSchema,
  ContractActionSchema,
  type ListContractsInput,
  type GetContractInput,
  type CreateContractInput,
  type UpdateContractInput,
  type ContractActionInput
} from "../schemas/contracts.js";

// API response types
interface FortnoxContractRow {
  ArticleNumber?: string;
  Description?: string;
  Price?: number;
  DeliveredQuantity?: string;
  Unit?: string;
  VAT?: number;
  AccountNumber?: number;
  Discount?: number;
  DiscountType?: string;
  CostCenter?: string;
  Project?: string;
  RowId?: number;
}

interface FortnoxContract {
  DocumentNumber: string;
  CustomerNumber: string;
  CustomerName?: string;
  PeriodStart?: string;
  PeriodEnd: string;
  InvoiceInterval?: number;
  Continuous?: boolean;
  ContractDate?: string;
  Status?: string;
  Active?: boolean;
  Total?: number;
  InvoicesRemaining?: string;
  LastInvoiceDate?: string;
  OurReference?: string;
  YourReference?: string;
  Comments?: string;
  InvoiceRows?: FortnoxContractRow[];
  "@url"?: string;
}

interface FortnoxContractListItem {
  DocumentNumber: string;
  CustomerNumber: string;
  CustomerName?: string;
  PeriodStart?: string;
  PeriodEnd: string;
  Status?: string;
  Total?: number;
  Invoiceinterval?: number;
  Continuous?: boolean;
  InvoicesRemaining?: number;
  LastInvoiceDate?: string;
}

interface ContractListResponse {
  Contracts: FortnoxContractListItem[];
  MetaInformation?: {
    "@TotalResources": number;
    "@TotalPages": number;
    "@CurrentPage": number;
  };
}

interface ContractResponse {
  Contract: FortnoxContract;
}

interface InvoiceResponse {
  Invoice: {
    DocumentNumber: string;
    CustomerNumber: string;
    CustomerName?: string;
    Total?: number;
    InvoiceDate?: string;
  };
}

/**
 * Register all contract-related tools
 */
export function registerContractTools(server: McpServer): void {
  // List
  server.registerTool(
    "fortnox_list_contracts",
    {
      title: "List Fortnox Contracts",
      description: `List recurring contracts from Fortnox.

Args:
  - limit (number): Max results per page, 1-100 (default: 20)
  - page (number): Page number for pagination (default: 1)
  - filter ('active' | 'inactive' | 'finished'): Filter by status
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of contracts with document number, customer, period, and status.`,
      inputSchema: ListContractsSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: ListContractsInput) => {
      try {
        const queryParams: Record<string, string | number | boolean | undefined> = {
          limit: params.limit,
          page: params.page
        };
        if (params.filter) queryParams.filter = params.filter;

        const response = await fortnoxRequest<ContractListResponse>(
          "/3/contracts",
          "GET",
          undefined,
          queryParams
        );
        const contracts = response.Contracts || [];
        const total = response.MetaInformation?.["@TotalResources"] || contracts.length;

        const output = {
          ...buildPaginationMeta(total, params.page, params.limit, contracts.length),
          contracts: contracts.map((c) => ({
            document_number: c.DocumentNumber,
            customer_number: c.CustomerNumber,
            customer_name: c.CustomerName || null,
            period_start: c.PeriodStart || null,
            period_end: c.PeriodEnd,
            status: c.Status || null,
            total: c.Total ?? null,
            invoice_interval: c.Invoiceinterval ?? null,
            invoices_remaining: c.InvoicesRemaining ?? null,
            last_invoice_date: c.LastInvoiceDate || null
          }))
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          const lines = [`# Contracts (${total} total)\n`];
          for (const c of contracts) {
            lines.push(
              `## Contract ${c.DocumentNumber} — ${c.CustomerName || c.CustomerNumber}\n` +
              (c.Status ? `- **Status**: ${c.Status}\n` : "") +
              `- **Period**: ${formatDisplayDate(c.PeriodStart)} – ${formatDisplayDate(c.PeriodEnd)}\n` +
              (c.Total !== undefined ? `- **Total**: ${formatMoney(c.Total)}\n` : "") +
              (c.Invoiceinterval ? `- **Interval**: every ${c.Invoiceinterval} month(s)\n` : "")
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
    "fortnox_get_contract",
    {
      title: "Get Fortnox Contract",
      description: `Retrieve detailed information about a specific contract.

Args:
  - document_number (string): Contract document number (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Full contract details including invoice rows, customer, period, and settings.`,
      inputSchema: GetContractSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GetContractInput) => {
      try {
        const response = await fortnoxRequest<ContractResponse>(
          `/3/contracts/${encodeURIComponent(params.document_number)}`
        );
        const c = response.Contract;

        const output = {
          document_number: c.DocumentNumber,
          customer_number: c.CustomerNumber,
          customer_name: c.CustomerName || null,
          period_start: c.PeriodStart || null,
          period_end: c.PeriodEnd,
          invoice_interval: c.InvoiceInterval ?? null,
          continuous: c.Continuous ?? null,
          status: c.Status || null,
          active: c.Active ?? null,
          total: c.Total ?? null,
          invoices_remaining: c.InvoicesRemaining || null,
          last_invoice_date: c.LastInvoiceDate || null,
          our_reference: c.OurReference || null,
          rows: (c.InvoiceRows || []).map((r) => ({
            row_id: r.RowId ?? null,
            article_number: r.ArticleNumber || null,
            description: r.Description || null,
            price: r.Price ?? null,
            quantity: r.DeliveredQuantity || null,
            unit: r.Unit || null,
            vat: r.VAT ?? null
          }))
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `# Contract ${c.DocumentNumber}\n\n` +
            `- **Customer**: ${c.CustomerName || c.CustomerNumber}\n` +
            `- **Period**: ${formatDisplayDate(c.PeriodStart)} – ${formatDisplayDate(c.PeriodEnd)}\n` +
            (c.InvoiceInterval !== undefined ? `- **Invoice Interval**: ${c.InvoiceInterval} month(s)\n` : "") +
            `- **Continuous**: ${formatBoolean(c.Continuous)}\n` +
            (c.Status ? `- **Status**: ${c.Status}\n` : "") +
            (c.Total !== undefined ? `- **Total**: ${formatMoney(c.Total)}\n` : "") +
            (c.LastInvoiceDate ? `- **Last Invoice**: ${formatDisplayDate(c.LastInvoiceDate)}\n` : "") +
            `\n### Rows\n` +
            (c.InvoiceRows || []).map((r) =>
              `- ${r.Description || r.ArticleNumber || "–"}: ${r.DeliveredQuantity || "1"} × ${formatMoney(r.Price)} (${r.VAT ?? 0}% VAT)`
            ).join("\n");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Create
  server.registerTool(
    "fortnox_create_contract",
    {
      title: "Create Fortnox Contract",
      description: `Create a recurring invoice contract in Fortnox.

Args:
  - customer_number (string): Customer number (required)
  - period_end (string): Contract period end date YYYY-MM-DD (required)
  - invoice_rows (array): Line items (required, minimum 1)
    - Each row: { article_number?, description?, price?, delivered_quantity?, unit?, vat?, account_number? }
  - period_start (string): Contract period start date YYYY-MM-DD
  - invoice_interval (number): How often in months to generate invoices (0 = manual)
  - continuous (boolean): Recurring indefinitely
  - contract_date (string): Contract date YYYY-MM-DD
  - terms_of_payment (string): Payment terms code
  - comments (string): Internal comments
  - response_format ('markdown' | 'json'): Output format

Returns:
  The created contract with document number.`,
      inputSchema: CreateContractSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: CreateContractInput) => {
      try {
        const contractData: Record<string, unknown> = {
          CustomerNumber: params.customer_number,
          PeriodEnd: params.period_end,
          InvoiceRows: params.invoice_rows.map((r) => {
            const row: Record<string, unknown> = {};
            if (r.article_number !== undefined) row.ArticleNumber = r.article_number;
            if (r.description !== undefined) row.Description = r.description;
            if (r.price !== undefined) row.Price = r.price;
            if (r.delivered_quantity !== undefined) row.DeliveredQuantity = r.delivered_quantity;
            if (r.unit !== undefined) row.Unit = r.unit;
            if (r.vat !== undefined) row.VAT = r.vat;
            if (r.account_number !== undefined) row.AccountNumber = r.account_number;
            if (r.discount !== undefined) row.Discount = r.discount;
            if (r.discount_type !== undefined) row.DiscountType = r.discount_type;
            if (r.cost_center !== undefined) row.CostCenter = r.cost_center;
            if (r.project !== undefined) row.Project = r.project;
            return row;
          })
        };

        if (params.period_start !== undefined) contractData.PeriodStart = params.period_start;
        if (params.invoice_interval !== undefined) contractData.InvoiceInterval = params.invoice_interval;
        if (params.continuous !== undefined) contractData.Continuous = params.continuous;
        if (params.contract_date !== undefined) contractData.ContractDate = params.contract_date;
        if (params.our_reference !== undefined) contractData.OurReference = params.our_reference;
        if (params.your_reference !== undefined) contractData.YourReference = params.your_reference;
        if (params.terms_of_payment !== undefined) contractData.TermsOfPayment = params.terms_of_payment;
        if (params.comments !== undefined) contractData.Comments = params.comments;
        if (params.remarks !== undefined) contractData.Remarks = params.remarks;

        const response = await fortnoxRequest<ContractResponse>(
          "/3/contracts",
          "POST",
          { Contract: contractData }
        );
        const c = response.Contract;

        const output = {
          document_number: c.DocumentNumber,
          customer_number: c.CustomerNumber,
          customer_name: c.CustomerName || null,
          period_end: c.PeriodEnd,
          total: c.Total ?? null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Contract Created\n\n` +
            `- **Document**: ${c.DocumentNumber}\n` +
            `- **Customer**: ${c.CustomerName || c.CustomerNumber}\n` +
            `- **Period End**: ${formatDisplayDate(c.PeriodEnd)}\n` +
            (c.Total !== undefined ? `- **Total**: ${formatMoney(c.Total)}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Update
  server.registerTool(
    "fortnox_update_contract",
    {
      title: "Update Fortnox Contract",
      description: `Update an existing contract. Only provided fields are changed.

NOTE: When updating rows, if row_id is specified on rows, only those rows are updated.
Rows without row_id are treated as new rows. Rows not included are removed.

Args:
  - document_number (string): Contract document number (required)
  - period_end (string): New end date YYYY-MM-DD
  - invoice_rows (array): Updated line items
  - invoice_interval (number): Invoice interval in months
  - continuous (boolean): Continuous/recurring status
  - our_reference (string): Our reference
  - comments (string): Internal comments
  - response_format ('markdown' | 'json'): Output format

Returns:
  The updated contract.`,
      inputSchema: UpdateContractSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: UpdateContractInput) => {
      try {
        const contractData: Record<string, unknown> = {};

        if (params.period_end !== undefined) contractData.PeriodEnd = params.period_end;
        if (params.invoice_interval !== undefined) contractData.InvoiceInterval = params.invoice_interval;
        if (params.continuous !== undefined) contractData.Continuous = params.continuous;
        if (params.our_reference !== undefined) contractData.OurReference = params.our_reference;
        if (params.comments !== undefined) contractData.Comments = params.comments;
        if (params.invoice_rows !== undefined) {
          contractData.InvoiceRows = params.invoice_rows.map((r) => {
            const row: Record<string, unknown> = {};
            if (r.row_id !== undefined) row.RowId = r.row_id;
            if (r.article_number !== undefined) row.ArticleNumber = r.article_number;
            if (r.description !== undefined) row.Description = r.description;
            if (r.price !== undefined) row.Price = r.price;
            if (r.delivered_quantity !== undefined) row.DeliveredQuantity = r.delivered_quantity;
            if (r.unit !== undefined) row.Unit = r.unit;
            if (r.vat !== undefined) row.VAT = r.vat;
            if (r.account_number !== undefined) row.AccountNumber = r.account_number;
            return row;
          });
        }

        const response = await fortnoxRequest<ContractResponse>(
          `/3/contracts/${encodeURIComponent(params.document_number)}`,
          "PUT",
          { Contract: contractData }
        );
        const c = response.Contract;

        const output = {
          document_number: c.DocumentNumber,
          customer_number: c.CustomerNumber,
          period_end: c.PeriodEnd,
          total: c.Total ?? null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Contract Updated\n\n- **Document**: ${c.DocumentNumber}\n- **Customer**: ${c.CustomerName || c.CustomerNumber}\n- **Period End**: ${formatDisplayDate(c.PeriodEnd)}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Create invoice from contract
  server.registerTool(
    "fortnox_create_invoice_from_contract",
    {
      title: "Create Invoice from Fortnox Contract",
      description: `Generate a new invoice from an existing recurring contract.

This creates the next invoice in the contract sequence.

Args:
  - document_number (string): Contract document number (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  The newly created invoice details.`,
      inputSchema: ContractActionSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: ContractActionInput) => {
      try {
        const response = await fortnoxRequest<InvoiceResponse>(
          `/3/contracts/${encodeURIComponent(params.document_number)}/createinvoice`,
          "PUT",
          {}
        );
        const inv = response.Invoice;

        const output = {
          invoice_number: inv.DocumentNumber,
          customer_number: inv.CustomerNumber,
          customer_name: inv.CustomerName || null,
          total: inv.Total ?? null,
          invoice_date: inv.InvoiceDate || null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Invoice Created from Contract\n\n` +
            `- **Invoice Number**: ${inv.DocumentNumber}\n` +
            `- **Customer**: ${inv.CustomerName || inv.CustomerNumber}\n` +
            (inv.Total !== undefined ? `- **Total**: ${formatMoney(inv.Total)}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Finish contract
  server.registerTool(
    "fortnox_finish_contract",
    {
      title: "Finish Fortnox Contract",
      description: `Mark a contract as finished in Fortnox. No more invoices will be generated.

Args:
  - document_number (string): Contract document number (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  The updated contract with finished status.`,
      inputSchema: ContractActionSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: ContractActionInput) => {
      try {
        const response = await fortnoxRequest<ContractResponse>(
          `/3/contracts/${encodeURIComponent(params.document_number)}/finish`,
          "PUT",
          {}
        );
        const c = response.Contract;

        const output = {
          document_number: c.DocumentNumber,
          status: c.Status || null,
          active: c.Active ?? null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Contract Finished\n\n- **Document**: ${c.DocumentNumber}\n- **Status**: ${c.Status || "finished"}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );
}
