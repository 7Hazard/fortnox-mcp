import { z } from "zod";
import { ResponseFormat } from "../constants.js";

export const ListTermsOfPaymentSchema = z.object({
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type ListTermsOfPaymentInput = z.infer<typeof ListTermsOfPaymentSchema>;

export const GetTermsOfPaymentSchema = z.object({
  code: z.string().min(1).max(25)
    .describe("Terms of payment code (e.g., '30', 'NET30')"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type GetTermsOfPaymentInput = z.infer<typeof GetTermsOfPaymentSchema>;

export const CreateTermsOfPaymentSchema = z.object({
  code: z.string().min(1).max(25)
    .describe("Terms of payment code (required)"),
  description: z.string().min(1)
    .describe("Description, e.g., '30 days net' (required)"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type CreateTermsOfPaymentInput = z.infer<typeof CreateTermsOfPaymentSchema>;

export const UpdateTermsOfPaymentSchema = z.object({
  code: z.string().min(1).max(25)
    .describe("Terms of payment code to update (required)"),
  description: z.string().min(1)
    .describe("New description (required)"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type UpdateTermsOfPaymentInput = z.infer<typeof UpdateTermsOfPaymentSchema>;

export const DeleteTermsOfPaymentSchema = z.object({
  code: z.string().min(1).max(25)
    .describe("Terms of payment code to delete (required)"),
  response_format: z.nativeEnum(ResponseFormat).default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' or 'json'")
}).strict();

export type DeleteTermsOfPaymentInput = z.infer<typeof DeleteTermsOfPaymentSchema>;
