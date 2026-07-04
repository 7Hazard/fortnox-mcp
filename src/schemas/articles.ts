import { z } from "zod";
import {
  ResponseFormat,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
} from "../constants.js";

/**
 * Schema for listing articles
 */
export const ListArticlesSchema = z
  .object({
    limit: z
      .number()
      .int()
      .min(1)
      .max(MAX_PAGE_SIZE)
      .default(DEFAULT_PAGE_SIZE)
      .describe("Maximum number of results to return (1-100)"),
    page: z
      .number()
      .int()
      .min(1)
      .default(1)
      .describe("Page number for pagination"),
    filter: z
      .enum(["active", "inactive"])
      .optional()
      .describe("Filter by article status"),
    search_description: z
      .string()
      .max(200)
      .optional()
      .describe("Search articles by description (partial match)"),
    article_number: z
      .string()
      .max(50)
      .optional()
      .describe("Filter by specific article number"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type ListArticlesInput = z.infer<typeof ListArticlesSchema>;

/**
 * Schema for getting a single article
 */
export const GetArticleSchema = z
  .object({
    article_number: z
      .string()
      .min(1)
      .describe("The article number to retrieve"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type GetArticleInput = z.infer<typeof GetArticleSchema>;

/**
 * Schema for creating an article
 */
export const CreateArticleSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(200)
      .describe("Article description/name (required)"),
    article_number: z
      .string()
      .max(50)
      .optional()
      .describe("Article number (auto-generated if not provided)"),
    type: z
      .enum(["STOCK", "SERVICE"])
      .optional()
      .describe(
        "Article type: STOCK (physical goods) or SERVICE (default: SERVICE)",
      ),
    sales_price: z
      .number()
      .min(0)
      .optional()
      .describe("Sales price excluding VAT"),
    purchase_price: z.number().min(0).optional().describe("Purchase price"),
    vat: z
      .number()
      .min(0)
      .max(100)
      .optional()
      .describe("VAT rate as percentage (e.g., 25 for 25%)"),
    unit: z
      .string()
      .max(50)
      .optional()
      .describe("Unit of measurement (e.g., 'pcs', 'h', 'kg')"),
    sales_account: z
      .number()
      .int()
      .min(1000)
      .max(9999)
      .optional()
      .describe("Sales account number"),
    purchase_account: z
      .number()
      .int()
      .min(1000)
      .max(9999)
      .optional()
      .describe("Purchase account number"),
    eu_account: z
      .number()
      .int()
      .min(1000)
      .max(9999)
      .optional()
      .describe("EU sales account number"),
    export_account: z
      .number()
      .int()
      .min(1000)
      .max(9999)
      .optional()
      .describe("Export sales account number"),
    stock_goods: z
      .boolean()
      .optional()
      .describe("Whether to track stock for this article"),
    note: z
      .string()
      .max(10000)
      .optional()
      .describe("Internal notes about the article"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type CreateArticleInput = z.infer<typeof CreateArticleSchema>;

/**
 * Schema for updating an article
 */
export const UpdateArticleSchema = z
  .object({
    article_number: z
      .string()
      .min(1)
      .describe("Article number to update (required)"),
    description: z
      .string()
      .min(1)
      .max(200)
      .optional()
      .describe("Article description/name"),
    sales_price: z
      .number()
      .min(0)
      .optional()
      .describe("Sales price excluding VAT"),
    purchase_price: z.number().min(0).optional().describe("Purchase price"),
    vat: z
      .number()
      .min(0)
      .max(100)
      .optional()
      .describe("VAT rate as percentage"),
    unit: z.string().max(50).optional().describe("Unit of measurement"),
    sales_account: z
      .number()
      .int()
      .min(1000)
      .max(9999)
      .optional()
      .describe("Sales account number"),
    active: z.boolean().optional().describe("Whether the article is active"),
    note: z
      .string()
      .max(10000)
      .optional()
      .describe("Internal notes about the article"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type UpdateArticleInput = z.infer<typeof UpdateArticleSchema>;

/**
 * Schema for deleting an article
 */
export const DeleteArticleSchema = z
  .object({
    article_number: z
      .string()
      .min(1)
      .describe("Article number to delete (required)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type DeleteArticleInput = z.infer<typeof DeleteArticleSchema>;
