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
  ListInvoicePaymentsSchema,
  GetInvoicePaymentSchema,
  CreateInvoicePaymentSchema,
  DeleteInvoicePaymentSchema,
  BookkeepInvoicePaymentSchema,
  type ListInvoicePaymentsInput,
  type GetInvoicePaymentInput,
  type CreateInvoicePaymentInput,
  type DeleteInvoicePaymentInput,
  type BookkeepInvoicePaymentInput,
} from "../schemas/payments.js";

// API response types
interface FortnoxInvoicePayment {
  Number: string;
  InvoiceNumber: number;
  Amount?: number;
  PaymentDate?: string;
  ModeOfPayment?: string;
  ModeOfPaymentAccount?: number;
  Currency?: string;
  Booked?: boolean;
  InvoiceCustomerName?: string;
  InvoiceCustomerNumber?: string;
  InvoiceTotal?: string;
  VoucherNumber?: number;
  VoucherSeries?: string;
  "@url"?: string;
}

interface FortnoxInvoicePaymentListItem {
  Number: string;
  InvoiceNumber: number;
  Amount?: number;
  PaymentDate?: string;
  Booked?: boolean;
  "@url"?: string;
}

interface InvoicePaymentListResponse {
  InvoicePayments: FortnoxInvoicePaymentListItem[];
  MetaInformation?: {
    "@TotalResources": number;
    "@TotalPages": number;
    "@CurrentPage": number;
  };
}

interface InvoicePaymentResponse {
  InvoicePayment: FortnoxInvoicePayment;
}

/**
 * Register all invoice payment-related tools
 */
export function registerInvoicePaymentTools(server: McpServer): void {
  // List invoice payments
  server.registerTool(
    "fortnox_list_invoice_payments",
    {
      title: "List Fortnox Invoice Payments",
      description: `List customer invoice payments from Fortnox.

Args:
  - limit (number): Max results per page, 1-100 (default: 20)
  - page (number): Page number for pagination (default: 1)
  - invoice_number (number): Filter payments for a specific invoice
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of invoice payments with payment number, invoice number, amount, and date.

Examples:
  - All payments for invoice 1042: invoice_number=1042
  - All recent payments: (no filter)`,
      inputSchema: ListInvoicePaymentsSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: ListInvoicePaymentsInput) => {
      try {
        const queryParams: Record<
          string,
          string | number | boolean | undefined
        > = {
          limit: params.limit,
          page: params.page,
        };
        if (params.invoice_number)
          queryParams.invoicenumber = params.invoice_number;

        const response = await fortnoxRequest<InvoicePaymentListResponse>(
          "/3/invoicepayments",
          "GET",
          undefined,
          queryParams,
        );
        const payments = response.InvoicePayments || [];
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
          const lines = [`# Invoice Payments (${total} total)\n`];
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

  // Get single payment
  server.registerTool(
    "fortnox_get_invoice_payment",
    {
      title: "Get Fortnox Invoice Payment",
      description: `Retrieve details about a specific invoice payment.

Args:
  - payment_number (string): Payment number to retrieve (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Payment details including invoice, amount, date, and voucher reference.`,
      inputSchema: GetInvoicePaymentSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: GetInvoicePaymentInput) => {
      try {
        const response = await fortnoxRequest<InvoicePaymentResponse>(
          `/3/invoicepayments/${encodeURIComponent(params.payment_number)}`,
        );
        const p = response.InvoicePayment;

        const output = {
          payment_number: p.Number,
          invoice_number: p.InvoiceNumber,
          amount: p.Amount ?? null,
          payment_date: p.PaymentDate || null,
          mode_of_payment: p.ModeOfPayment || null,
          mode_of_payment_account: p.ModeOfPaymentAccount || null,
          currency: p.Currency || null,
          booked: p.Booked ?? null,
          customer_name: p.InvoiceCustomerName || null,
          invoice_total: p.InvoiceTotal || null,
          voucher_number: p.VoucherNumber || null,
          voucher_series: p.VoucherSeries || null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `# Invoice Payment ${p.Number}\n\n` +
              `- **Invoice**: #${p.InvoiceNumber}${p.InvoiceCustomerName ? ` (${p.InvoiceCustomerName})` : ""}\n` +
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

  // Create payment
  server.registerTool(
    "fortnox_create_invoice_payment",
    {
      title: "Create Fortnox Invoice Payment",
      description: `Register a payment for a customer invoice in Fortnox.

Args:
  - invoice_number (number): Invoice number to mark as paid (required)
  - payment_date (string): Payment date YYYY-MM-DD (required)
  - amount (number): Payment amount (defaults to full invoice amount)
  - mode_of_payment (string): Payment method code (e.g., 'BG', 'PG', 'AG')
  - mode_of_payment_account (number): Account number for the payment
  - currency (string): Currency code if not SEK (e.g., 'EUR')
  - currency_rate (number): Exchange rate for foreign currency payments
  - response_format ('markdown' | 'json'): Output format

Returns:
  The created payment record with payment number.

Example:
  Register that invoice 1042 was fully paid today via bank:
  { invoice_number: 1042, payment_date: "2026-07-05", mode_of_payment: "BG" }`,
      inputSchema: CreateInvoicePaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: CreateInvoicePaymentInput) => {
      try {
        const paymentData: Record<string, unknown> = {
          InvoiceNumber: params.invoice_number,
          PaymentDate: params.payment_date,
        };

        if (params.amount !== undefined) paymentData.Amount = params.amount;
        if (params.mode_of_payment !== undefined)
          paymentData.ModeOfPayment = params.mode_of_payment;
        if (params.mode_of_payment_account !== undefined)
          paymentData.ModeOfPaymentAccount = params.mode_of_payment_account;
        if (params.currency !== undefined)
          paymentData.Currency = params.currency;
        if (params.currency_rate !== undefined)
          paymentData.CurrencyRate = params.currency_rate;

        const response = await fortnoxRequest<InvoicePaymentResponse>(
          "/3/invoicepayments",
          "POST",
          { InvoicePayment: paymentData },
        );
        const p = response.InvoicePayment;

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
            : `## Invoice Payment Registered\n\n` +
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

  // Delete payment
  server.registerTool(
    "fortnox_delete_invoice_payment",
    {
      title: "Delete Fortnox Invoice Payment",
      description: `Remove an invoice payment from Fortnox.

WARNING: This removes the payment registration. The invoice will revert to unpaid status.

Args:
  - payment_number (string): Payment number to delete (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Confirmation of deletion.`,
      inputSchema: DeleteInvoicePaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: DeleteInvoicePaymentInput) => {
      try {
        await fortnoxRequest<void>(
          `/3/invoicepayments/${encodeURIComponent(params.payment_number)}`,
          "DELETE",
        );

        const output = { deleted: true, payment_number: params.payment_number };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Invoice Payment Deleted\n\nPayment **${params.payment_number}** has been removed.`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Bookkeep payment
  server.registerTool(
    "fortnox_bookkeep_invoice_payment",
    {
      title: "Bookkeep Fortnox Invoice Payment",
      description: `Bookkeep (post to ledger) an invoice payment in Fortnox.

Args:
  - payment_number (string): Payment number to bookkeep (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  The booked payment details.`,
      inputSchema: BookkeepInvoicePaymentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: BookkeepInvoicePaymentInput) => {
      try {
        const response = await fortnoxRequest<InvoicePaymentResponse>(
          `/3/invoicepayments/${encodeURIComponent(params.payment_number)}/bookkeep`,
          "PUT",
          {},
        );
        const p = response.InvoicePayment;

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
            : `## Invoice Payment Booked\n\n` +
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
