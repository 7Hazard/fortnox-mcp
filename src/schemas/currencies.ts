import { z } from "zod";
import { ResponseFormat } from "../constants.js";

export const ListCurrenciesSchema = z
  .object({
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type ListCurrenciesInput = z.infer<typeof ListCurrenciesSchema>;

export const GetCurrencySchema = z
  .object({
    code: z
      .string()
      .length(3)
      .describe("Three-letter currency code (e.g., 'EUR', 'USD')"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type GetCurrencyInput = z.infer<typeof GetCurrencySchema>;

export const CreateCurrencySchema = z
  .object({
    code: z
      .string()
      .length(3)
      .describe("Three-letter currency code (e.g., 'EUR') (required)"),
    description: z.string().min(1).describe("Currency description (required)"),
    buy_rate: z.number().min(0).optional().describe("Buy exchange rate"),
    sell_rate: z.number().min(0).optional().describe("Sell exchange rate"),
    unit: z
      .number()
      .min(0)
      .optional()
      .describe("Unit amount for the exchange rate"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type CreateCurrencyInput = z.infer<typeof CreateCurrencySchema>;

export const UpdateCurrencySchema = z
  .object({
    code: z.string().length(3).describe("Currency code to update (required)"),
    description: z.string().min(1).optional().describe("New description"),
    buy_rate: z.number().min(0).optional().describe("New buy exchange rate"),
    sell_rate: z.number().min(0).optional().describe("New sell exchange rate"),
    unit: z.number().min(0).optional().describe("New unit amount"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type UpdateCurrencyInput = z.infer<typeof UpdateCurrencySchema>;

export const DeleteCurrencySchema = z
  .object({
    code: z.string().length(3).describe("Currency code to delete (required)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type DeleteCurrencyInput = z.infer<typeof DeleteCurrencySchema>;
