import { z } from "zod";
import { ResponseFormat, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "../constants.js";

/**
 * Schema for listing invoice payments
 */
export const ListInvoicePaymentsSchema = z.object({
  limit: z.number()
    .int()
    .min(1)
    .max(MAX_PAGE_SIZE)
    .default(DEFAULT_PAGE_SIZE)
    .describe("Maximum number of results to return (1-100)"),
  page: z.number()
    .int()
    .min(1)
    .default(1)
    .describe("Page number for pagination"),
  invoice_number: z.number()
    .int()
    .min(1)
    .optional()
    .describe("Filter by invoice number"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type ListInvoicePaymentsInput = z.infer<typeof ListInvoicePaymentsSchema>;

/**
 * Schema for getting a single invoice payment
 */
export const GetInvoicePaymentSchema = z.object({
  payment_number: z.string()
    .min(1)
    .describe("The payment number to retrieve"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type GetInvoicePaymentInput = z.infer<typeof GetInvoicePaymentSchema>;

/**
 * Schema for creating an invoice payment
 */
export const CreateInvoicePaymentSchema = z.object({
  invoice_number: z.number()
    .int()
    .min(1)
    .describe("Invoice number to register payment for (required)"),
  payment_date: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .describe("Payment date (YYYY-MM-DD, required)"),
  amount: z.number()
    .min(0)
    .optional()
    .describe("Payment amount (defaults to full invoice amount)"),
  mode_of_payment: z.string()
    .max(10)
    .optional()
    .describe("Payment method code (e.g., 'BG', 'PG', 'AG', 'BANKGIRO')"),
  mode_of_payment_account: z.number()
    .int()
    .min(1000)
    .max(9999)
    .optional()
    .describe("Account number for the payment method"),
  currency: z.string()
    .length(3)
    .optional()
    .describe("Currency code if not SEK (e.g., 'EUR', 'USD')"),
  currency_rate: z.number()
    .min(0)
    .optional()
    .describe("Exchange rate if paying in foreign currency"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type CreateInvoicePaymentInput = z.infer<typeof CreateInvoicePaymentSchema>;

/**
 * Schema for deleting an invoice payment
 */
export const DeleteInvoicePaymentSchema = z.object({
  payment_number: z.string()
    .min(1)
    .describe("Payment number to delete (required)"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type DeleteInvoicePaymentInput = z.infer<typeof DeleteInvoicePaymentSchema>;

/**
 * Schema for bookkeeping an invoice payment
 */
export const BookkeepInvoicePaymentSchema = z.object({
  payment_number: z.string()
    .min(1)
    .describe("Payment number to bookkeep (required)"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type BookkeepInvoicePaymentInput = z.infer<typeof BookkeepInvoicePaymentSchema>;

// ---- Supplier Invoice Payments ----

/**
 * Schema for listing supplier invoice payments
 */
export const ListSupplierInvoicePaymentsSchema = z.object({
  limit: z.number()
    .int()
    .min(1)
    .max(MAX_PAGE_SIZE)
    .default(DEFAULT_PAGE_SIZE)
    .describe("Maximum number of results to return (1-100)"),
  page: z.number()
    .int()
    .min(1)
    .default(1)
    .describe("Page number for pagination"),
  invoice_number: z.string()
    .optional()
    .describe("Filter by supplier invoice number"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type ListSupplierInvoicePaymentsInput = z.infer<typeof ListSupplierInvoicePaymentsSchema>;

/**
 * Schema for getting a single supplier invoice payment
 */
export const GetSupplierInvoicePaymentSchema = z.object({
  payment_number: z.number()
    .int()
    .min(1)
    .describe("The supplier invoice payment number to retrieve"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type GetSupplierInvoicePaymentInput = z.infer<typeof GetSupplierInvoicePaymentSchema>;

/**
 * Schema for creating a supplier invoice payment
 */
export const CreateSupplierInvoicePaymentSchema = z.object({
  invoice_number: z.string()
    .min(1)
    .describe("Supplier invoice number to register payment for (required)"),
  payment_date: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .describe("Payment date (YYYY-MM-DD, required)"),
  amount: z.number()
    .min(0)
    .optional()
    .describe("Payment amount (defaults to full invoice amount)"),
  mode_of_payment: z.string()
    .max(10)
    .optional()
    .describe("Payment method code (e.g., 'BG', 'PG', 'AG')"),
  currency: z.string()
    .length(3)
    .optional()
    .describe("Currency code if not SEK (e.g., 'EUR', 'USD')"),
  currency_rate: z.number()
    .min(0)
    .optional()
    .describe("Exchange rate if paying in foreign currency"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type CreateSupplierInvoicePaymentInput = z.infer<typeof CreateSupplierInvoicePaymentSchema>;

/**
 * Schema for deleting a supplier invoice payment
 */
export const DeleteSupplierInvoicePaymentSchema = z.object({
  payment_number: z.number()
    .int()
    .min(1)
    .describe("Supplier invoice payment number to delete (required)"),
  response_format: z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type DeleteSupplierInvoicePaymentInput = z.infer<typeof DeleteSupplierInvoicePaymentSchema>;
