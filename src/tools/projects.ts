import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fortnoxRequest } from "../services/api.js";
import { ResponseFormat } from "../constants.js";
import {
  buildToolResponse,
  buildErrorResponse,
  formatDisplayDate,
  formatListMarkdown,
  buildPaginationMeta
} from "../services/formatters.js";
import {
  ListProjectsSchema,
  GetProjectSchema,
  CreateProjectSchema,
  UpdateProjectSchema,
  DeleteProjectSchema,
  type ListProjectsInput,
  type GetProjectInput,
  type CreateProjectInput,
  type UpdateProjectInput,
  type DeleteProjectInput
} from "../schemas/projects.js";

// API response types
interface FortnoxProject {
  ProjectNumber: string;
  Description: string;
  Status?: string;
  StartDate?: string;
  EndDate?: string;
  ProjectLeader?: string;
  ContactPerson?: string;
  Comments?: string;
  "@url"?: string;
}

interface ProjectListResponse {
  Projects: FortnoxProject[];
  MetaInformation?: {
    "@TotalResources": number;
    "@TotalPages": number;
    "@CurrentPage": number;
  };
}

interface ProjectResponse {
  Project: FortnoxProject;
}

/**
 * Register all project-related tools
 */
export function registerProjectTools(server: McpServer): void {
  // List
  server.registerTool(
    "fortnox_list_projects",
    {
      title: "List Fortnox Projects",
      description: `List projects from Fortnox.

Args:
  - limit (number): Max results per page, 1-100 (default: 20)
  - page (number): Page number for pagination (default: 1)
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of projects with project number, description, status, and dates.`,
      inputSchema: ListProjectsSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: ListProjectsInput) => {
      try {
        const queryParams: Record<string, string | number | boolean | undefined> = {
          limit: params.limit,
          page: params.page
        };

        const response = await fortnoxRequest<ProjectListResponse>(
          "/3/projects",
          "GET",
          undefined,
          queryParams
        );
        const projects = response.Projects || [];
        const total = response.MetaInformation?.["@TotalResources"] || projects.length;

        const output = {
          ...buildPaginationMeta(total, params.page, params.limit, projects.length),
          projects: projects.map((p) => ({
            project_number: p.ProjectNumber,
            description: p.Description,
            status: p.Status || null,
            start_date: p.StartDate || null,
            end_date: p.EndDate || null,
            project_leader: p.ProjectLeader || null
          }))
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          textContent = formatListMarkdown(
            "Projects",
            projects,
            total,
            params.page,
            params.limit,
            (p) =>
              `## ${p.Description} (${p.ProjectNumber})\n` +
              (p.Status ? `- **Status**: ${p.Status}\n` : "") +
              (p.StartDate ? `- **Start**: ${formatDisplayDate(p.StartDate)}\n` : "") +
              (p.EndDate ? `- **End**: ${formatDisplayDate(p.EndDate)}\n` : "") +
              (p.ProjectLeader ? `- **Leader**: ${p.ProjectLeader}` : "")
          );
        }

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Get
  server.registerTool(
    "fortnox_get_project",
    {
      title: "Get Fortnox Project",
      description: `Retrieve details about a specific project.

Args:
  - project_number (string): Project number to retrieve (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Project details including description, status, dates, and contact info.`,
      inputSchema: GetProjectSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GetProjectInput) => {
      try {
        const response = await fortnoxRequest<ProjectResponse>(
          `/3/projects/${encodeURIComponent(params.project_number)}`
        );
        const p = response.Project;

        const output = {
          project_number: p.ProjectNumber,
          description: p.Description,
          status: p.Status || null,
          start_date: p.StartDate || null,
          end_date: p.EndDate || null,
          project_leader: p.ProjectLeader || null,
          contact_person: p.ContactPerson || null,
          comments: p.Comments || null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `# Project: ${p.Description} (${p.ProjectNumber})\n\n` +
            (p.Status ? `- **Status**: ${p.Status}\n` : "") +
            (p.StartDate ? `- **Start**: ${formatDisplayDate(p.StartDate)}\n` : "") +
            (p.EndDate ? `- **End**: ${formatDisplayDate(p.EndDate)}\n` : "") +
            (p.ProjectLeader ? `- **Leader**: ${p.ProjectLeader}\n` : "") +
            (p.ContactPerson ? `- **Contact**: ${p.ContactPerson}\n` : "") +
            (p.Comments ? `- **Comments**: ${p.Comments}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Create
  server.registerTool(
    "fortnox_create_project",
    {
      title: "Create Fortnox Project",
      description: `Create a new project in Fortnox.

Args:
  - description (string): Project name/description (required, max 50 chars)
  - project_number (string): Project number (auto-generated if not provided)
  - status ('NOTSTARTED' | 'ONGOING' | 'COMPLETED'): Initial status
  - start_date (string): Start date YYYY-MM-DD
  - end_date (string): End date YYYY-MM-DD
  - project_leader (string): Project leader name
  - contact_person (string): Contact person name
  - comments (string): Internal comments
  - response_format ('markdown' | 'json'): Output format

Returns:
  The created project with its assigned project number.`,
      inputSchema: CreateProjectSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: CreateProjectInput) => {
      try {
        const projectData: Record<string, unknown> = {
          Description: params.description
        };

        if (params.project_number !== undefined) projectData.ProjectNumber = params.project_number;
        if (params.status !== undefined) projectData.Status = params.status;
        if (params.start_date !== undefined) projectData.StartDate = params.start_date;
        if (params.end_date !== undefined) projectData.EndDate = params.end_date;
        if (params.project_leader !== undefined) projectData.ProjectLeader = params.project_leader;
        if (params.contact_person !== undefined) projectData.ContactPerson = params.contact_person;
        if (params.comments !== undefined) projectData.Comments = params.comments;

        const response = await fortnoxRequest<ProjectResponse>(
          "/3/projects",
          "POST",
          { Project: projectData }
        );
        const p = response.Project;

        const output = {
          project_number: p.ProjectNumber,
          description: p.Description,
          status: p.Status || null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Project Created\n\n- **Number**: ${p.ProjectNumber}\n- **Description**: ${p.Description}\n` +
            (p.Status ? `- **Status**: ${p.Status}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Update
  server.registerTool(
    "fortnox_update_project",
    {
      title: "Update Fortnox Project",
      description: `Update an existing project in Fortnox. Only provided fields are changed.

Args:
  - project_number (string): Project number to update (required)
  - description (string): New project name
  - status ('NOTSTARTED' | 'ONGOING' | 'COMPLETED'): New status
  - start_date (string): New start date YYYY-MM-DD
  - end_date (string): New end date YYYY-MM-DD
  - project_leader (string): New project leader
  - contact_person (string): New contact person
  - comments (string): Updated comments
  - response_format ('markdown' | 'json'): Output format

Returns:
  The updated project details.`,
      inputSchema: UpdateProjectSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: UpdateProjectInput) => {
      try {
        const projectData: Record<string, unknown> = {};

        if (params.description !== undefined) projectData.Description = params.description;
        if (params.status !== undefined) projectData.Status = params.status;
        if (params.start_date !== undefined) projectData.StartDate = params.start_date;
        if (params.end_date !== undefined) projectData.EndDate = params.end_date;
        if (params.project_leader !== undefined) projectData.ProjectLeader = params.project_leader;
        if (params.contact_person !== undefined) projectData.ContactPerson = params.contact_person;
        if (params.comments !== undefined) projectData.Comments = params.comments;

        const response = await fortnoxRequest<ProjectResponse>(
          `/3/projects/${encodeURIComponent(params.project_number)}`,
          "PUT",
          { Project: projectData }
        );
        const p = response.Project;

        const output = {
          project_number: p.ProjectNumber,
          description: p.Description,
          status: p.Status || null
        };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Project Updated\n\n- **Number**: ${p.ProjectNumber}\n- **Description**: ${p.Description}\n` +
            (p.Status ? `- **Status**: ${p.Status}\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );

  // Delete
  server.registerTool(
    "fortnox_delete_project",
    {
      title: "Delete Fortnox Project",
      description: `Permanently delete a project from Fortnox.

WARNING: This action is irreversible.

Args:
  - project_number (string): Project number to delete (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Confirmation of deletion.`,
      inputSchema: DeleteProjectSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: DeleteProjectInput) => {
      try {
        await fortnoxRequest<void>(
          `/3/projects/${encodeURIComponent(params.project_number)}`,
          "DELETE"
        );

        const output = { deleted: true, project_number: params.project_number };

        const textContent = params.response_format === ResponseFormat.JSON
          ? JSON.stringify(output, null, 2)
          : `## Project Deleted\n\nProject **${params.project_number}** has been permanently deleted.`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    }
  );
}
