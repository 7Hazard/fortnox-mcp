import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { runWithContext } from "../auth/context.js";
import {
  DEFAULT_ACCOUNT,
  readPersistedTokens,
} from "../auth/fileTokenStore.js";
import { buildErrorResponse } from "../services/formatters.js";
import {
  connectLocalAccount,
  listLocalAccounts,
  resolveLocalAccount,
} from "../services/localAccounts.js";

export function registerLocalCompanyTools(server: McpServer): void {
  server.registerTool(
    "fortnox_list_companies",
    {
      title: "List Connected Companies",
      description:
        "List local Fortnox company account names. Use the account name on tool calls when multiple companies are connected.",
      inputSchema: z.object({}),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async () => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({
            accounts: listLocalAccounts().map((account) => ({
              account,
              company: readPersistedTokens(account)?.company ?? null,
            })),
          }),
        },
      ],
    }),
  );

  server.registerTool(
    "fortnox_connect_company",
    {
      title: "Connect Fortnox Company",
      description:
        "Connect a company through the browser. Choose a unique account name, authorize the intended company in Fortnox, and verify the returned company details. Use reconnect only to replace an existing authorization.",
      inputSchema: z.object({
        account: z
          .union([
            z.string().regex(/^[a-z0-9][a-z0-9_-]{0,63}$/),
            z.literal(DEFAULT_ACCOUNT),
          ])
          .describe(
            "A unique lowercase name for this company, or __default__ to reconnect the original company.",
          ),
        reconnect: z
          .boolean()
          .default(false)
          .describe("Replace an existing company's authorization."),
      }),
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async ({ account, reconnect }) => {
      try {
        const company = await connectLocalAccount(account, reconnect);
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify({ account, company }),
            },
          ],
        };
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );
}

export function enableLocalCompanyRouting(server: McpServer): void {
  const registerTool = server.registerTool.bind(server);
  server.registerTool = ((name, config, handler) => {
    if (
      name === "fortnox_list_api_operations" ||
      name === "fortnox_get_api_operation_details"
    ) {
      return registerTool(name, config, handler);
    }
    const originalSchema = config.inputSchema;
    let objectSchema = originalSchema;
    while (objectSchema instanceof z.ZodEffects) {
      objectSchema = objectSchema.innerType();
    }
    if (
      !(objectSchema instanceof z.ZodObject) ||
      !(originalSchema instanceof z.ZodType)
    ) {
      throw new Error(
        `Tool '${name}' must have an object input schema for company routing.`,
      );
    }
    const inputSchema = objectSchema.extend({
      account: z
        .string()
        .optional()
        .describe(
          `Connected company account name. Required when multiple companies are connected. The original account is '${DEFAULT_ACCOUNT}'. Use fortnox_list_companies to see names.`,
        ),
    });
    return registerTool(
      name,
      { ...config, inputSchema },
      async (params, extra) => {
        const { account, ...toolParams } = params;
        try {
          const selectedAccount = resolveLocalAccount(
            account as string | undefined,
          );
          const parsed = await originalSchema.parseAsync(toolParams);
          return await runWithContext({ account: selectedAccount }, () =>
            handler(parsed, extra),
          );
        } catch (error) {
          return buildErrorResponse(error);
        }
      },
    );
  }) as McpServer["registerTool"];
}
