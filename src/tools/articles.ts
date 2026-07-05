import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fortnoxRequest } from "../services/api.js";
import { ResponseFormat } from "../constants.js";
import {
  buildToolResponse,
  buildErrorResponse,
  formatMoney,
  formatBoolean,
  formatListMarkdown,
  formatDetailMarkdown,
  buildPaginationMeta,
} from "../services/formatters.js";
import {
  ListArticlesSchema,
  GetArticleSchema,
  CreateArticleSchema,
  UpdateArticleSchema,
  DeleteArticleSchema,
  type ListArticlesInput,
  type GetArticleInput,
  type CreateArticleInput,
  type UpdateArticleInput,
  type DeleteArticleInput,
} from "../schemas/articles.js";

// API response types
interface FortnoxArticle {
  ArticleNumber: string;
  Description: string;
  Type?: string;
  SalesPrice?: number;
  PurchasePrice?: number;
  VAT?: number;
  Unit?: string;
  SalesAccount?: number;
  PurchaseAccount?: number;
  EUAccount?: number;
  ExportAccount?: number;
  Active?: boolean;
  StockGoods?: boolean;
  QuantityInStock?: number;
  Note?: string;
  "@url"?: string;
}

interface FortnoxArticleListItem {
  ArticleNumber: string;
  Description: string;
  Type?: string;
  SalesPrice?: number;
  VAT?: number;
  Unit?: string;
  Active?: boolean;
  "@url"?: string;
}

interface ArticleListResponse {
  Articles: FortnoxArticleListItem[];
  MetaInformation?: {
    "@TotalResources": number;
    "@TotalPages": number;
    "@CurrentPage": number;
  };
}

interface ArticleResponse {
  Article: FortnoxArticle;
}

/**
 * Register all article-related tools
 */
export function registerArticleTools(server: McpServer): void {
  // List articles
  server.registerTool(
    "fortnox_list_articles",
    {
      title: "List Fortnox Articles",
      description: `List articles (products/services) from Fortnox.

Retrieves a paginated list of articles with optional filtering.

Args:
  - limit (number): Max results per page, 1-100 (default: 20)
  - page (number): Page number for pagination (default: 1)
  - filter ('active' | 'inactive'): Filter by article status
  - search_description (string): Search articles by description (partial match)
  - article_number (string): Filter by specific article number
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of articles with article number, description, type, price, and VAT.

Examples:
  - List all active articles: filter="active"
  - Search by name: search_description="Konsulttjänst"
  - Get specific article: article_number="ART001"`,
      inputSchema: ListArticlesSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: ListArticlesInput) => {
      try {
        const queryParams: Record<
          string,
          string | number | boolean | undefined
        > = {
          limit: params.limit,
          page: params.page,
        };

        if (params.filter) queryParams.filter = params.filter;
        if (params.search_description)
          queryParams.description = params.search_description;
        if (params.article_number)
          queryParams.articlenumber = params.article_number;

        const response = await fortnoxRequest<ArticleListResponse>(
          "/3/articles",
          "GET",
          undefined,
          queryParams,
        );
        const articles = response.Articles || [];
        const total =
          response.MetaInformation?.["@TotalResources"] || articles.length;

        const output = {
          ...buildPaginationMeta(
            total,
            params.page,
            params.limit,
            articles.length,
          ),
          articles: articles.map((a) => ({
            article_number: a.ArticleNumber,
            description: a.Description,
            type: a.Type || null,
            sales_price: a.SalesPrice ?? null,
            vat: a.VAT ?? null,
            unit: a.Unit || null,
            active: a.Active ?? null,
          })),
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          textContent = formatListMarkdown(
            "Articles",
            articles,
            total,
            params.page,
            params.limit,
            (a) =>
              `## ${a.Description} (${a.ArticleNumber})\n` +
              (a.Type ? `- **Type**: ${a.Type}\n` : "") +
              (a.SalesPrice !== undefined
                ? `- **Price**: ${formatMoney(a.SalesPrice)}\n`
                : "") +
              (a.VAT !== undefined ? `- **VAT**: ${a.VAT}%\n` : "") +
              (a.Unit ? `- **Unit**: ${a.Unit}\n` : "") +
              `- **Active**: ${formatBoolean(a.Active)}`,
          );
        }

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Get single article
  server.registerTool(
    "fortnox_get_article",
    {
      title: "Get Fortnox Article",
      description: `Retrieve detailed information about a specific article.

Args:
  - article_number (string): The article number to retrieve (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Complete article details including pricing, accounts, stock info, and VAT settings.`,
      inputSchema: GetArticleSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: GetArticleInput) => {
      try {
        const response = await fortnoxRequest<ArticleResponse>(
          `/3/articles/${encodeURIComponent(params.article_number)}`,
        );
        const a = response.Article;

        const output = {
          article_number: a.ArticleNumber,
          description: a.Description,
          type: a.Type || null,
          sales_price: a.SalesPrice ?? null,
          purchase_price: a.PurchasePrice ?? null,
          vat: a.VAT ?? null,
          unit: a.Unit || null,
          sales_account: a.SalesAccount || null,
          purchase_account: a.PurchaseAccount || null,
          eu_account: a.EUAccount || null,
          export_account: a.ExportAccount || null,
          active: a.Active ?? null,
          stock_goods: a.StockGoods ?? null,
          quantity_in_stock: a.QuantityInStock ?? null,
          note: a.Note || null,
        };

        let textContent: string;
        if (params.response_format === ResponseFormat.JSON) {
          textContent = JSON.stringify(output, null, 2);
        } else {
          textContent = formatDetailMarkdown("Article", [
            { label: "Article Number", value: a.ArticleNumber },
            { label: "Description", value: a.Description },
            { label: "Type", value: a.Type },
            { label: "Sales Price", value: formatMoney(a.SalesPrice) },
            { label: "Purchase Price", value: formatMoney(a.PurchasePrice) },
            {
              label: "VAT",
              value: a.VAT !== undefined ? `${a.VAT}%` : undefined,
            },
            { label: "Unit", value: a.Unit },
            { label: "Sales Account", value: a.SalesAccount },
            { label: "Purchase Account", value: a.PurchaseAccount },
            { label: "EU Account", value: a.EUAccount },
            { label: "Export Account", value: a.ExportAccount },
            { label: "Active", value: a.Active },
            { label: "Stock Goods", value: a.StockGoods },
            { label: "Qty in Stock", value: a.QuantityInStock },
          ]);
        }

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Create article
  server.registerTool(
    "fortnox_create_article",
    {
      title: "Create Fortnox Article",
      description: `Create a new article (product or service) in Fortnox.

Args:
  - description (string): Article description/name (required)
  - article_number (string): Article number (auto-generated if not provided)
  - type ('STOCK' | 'SERVICE'): Article type (default: SERVICE)
  - sales_price (number): Sales price excluding VAT
  - purchase_price (number): Purchase price
  - vat (number): VAT rate as percentage (e.g., 25)
  - unit (string): Unit of measurement (e.g., 'h', 'pcs', 'kg')
  - sales_account (number): Sales account number
  - purchase_account (number): Purchase account number
  - eu_account (number): EU sales account number
  - export_account (number): Export sales account number
  - stock_goods (boolean): Whether to track stock
  - note (string): Internal notes
  - response_format ('markdown' | 'json'): Output format

Returns:
  The created article with its assigned article number.`,
      inputSchema: CreateArticleSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: CreateArticleInput) => {
      try {
        const articleData: Record<string, unknown> = {
          Description: params.description,
        };

        if (params.article_number !== undefined)
          articleData.ArticleNumber = params.article_number;
        if (params.type !== undefined) articleData.Type = params.type;
        if (params.sales_price !== undefined)
          articleData.SalesPrice = params.sales_price;
        if (params.purchase_price !== undefined)
          articleData.PurchasePrice = params.purchase_price;
        if (params.vat !== undefined) articleData.VAT = params.vat;
        if (params.unit !== undefined) articleData.Unit = params.unit;
        if (params.sales_account !== undefined)
          articleData.SalesAccount = params.sales_account;
        if (params.purchase_account !== undefined)
          articleData.PurchaseAccount = params.purchase_account;
        if (params.eu_account !== undefined)
          articleData.EUAccount = params.eu_account;
        if (params.export_account !== undefined)
          articleData.ExportAccount = params.export_account;
        if (params.stock_goods !== undefined)
          articleData.StockGoods = params.stock_goods;
        if (params.note !== undefined) articleData.Note = params.note;

        const response = await fortnoxRequest<ArticleResponse>(
          "/3/articles",
          "POST",
          { Article: articleData },
        );
        const a = response.Article;

        const output = {
          article_number: a.ArticleNumber,
          description: a.Description,
          type: a.Type || null,
          sales_price: a.SalesPrice ?? null,
          vat: a.VAT ?? null,
          unit: a.Unit || null,
          active: a.Active ?? null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Article Created\n\n- **Article Number**: ${a.ArticleNumber}\n- **Description**: ${a.Description}\n` +
              (a.Type ? `- **Type**: ${a.Type}\n` : "") +
              (a.SalesPrice !== undefined
                ? `- **Sales Price**: ${formatMoney(a.SalesPrice)}\n`
                : "") +
              (a.VAT !== undefined ? `- **VAT**: ${a.VAT}%\n` : "");

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Update article
  server.registerTool(
    "fortnox_update_article",
    {
      title: "Update Fortnox Article",
      description: `Update an existing article in Fortnox. Only provided fields are changed.

Args:
  - article_number (string): Article number to update (required)
  - description (string): New description
  - sales_price (number): New sales price excluding VAT
  - purchase_price (number): New purchase price
  - vat (number): New VAT rate as percentage
  - unit (string): New unit of measurement
  - sales_account (number): New sales account number
  - active (boolean): Set active/inactive status
  - note (string): Internal notes
  - response_format ('markdown' | 'json'): Output format

Returns:
  The updated article details.`,
      inputSchema: UpdateArticleSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    async (params: UpdateArticleInput) => {
      try {
        const articleData: Record<string, unknown> = {};

        if (params.description !== undefined)
          articleData.Description = params.description;
        if (params.sales_price !== undefined)
          articleData.SalesPrice = params.sales_price;
        if (params.purchase_price !== undefined)
          articleData.PurchasePrice = params.purchase_price;
        if (params.vat !== undefined) articleData.VAT = params.vat;
        if (params.unit !== undefined) articleData.Unit = params.unit;
        if (params.sales_account !== undefined)
          articleData.SalesAccount = params.sales_account;
        if (params.active !== undefined) articleData.Active = params.active;
        if (params.note !== undefined) articleData.Note = params.note;

        const response = await fortnoxRequest<ArticleResponse>(
          `/3/articles/${encodeURIComponent(params.article_number)}`,
          "PUT",
          { Article: articleData },
        );
        const a = response.Article;

        const output = {
          article_number: a.ArticleNumber,
          description: a.Description,
          type: a.Type || null,
          sales_price: a.SalesPrice ?? null,
          vat: a.VAT ?? null,
          unit: a.Unit || null,
          active: a.Active ?? null,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Article Updated\n\n- **Article Number**: ${a.ArticleNumber}\n- **Description**: ${a.Description}\n` +
              (a.SalesPrice !== undefined
                ? `- **Sales Price**: ${formatMoney(a.SalesPrice)}\n`
                : "") +
              `- **Active**: ${formatBoolean(a.Active)}`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );

  // Delete article
  server.registerTool(
    "fortnox_delete_article",
    {
      title: "Delete Fortnox Article",
      description: `Permanently delete an article from Fortnox.

WARNING: This action is irreversible. The article will be permanently removed.

Args:
  - article_number (string): Article number to delete (required)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Confirmation of deletion.`,
      inputSchema: DeleteArticleSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (params: DeleteArticleInput) => {
      try {
        await fortnoxRequest<void>(
          `/3/articles/${encodeURIComponent(params.article_number)}`,
          "DELETE",
        );

        const output = {
          deleted: true,
          article_number: params.article_number,
        };

        const textContent =
          params.response_format === ResponseFormat.JSON
            ? JSON.stringify(output, null, 2)
            : `## Article Deleted\n\nArticle **${params.article_number}** has been permanently deleted.`;

        return buildToolResponse(textContent, output);
      } catch (error) {
        return buildErrorResponse(error);
      }
    },
  );
}
