import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fortnoxRequest } from "../services/api.js";
import { ResponseFormat } from "../constants.js";
import {
  buildToolResponse,
  buildErrorResponse,
  formatMoney,
  formatDisplayDate,
  buildPaginationMeta,
} from "../services/formatters.js";
import {
  ListSupplierInvoicePaymentsSchema,
  GetSupplierInvoicePaymentSchema,
  CreateSupplierInvoicePaymentSchema,
  DeleteSupplierInvoicePaymentSchema,
  type ListSupplierInvoicePaymentsInput,
  type GetSupplierInvoicePaymentInput,
  type CreateSupplierInvoicePaymentInput,
  type DeleteSupplierInvoicePaymentInput,
} from "../schemas/payments.js";

// API response types
interface FortnoxSupplierInvoicePayment {
  Number: number;
  InvoiceNumber: string;
  Amount?: number;
  PaymentDate?: string;
  ModeOfPayment?: string;
  Currency?: string;
  Booked?: boolean;
  InvoiceSupplierName?: string;
  InvoiceSupplierNumber?: string;
  InvoiceTotal?: string;
  VoucherNumber?: number;
  VoucherSeries?: string;
  "@url"?: string;
}

interface FortnoxSupplierInvoicePaymentListItem {
  Number: number;
  InvoiceNumber: string;
  Amount?: number;
  PaymentDate?: string;
  Booked?: boolean;
  "@url"?: string;
}

interface SupplierInvoicePaymentListResponse {
  SupplierInvoicePayments: FortnoxSupplierInvoicePaymentListItem[];
  MetaInformation?: {
    "@TotalResources": number;
    "@TotalPages": number;
    "@CurrentPage": number;
  };
}

interface SupplierInvoicePaymentResponse {
  SupplierInvoicePayment: FortnoxSupplierInvoicePayment;
}

/**
 * Register all supplier invoice payment tools
 */
export function registerSupplierInvoicePaymentTools(server: McpServer): void {
  // List
  server.registerTool(
    "fortnox_list_supplier_invoice_payments",
    {
      title: "List Fortnox Supplier Invoice Payments",
      description: `List supplier invoice payments from Fortnox.

Args:
  - limit (number): Max results per page, 1-100 (default: 20)
  - page (number): Page number for pagination (default: 1)
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of supplier invoice payments with payment number, invoice number, amount, and date.`,
      inputSchema: ListSupplierInvoicePaymentsSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: ListSupplierInvoicePaymentsInput) => {
      try {
        const queryParams: Record<
          string,
          string | number | boolean | undefined
        > = {
          limit: params.limit,
          page: params.page,
        };

        const response =
          await fortnoxRequest<SupplierInvoicePaymentListResponse>(
            "/3/supplierinvoicepayments",
            "GET",
            undefined,
            queryParams,
          );
        const payments = response.SupplierInvoicePayments || [];
        const total =
          response.MetaInformation?.["@TotalResources"] || payments.length;

        const output = {
          ...buildPaginationMeta(
            total,
            params.page,
            params.limit,
            payments.length,
          ),
          payments: payments.map((p) => ({
            payment_number: p.Number,
            invoice_number: p.InvoiceNumber,
            amount: p.Amount ?? null,
            payment_date: p.PaymentDate || null,
            booked: p.Booked ?? null,
          })),
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          const lines = [`# Supplier Invoice Payments (${total} total)\n`];
          for (const p of payments) {
            lines.push(
              `## Payment ${p.Number} — Invoice #${p.InvoiceNumber}\n` +
                `- **Amount**: ${formatMoney(p.Amount)}\n` +
                `- **Date**: ${formatDisplayDate(p.PaymentDate)}\n` +
                `- **Booked**: ${p.Booked ? "Yes" : "No"}`,
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
    "fortnox_get_supplier_invoice_payment",
    {
      title: "Get Fortnox Supplier Invoice Payment",
      description: `Retrieve details about a specific supplier invoice payment.

Args:
  - payment_number (number): Payment number to retrieve (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Payment details including invoice, amount, date, and voucher reference.`,
      inputSchema: GetSupplierInvoicePaymentSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: GetSupplierInvoicePaymentInput) => {
      try {
        const response = await fortnoxRequest<SupplierInvoicePaymentResponse>(
          `/3/supplierinvoicepayments/${params.payment_number}`,
        );
        const p = response.SupplierInvoicePayment;

        const output = {
          payment_number: p.Number,
          invoice_number: p.InvoiceNumber,
          amount: p.Amount ?? null,
          payment_date: p.PaymentDate || null,
          mode_of_payment: p.ModeOfPayment || null,
          currency: p.Currency || null,
          booked: p.Booked ?? null,
          supplier_name: p.InvoiceSupplierName || null,
          invoice_total: p.InvoiceTotal || null,
          voucher_number: p.VoucherNumber || null,
          voucher_series: p.VoucherSeries || null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `# Supplier Invoice Payment ${p.Number}\n\n` +
              `- **Invoice**: #${p.InvoiceNumber}${p.InvoiceSupplierName ? ` (${p.InvoiceSupplierName})` : ""}\n` +
              `- **Amount**: ${formatMoney(p.Amount)}\n` +
              `- **Date**: ${formatDisplayDate(p.PaymentDate)}\n` +
              (p.ModeOfPayment
                ? `- **Payment Method**: ${p.ModeOfPayment}\n`
                : "") +
              `- **Booked**: ${p.Booked ? "Yes" : "No"}\n` +
              (p.VoucherSeries && p.VoucherNumber
                ? `- **Voucher**: ${p.VoucherSeries}${p.VoucherNumber}\n`
                : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Create
  server.registerTool(
    "fortnox_create_supplier_invoice_payment",
    {
      title: "Create Fortnox Supplier Invoice Payment",
      description: `Register a payment for a supplier invoice in Fortnox.

Args:
  - invoice_number (string): Supplier invoice number to pay (required)
  - payment_date (string): Payment date YYYY-MM-DD (required)
  - amount (number): Payment amount (defaults to full invoice amount)
  - mode_of_payment (string): Payment method code (e.g., 'BG', 'PG', 'AG')
  - currency (string): Currency code if not SEK (e.g., 'EUR')
  - currency_rate (number): Exchange rate for foreign currency payments
  - response_format ('markdown' | 'json'): Output format

Returns:
  The created supplier invoice payment record.`,
      inputSchema: CreateSupplierInvoicePaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: CreateSupplierInvoicePaymentInput) => {
      try {
        const paymentData: Record<string, unknown> = {
          InvoiceNumber: params.invoice_number,
          PaymentDate: params.payment_date,
        };

        if (params.amount !== undefined) paymentData.Amount = params.amount;
        if (params.mode_of_payment !== undefined)
          paymentData.ModeOfPayment = params.mode_of_payment;
        if (params.currency !== undefined)
          paymentData.Currency = params.currency;
        if (params.currency_rate !== undefined)
          paymentData.CurrencyRate = params.currency_rate;

        const response = await fortnoxRequest<SupplierInvoicePaymentResponse>(
          "/3/supplierinvoicepayments",
          "POST",
          { SupplierInvoicePayment: paymentData },
        );
        const p = response.SupplierInvoicePayment;

        const output = {
          payment_number: p.Number,
          invoice_number: p.InvoiceNumber,
          amount: p.Amount ?? null,
          payment_date: p.PaymentDate || null,
          booked: p.Booked ?? null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Supplier Invoice Payment Registered\n\n` +
              `- **Payment Number**: ${p.Number}\n` +
              `- **Invoice**: #${p.InvoiceNumber}\n` +
              `- **Amount**: ${formatMoney(p.Amount)}\n` +
              `- **Date**: ${formatDisplayDate(p.PaymentDate)}\n` +
              `- **Booked**: ${p.Booked ? "Yes" : "No"}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Delete
  server.registerTool(
    "fortnox_delete_supplier_invoice_payment",
    {
      title: "Delete Fortnox Supplier Invoice Payment",
      description: `Remove a supplier invoice payment from Fortnox.

WARNING: This removes the payment registration. The supplier invoice will revert to unpaid status.

Args:
  - payment_number (number): Payment number to delete (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Confirmation of deletion.`,
      inputSchema: DeleteSupplierInvoicePaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: DeleteSupplierInvoicePaymentInput) => {
      try {
        await fortnoxRequest<void>(
          `/3/supplierinvoicepayments/${params.payment_number}`,
          "DELETE",
        );

        const output = { deleted: true, payment_number: params.payment_number };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Supplier Invoice Payment Deleted\n\nPayment **${params.payment_number}** has been removed.`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Bookkeep
  server.registerTool(
    "fortnox_bookkeep_supplier_invoice_payment",
    {
      title: "Bookkeep Fortnox Supplier Invoice Payment",
      description: `Bookkeep (post to ledger) a supplier invoice payment in Fortnox.

Args:
  - payment_number (number): Payment number to bookkeep (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  The booked payment with voucher reference.`,
      inputSchema: GetSupplierInvoicePaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: GetSupplierInvoicePaymentInput) => {
      try {
        const response = await fortnoxRequest<SupplierInvoicePaymentResponse>(
          `/3/supplierinvoicepayments/${params.payment_number}/bookkeep`,
          "PUT",
          {},
        );
        const p = response.SupplierInvoicePayment;

        const output = {
          payment_number: p.Number,
          invoice_number: p.InvoiceNumber,
          amount: p.Amount ?? null,
          booked: p.Booked ?? null,
          voucher_series: p.VoucherSeries || null,
          voucher_number: p.VoucherNumber || null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Supplier Invoice Payment Booked\n\n` +
              `- **Payment**: ${p.Number}\n` +
              `- **Invoice**: #${p.InvoiceNumber}\n` +
              `- **Amount**: ${formatMoney(p.Amount)}\n` +
              (p.VoucherSeries && p.VoucherNumber
                ? `- **Voucher**: ${p.VoucherSeries}${p.VoucherNumber}\n`
                : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );
}
