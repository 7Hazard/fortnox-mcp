import { z } from "zod";
import { ResponseFormat, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "../constants.js";

/**
 * Invoice row for a contract
 */
export const ContractInvoiceRowSchema = z.object({
  article_number: z.string().optional()
    .describe("Article number"),
  description: z.string().optional()
    .describe("Row description"),
  price: z.number().optional()
    .describe("Unit price excluding VAT"),
  delivered_quantity: z.string().optional()
    .describe("Quantity (as string, e.g., '1', '10.5')"),
  unit: z.string().max(20).optional()
    .describe("Unit of measurement"),
  vat: z.number().min(0).max(100).optional()
    .describe("VAT rate as percentage"),
  account_number: z.number().int().min(1000).max(9999).optional()
    .describe("Account number for the row"),
  discount: z.number().min(0).optional()
    .describe("Discount amount or percent"),
  discount_type: z.enum(["AMOUNT", "PERCENT"]).optional()
    .describe("Discount type"),
  cost_center: z.string().optional()
    .describe("Cost center code"),
  project: z.string().optional()
    .describe("Project number"),
  row_id: z.number().int().optional()
    .describe("Row ID (used when updating specific rows)")
}).strict();

export type ContractInvoiceRow = z.infer<typeof ContractInvoiceRowSchema>;

export const ListContractsSchema = z.object({
  limit: z.number().int().min(1).max(MAX_PAGE_SIZE).default(DEFAULT_PAGE_SIZE)
    .describe("Maximum number of results to return (1-100)"),
  page: z.number().int().min(1).default(1)
    .describe("Page number for pagination"),
  filter: z.enum(["active", "inactive", "finished"]).optional()
    .describe("Filter contracts by status"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type ListContractsInput = z.infer<typeof ListContractsSchema>;

export const GetContractSchema = z.object({
  document_number: z.string().min(1)
    .describe("Contract document number to retrieve"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type GetContractInput = z.infer<typeof GetContractSchema>;

export const CreateContractSchema = z.object({
  customer_number: z.string().min(1)
    .describe("Customer number (required)"),
  period_end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
    .describe("End date for the contract period YYYY-MM-DD (required)"),
  invoice_rows: z.array(ContractInvoiceRowSchema).min(1)
    .describe("Invoice line items (required, minimum 1 row)"),
  period_start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()
    .describe("Start date for the contract period YYYY-MM-DD"),
  invoice_interval: z.number().int().min(0).optional()
    .describe("How often (in months) to generate invoices (0 = manual)"),
  continuous: z.boolean().optional()
    .describe("Whether the contract continues indefinitely"),
  contract_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()
    .describe("Contract date YYYY-MM-DD"),
  our_reference: z.string().max(25).optional()
    .describe("Our reference"),
  your_reference: z.string().optional()
    .describe("Customer reference"),
  terms_of_payment: z.string().optional()
    .describe("Payment terms code"),
  comments: z.string().max(1024).optional()
    .describe("Internal comments"),
  remarks: z.string().max(1024).optional()
    .describe("Remarks for the invoice"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type CreateContractInput = z.infer<typeof CreateContractSchema>;

export const UpdateContractSchema = z.object({
  document_number: z.string().min(1)
    .describe("Contract document number to update (required)"),
  period_end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()
    .describe("New end date YYYY-MM-DD"),
  invoice_rows: z.array(ContractInvoiceRowSchema).optional()
    .describe("Updated invoice rows"),
  invoice_interval: z.number().int().min(0).optional()
    .describe("Invoice interval in months"),
  continuous: z.boolean().optional()
    .describe("Whether the contract is continuous"),
  our_reference: z.string().max(25).optional()
    .describe("Our reference"),
  comments: z.string().max(1024).optional()
    .describe("Internal comments"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type UpdateContractInput = z.infer<typeof UpdateContractSchema>;

export const ContractActionSchema = z.object({
  document_number: z.string().min(1)
    .describe("Contract document number (required)"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type ContractActionInput = z.infer<typeof ContractActionSchema>;
