import { z } from "zod";
import {
  ResponseFormat,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
} from "../constants.js";
import { DatePeriodEnum } from "./invoices.js";

/**
 * Project status enum for filtering
 */
export const ProjectStatusEnum = z.enum(["NOTSTARTED", "ONGOING", "COMPLETED"]);

export type ProjectStatus = z.infer<typeof ProjectStatusEnum>;

/**
 * Schema for listing projects
 */
export const ListProjectsSchema = z
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
    fetch_all: z
      .boolean()
      .default(false)
      .describe("Fetch all results by auto-paginating (max 10,000 results)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type ListProjectsInput = z.infer<typeof ListProjectsSchema>;

/**
 * Schema for getting a single project
 */
export const GetProjectSchema = z
  .object({
    project_number: z
      .string()
      .min(1)
      .describe("The project number to retrieve"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type GetProjectInput = z.infer<typeof GetProjectSchema>;

/**
 * Schema for creating a project
 */
export const CreateProjectSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(50)
      .describe("Project description/name (required)"),
    project_number: z
      .string()
      .max(20)
      .optional()
      .describe("Project number (auto-generated if not provided)"),
    status: ProjectStatusEnum.optional().describe(
      "Project status (default: NOTSTARTED)",
    ),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional()
      .describe("Project start date (YYYY-MM-DD)"),
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional()
      .describe("Project end date (YYYY-MM-DD)"),
    project_leader: z
      .string()
      .max(50)
      .optional()
      .describe("Name of the project leader"),
    contact_person: z
      .string()
      .max(50)
      .optional()
      .describe("Name of the contact person"),
    comments: z
      .string()
      .max(512)
      .optional()
      .describe("Internal project comments"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type CreateProjectInput = z.infer<typeof CreateProjectSchema>;

/**
 * Schema for updating a project
 */
export const UpdateProjectSchema = z
  .object({
    project_number: z
      .string()
      .min(1)
      .describe("Project number to update (required)"),
    description: z
      .string()
      .min(1)
      .max(50)
      .optional()
      .describe("Project description/name"),
    status: ProjectStatusEnum.optional().describe("Project status"),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional()
      .describe("Project start date (YYYY-MM-DD)"),
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional()
      .describe("Project end date (YYYY-MM-DD)"),
    project_leader: z
      .string()
      .max(50)
      .optional()
      .describe("Name of the project leader"),
    contact_person: z
      .string()
      .max(50)
      .optional()
      .describe("Name of the contact person"),
    comments: z
      .string()
      .max(512)
      .optional()
      .describe("Internal project comments"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type UpdateProjectInput = z.infer<typeof UpdateProjectSchema>;

/**
 * Schema for deleting a project
 */
export const DeleteProjectSchema = z
  .object({
    project_number: z
      .string()
      .min(1)
      .describe("Project number to delete (required)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type DeleteProjectInput = z.infer<typeof DeleteProjectSchema>;

/**
 * Schema for listing cost centers
 */
export const ListCostCentersSchema = z
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
    fetch_all: z
      .boolean()
      .default(false)
      .describe("Fetch all results by auto-paginating (max 10,000 results)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type ListCostCentersInput = z.infer<typeof ListCostCentersSchema>;

/**
 * Schema for getting a single cost center
 */
export const GetCostCenterSchema = z
  .object({
    code: z.string().min(1).describe("The cost center code to retrieve"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type GetCostCenterInput = z.infer<typeof GetCostCenterSchema>;

/**
 * Schema for creating a cost center
 */
export const CreateCostCenterSchema = z
  .object({
    code: z
      .string()
      .min(1)
      .max(6)
      .describe("Cost center code (required, max 6 chars)"),
    description: z
      .string()
      .min(1)
      .describe("Cost center description (required)"),
    note: z.string().optional().describe("Additional notes"),
    active: z
      .boolean()
      .optional()
      .describe("Whether the cost center is active (default: true)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type CreateCostCenterInput = z.infer<typeof CreateCostCenterSchema>;

/**
 * Schema for updating a cost center
 */
export const UpdateCostCenterSchema = z
  .object({
    code: z
      .string()
      .min(1)
      .max(6)
      .describe("Cost center code to update (required)"),
    description: z.string().min(1).optional().describe("New description"),
    note: z.string().optional().describe("Updated notes"),
    active: z.boolean().optional().describe("Set active/inactive status"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type UpdateCostCenterInput = z.infer<typeof UpdateCostCenterSchema>;

/**
 * Schema for deleting a cost center
 */
export const DeleteCostCenterSchema = z
  .object({
    code: z
      .string()
      .min(1)
      .max(6)
      .describe("Cost center code to delete (required)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type DeleteCostCenterInput = z.infer<typeof DeleteCostCenterSchema>;

/**
 * Schema for listing financial years
 */
export const ListFinancialYearsSchema = z
  .object({
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type ListFinancialYearsInput = z.infer<typeof ListFinancialYearsSchema>;

/**
 * Schema for listing articles/products
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
    fetch_all: z
      .boolean()
      .default(false)
      .describe("Fetch all results by auto-paginating (max 10,000 results)"),
    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe("Output format: 'markdown' or 'json'"),
  })
  .strict();

export type ListArticlesInput = z.infer<typeof ListArticlesSchema>;
