// Generated from fortnox_docs/fortnox_api.json. Run npm run generate:api-catalog to refresh.
export const FORTNOX_API_OPERATIONS = [
  {
    "operationId": "AbsenceTransactionsController_doCreate",
    "method": "POST",
    "path": "/3/absencetransactions",
    "summary": "Create a new absence transaction",
    "description": "Create an absence transaction",
    "tags": [
      "fortnox_AbsenceTransactions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create absence transaction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_AbsenceTransactionsSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "AbsenceTransaction": {
          "reference": "fortnox_Lon_AbsenceTransactionsSinglePayloadItem",
          "type": "object",
          "required": [
            "CauseCode",
            "Date",
            "EmployeeId"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AbsenceTransactionsController_doDelete",
    "method": "DELETE",
    "path": "/3/absencetransactions/{id}",
    "summary": "Delete an absence transaction",
    "description": "Delete an absence transaction",
    "tags": [
      "fortnox_AbsenceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AbsenceTransactionsController_doIndex",
    "method": "GET",
    "path": "/3/absencetransactions",
    "summary": "Lists all absence transactions",
    "description": "Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.",
    "tags": [
      "fortnox_AbsenceTransactions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "employeeid",
        "required": false,
        "description": "filter by employee id"
      },
      {
        "name": "date",
        "required": false,
        "description": "filter by date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AbsenceTransactionsController_doListByIdDateCauseCode",
    "method": "GET",
    "path": "/3/absencetransactions/{id}/{Date}/{Code}",
    "summary": "Retrieve absence transactions",
    "description": "Retrieves a list of absence transactions for an employee on a specific date and cause code.",
    "tags": [
      "fortnox_AbsenceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the employee"
      },
      {
        "name": "Date",
        "required": true,
        "description": "of the absence transaction"
      },
      {
        "name": "Code",
        "required": true,
        "description": "status code of the absence transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AbsenceTransactionsController_doShow",
    "method": "GET",
    "path": "/3/absencetransactions/{id}",
    "summary": "Retrieve a specific absence transaction",
    "description": "Retrieves a specific transaction",
    "tags": [
      "fortnox_AbsenceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AbsenceTransactionsController_doUpdate",
    "method": "PUT",
    "path": "/3/absencetransactions/{id}",
    "summary": "Update a single absence transaction",
    "description": "Update an absence transaction",
    "tags": [
      "fortnox_AbsenceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update absence transaction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_AbsenceTransactionsSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "AbsenceTransaction": {
          "reference": "fortnox_Lon_AbsenceTransactionsSinglePayloadItem",
          "type": "object",
          "required": [
            "CauseCode",
            "Date",
            "EmployeeId"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AccountChartController_doIndex",
    "method": "GET",
    "path": "/3/accountcharts",
    "summary": "List all account charts",
    "description": "Retrieves a list of all the available account charts.",
    "tags": [
      "fortnox_AccountCharts"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AccountController_doCreate",
    "method": "POST",
    "path": "/3/accounts",
    "summary": "Create an account",
    "description": "The created account will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Accounts"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "financialyear",
        "required": false,
        "description": "financial year to create account against"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create account",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Bf_AccountSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Account": {
          "reference": "fortnox_Bf_AccountSinglePayloadItem",
          "type": "object",
          "required": [
            "Description",
            "Number"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AccountController_doDelete",
    "method": "DELETE",
    "path": "/3/accounts/{Number}",
    "summary": "Deletes an account",
    "description": "Deletes the specified account in the users current year",
    "tags": [
      "fortnox_Accounts"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "account to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AccountController_doIndex",
    "method": "GET",
    "path": "/3/accounts",
    "summary": "List all accounts",
    "description": "The accounts are returned sorted by account number with the lowest number appearing first.",
    "tags": [
      "fortnox_Accounts"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list on"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "Lastmodified of accounts to list"
      },
      {
        "name": "sru",
        "required": false,
        "description": "Sru of accounts to list"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AccountController_doShow",
    "method": "GET",
    "path": "/3/accounts/{Number}",
    "summary": "Retrieve an account",
    "description": "Retrieves the details of an account. You need to supply the unique account number that was returned when the account was created or retrieved from the list of accounts.",
    "tags": [
      "fortnox_Accounts"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the account"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AccountController_doUpdate",
    "method": "PUT",
    "path": "/3/accounts/{Number}",
    "summary": "Update an account",
    "description": "Updates the specified account with the values provided in the properties. Any property not provided will be left unchanged.\n Note that even though the account number is writeable you can&acute;t change the number of an existing account.",
    "tags": [
      "fortnox_Accounts"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the account"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "financialyear",
        "required": false,
        "description": "financial year to update account against"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update account",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Bf_AccountSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Account": {
          "reference": "fortnox_Bf_AccountSinglePayloadItem",
          "type": "object",
          "required": [
            "Description",
            "Number"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "addStockTakingRows",
    "method": "POST",
    "path": "/api/warehouse/stocktaking-v1/{id}/rows",
    "summary": "Add rows",
    "description": "<p>\n Add rows to a stock taking.\n If you add an already existing row noting happens.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "A list of <code>StockTakingRows</code>.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "array",
      "items": {
        "reference": "warehouse_StockTakingRow",
        "type": "object",
        "properties": {
          "countedBy": {
            "type": "string"
          },
          "currentRowNo": {
            "type": "integer",
            "format": "int32"
          },
          "hasPostReleaseStockChanges": {
            "type": "boolean"
          },
          "id": {
            "type": "string"
          },
          "itemId": {
            "type": "string"
          },
          "stockLocationId": {
            "type": "string",
            "format": "uuid"
          },
          "stockPointId": {
            "type": "string",
            "format": "uuid"
          },
          "stockTakenQuantity": {
            "type": "number"
          },
          "stockTakingId": {
            "type": "integer",
            "format": "int64"
          },
          "stockTakingRowId": {
            "type": "string"
          },
          "totalQuantityInStock": {
            "type": "number"
          }
        }
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "addStockTakingRowsByFilter",
    "method": "POST",
    "path": "/api/warehouse/stocktaking-v1/{id}/addrows",
    "summary": "Add rows by filter",
    "description": "<p>\n Add all matching candidate rows to a stock taking, as specified by filters.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "itemIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "supplierNumbers",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockPointIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockLocationIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "transactionDate",
        "required": false,
        "description": ""
      },
      {
        "name": "itemIdSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "itemDescriptionSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "excludeZeroBalanceItems",
        "required": false,
        "description": ""
      },
      {
        "name": "excludeNonInboundItems",
        "required": false,
        "description": ""
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "appendStockLocations",
    "method": "POST",
    "path": "/api/warehouse/stockpoints-v1/{id}",
    "summary": "Append stock locations",
    "description": "<p>\n Add new stock locations to specific <code>StockPoint</code>.\n <p>\n If you include an already existing stock location code, it will be ignored.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "stock point id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "A list of <code>StockLocations</code> to append.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "array",
      "items": {
        "reference": "warehouse_StockLocation",
        "type": "object",
        "required": [
          "code"
        ],
        "properties": {
          "code": {
            "type": "string"
          },
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "name": {
            "type": "string"
          },
          "stockPointId": {
            "type": "string",
            "format": "uuid"
          }
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArchiveController_doCreate",
    "method": "POST",
    "path": "/3/archive",
    "summary": "Upload a file to a specific subdirectory",
    "description": "If not path or folderId is provided, the file will be uploaded to the root directory.",
    "tags": [
      "fortnox_Archive"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "folderid",
        "required": false,
        "description": "id of folder"
      },
      {
        "name": "path",
        "required": false,
        "description": "name of folder"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create folder",
    "requestContentTypes": [
      "multipart/form-data"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "object",
      "properties": {
        "file": {
          "type": "object",
          "description": "file to uplad"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArchiveController_doDelete",
    "method": "DELETE",
    "path": "/3/archive/{id}",
    "summary": "Delete a single file",
    "description": "Delete a folder",
    "tags": [
      "fortnox_Archive"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies file/folder to remove"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "path",
        "required": false,
        "description": "Path of file/folder to remove"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArchiveController_doDeleteRoot",
    "method": "DELETE",
    "path": "/3/archive",
    "summary": "Remove files",
    "description": "Please note that removing a folder will also resulting in removal of all the contents within!",
    "tags": [
      "fortnox_Archive"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "path",
        "required": false,
        "description": "identifies file/folder to remove"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArchiveController_doIndex",
    "method": "GET",
    "path": "/3/archive",
    "summary": "Retrieve folder or file",
    "description": "If no path is provided the root will be returned.\n Providing fileId will return given file from fileattachments.",
    "tags": [
      "fortnox_Archive"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "path",
        "required": false,
        "description": "name of folder"
      },
      {
        "name": "fileid",
        "required": false,
        "description": "fileId from fileattachments"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArchiveController_doShow",
    "method": "GET",
    "path": "/3/archive/{id}",
    "summary": "Retrieve a single file",
    "description": "Providing fileId will return given file from fileattachments.",
    "tags": [
      "fortnox_Archive"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the file"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "path",
        "required": false,
        "description": "Path of folder to show"
      },
      {
        "name": "fileid",
        "required": false,
        "description": "fileId from fileattachments"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "*/*",
      "application/json"
    ]
  },
  {
    "operationId": "ArticleController_doCreate",
    "method": "POST",
    "path": "/3/articles",
    "summary": "Create an article",
    "description": "The created article will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Articles"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create article",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ArticleSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Article": {
          "reference": "fortnox_ArticleSinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleController_doDelete",
    "method": "DELETE",
    "path": "/3/articles/{ArticleNumber}",
    "summary": "Delete an article",
    "description": "<p>Deletes the article permanently.</p>\n <p>You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.</p>",
    "tags": [
      "fortnox_Articles"
    ],
    "pathParameters": [
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "identifies the article"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleController_doIndex",
    "method": "GET",
    "path": "/3/articles",
    "summary": "Retrieve a list of articles",
    "description": "Retrieves a list of articles. The articles are returned sorted by article number with the lowest number appearing first.",
    "tags": [
      "fortnox_Articles"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter supplier invoices"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list"
      },
      {
        "name": "articlenumber",
        "required": false,
        "description": "filter by article number"
      },
      {
        "name": "description",
        "required": false,
        "description": "filter by description"
      },
      {
        "name": "ean",
        "required": false,
        "description": "filter by ean"
      },
      {
        "name": "suppliernumber",
        "required": false,
        "description": "filter by supplier number"
      },
      {
        "name": "manufacturer",
        "required": false,
        "description": "filter by manufacturer"
      },
      {
        "name": "manufacturerarticlenumber",
        "required": false,
        "description": "filter by manufacturerarticlenumber"
      },
      {
        "name": "webshop",
        "required": false,
        "description": "filter by web shop"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by lastmodified"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleController_doShow",
    "method": "GET",
    "path": "/3/articles/{ArticleNumber}",
    "summary": "Retrieve an article",
    "description": "Retrieves the details of an article. You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.",
    "tags": [
      "fortnox_Articles"
    ],
    "pathParameters": [
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "identifies the article"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleController_doUpdate",
    "method": "PUT",
    "path": "/3/articles/{ArticleNumber}",
    "summary": "Update an article",
    "description": "Updates the specified article with the values provided in the properties. Any property not provided will be left unchanged.\n You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.\n Note that even though the article number is writeable you can not change the number of an existing article.",
    "tags": [
      "fortnox_Articles"
    ],
    "pathParameters": [
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "identifies the article"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update article",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ArticleSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Article": {
          "reference": "fortnox_ArticleSinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleControllerV2_doCalculateBundlePrices",
    "method": "POST",
    "path": "/3/articles-v2/calculatebundleprices",
    "summary": "Calculate the prices of all included articles in a bundle",
    "description": "This is a helper method to calculate the prices for all sub items in a bundle. Several bundles can be included in the\n same request, as separate rows, and be calculated at the same time.\n\n Some properties are required for the price calculation to work:\n  * The bundle row (the top row) must have a Price. This is the price of the bundle, which the prices of the sub items\n  will be calculated from. The goal of the calculation is to make the sum of the prices of the sub items equal to this price.\n  * Each sub item row must have an AmountInBundle and a SalesPriceInBundle. These values are necessary in order to determine\n  how large part of the bundle's value the sub item represents, and what the price of the sub item must be.\n  * If a sub item row has UserPrice set to true, the Price property must also be set. The Price property of the sub items\n  is normally not used as input, but if the UserPrice flag is set, the provided Price will be used as the price of the sub item\n  and not calculated. This works in the same way as if a sub item had a fixed price in the bundle.\n\n This method can also (optionally) calculate the price of the price adjustment row of a bundle. To have the price adjustment\n row price calculated, an additional sub row having the PriceAdjustment property set to true must be included in the request.\n If a price adjustment row is provided, in order for its price to be calculated, the following properties must be set (in addition\n to the properties specified above):\n  * The Quantity on all rows, the bundle row and the sub rows.\n  * The Discount on the bundle row (if the bundle should be sold with a discount).\n\n <i>This method will only calculate the prices of the sub rows and return these prices in the response. No modifications\n will be made to any entities in the database.</i>\n\n <b>Example:</b>\n To add a bundle to an invoice, first get the bundle article from the article registry. Here you will find the sub items included\n in the bundle, and how many of each there are in a bundle.\n\n <code>GET /3/articles-v2/toolbox</code>\n\n Response (simplified):\n <pre><code>\n {\n     \"Article\": {\n     .\n     .\n     \"Bundle\": {\n             \"Comment\": \"\",\n             \"PriceAdjustmentRow\": {\n                 .\n                 .\n             },\n             \"SubItems\": [\n                 {\n                     \"ArticleNumber\": \"hammer\",\n                     \"Quantity\": \"2\",\n                     \"FixedPrice\": false\n                 },\n                 {\n                     \"ArticleNumber\": \"wrench\",\n                     \"Quantity\": \"3\",\n                     \"FixedPrice\": false\n                 }\n             ]\n         }\n     }\n }\n </code></pre>\n\n Then lookup the sales price for each of the included articles in the price list you intend to use on the invoice.\n <i>This should always be the base price for the article, i.e. the price where FromQuantity is 0</i>\n\n <code>GET /3/prices/sublist/A/hammer</code>\n\n Response (simplified):\n <pre><code>\n {\n     \"Prices\": [\n          {\n              \"ArticleNumber\": \"hammer\",\n              \"FromQuantity\": 0,\n              \"PriceList\": \"A\",\n              \"Price\": 200\n          }\n     ]\n }\n </code></pre>\n\n <code>GET /3/prices/sublist/A/wrench</code>\n\n Response (simplified):\n <pre><code>\n {\n     \"Prices\": [\n          {\n              \"ArticleNumber\": \"wrench\",\n              \"FromQuantity\": 0,\n              \"PriceList\": \"A\",\n              \"Price\": 300\n          }\n     ]\n }\n </code></pre>\n\n Now we have all the information we need to calculate the prices for the bundle. Let's assume that we want to sell\n this bundle for 1100 SEK, and that the customer bought 2 bundles. We also want the price adjustment to be calculated.\n We create a bundle price calculation request with the following properties:\n <pre><code>\n {\n     \"BundlePriceCalculation\": {\n         \"Rows\": [\n             {\n                 \"Price\": 1100,    // The price we want to set on the bundle\n                 \"Quantity\": 2,   // The number of bundles sold (only required since we want to calculate the price adjustment row)\n                 \"Bundle\": {\n                     \"SubRows\": [\n                         {\n                             \"Quantity\": 4, // The number of hammers on the invoice. The bundle contains 2, but we sold 2 bundles.\n                             \"BundleSubItem\": {\n                                 \"AmountInBundle\": 2, // The amount of hammers in a bundle\n                                 \"SalesPriceInBundle\": 200 // The sales price of the hammer\n                             }\n                         },\n                         {\n                             \"Quantity\": 6,\n                             \"BundleSubItem\": {\n                                 \"AmountInBundle\": 3,\n                                 \"SalesPriceInBundle\": 300\n                             }\n                         },\n                         {\n                             \"Quantity\": 1,\n                             \"BundleSubItem\": {\n                                 \"PriceAdjustment\": true\n                             }\n                         }\n                     ]\n                 }\n             }\n         ]\n     }\n }\n </code></pre>\n\n We do the calculation by calling the endpoint with the request above:\n\n <code>POST /3/articles-v2/calculatebundleprices</code>\n\n Response (simplified):\n <pre><code>\n {\n     \"BundlePriceCalculation\": {\n         \"Rows\": [\n             {\n                 \"Price\": 1100,\n                 \"Quantity\": 2,\n                 \"Bundle\": {\n                     \"SubRows\": [\n                         {\n                             \"Price\": 169.23,  // The price that the hammer should have on the invoice\n                             \"Quantity\": 4,\n                             \"BundleSubItem\": {\n                                 \"AmountInBundle\": 2,\n                                 \"SalesPriceInBundle\": 200\n                             }\n                         },\n                         {\n                             \"Price\": 253.85, // The price that the wrench should have on the invoice\n                             \"Quantity\": 6,\n                             \"BundleSubItem\": {\n                                 \"AmountInBundle\": 3,\n                                 \"SalesPriceInBundle\": 300\n                             }\n                         },\n                         {\n                             \"Price\": -0.02,  // The price to set on the price adjustment row\n                             \"Quantity\": 1,   // Quantity is always 1 on a price adjustment row\n                             \"BundleSubItem\": {\n                                 \"AmountInBundle\": 0,\n                                 \"PriceAdjustment\": true,\n                                 \"SalesPriceInBundle\": 0\n                             }\n                         }\n                     ]\n                 }\n             }\n         ]\n     }\n }\n </code></pre>\n\n And there we have it. When we create our invoice, the price of the hammer should be set to 169.23 SEK, the price of\n the wrench must be set to 253.85 SEK, and the price adjustment row must be set to -0.02 SEK.\n The closest we could get to the desired price of 1100 SEK was 1100.01 SEK (2 * 169.23 + 3 * 253.85 = 1100.01 SEK), so the price\n for one bundle needed to be adjusted by -0.01 SEK. Since we calculated the price for 2 bundles, the total adjustment was -0.02 SEK.\n\n Worth noting is that the prices for the articles in a bundle is always calculated based on exactly 1.0 bundle, the prices of\n the articles is not effected by the number of bundles sold. However, as seen in this example, the price adjustment might be.\n The same goes for discount. If a bundle is sold with a discount, the discount will not affect the calculated prices of the individual\n sub articles in the bundle, but it might affect the price on the price adjustment row.",
    "tags": [
      "fortnox_ArticlesV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update article",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ArticleV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Article": {
          "reference": "fortnox_ArticleV2SinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleControllerV2_doCreate",
    "method": "POST",
    "path": "/3/articles-v2",
    "summary": "Create an article",
    "description": "The created article will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_ArticlesV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create article",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ArticleV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Article": {
          "reference": "fortnox_ArticleV2SinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleControllerV2_doDelete",
    "method": "DELETE",
    "path": "/3/articles-v2/{ArticleNumber}",
    "summary": "Delete an article",
    "description": "<p>Deletes the article permanently.</p>\n <p>You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.</p>",
    "tags": [
      "fortnox_ArticlesV2"
    ],
    "pathParameters": [
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "identifies the article"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleControllerV2_doIndex",
    "method": "GET",
    "path": "/3/articles-v2",
    "summary": "Retrieve a list of articles",
    "description": "Retrieves a list of articles. The articles are returned sorted by article number with the lowest number appearing first.",
    "tags": [
      "fortnox_ArticlesV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter supplier invoices"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list"
      },
      {
        "name": "articlenumber",
        "required": false,
        "description": "filter by article number"
      },
      {
        "name": "description",
        "required": false,
        "description": "filter by description"
      },
      {
        "name": "ean",
        "required": false,
        "description": "filter by ean"
      },
      {
        "name": "suppliernumber",
        "required": false,
        "description": "filter by supplier number"
      },
      {
        "name": "manufacturer",
        "required": false,
        "description": "filter by manufacturer"
      },
      {
        "name": "manufacturerarticlenumber",
        "required": false,
        "description": "filter by manufacturerarticlenumber"
      },
      {
        "name": "webshop",
        "required": false,
        "description": "filter by web shop"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by lastmodified"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleControllerV2_doShow",
    "method": "GET",
    "path": "/3/articles-v2/{ArticleNumber}",
    "summary": "Retrieve an article",
    "description": "Retrieves the details of an article. You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.",
    "tags": [
      "fortnox_ArticlesV2"
    ],
    "pathParameters": [
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "identifies the article"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleControllerV2_doUpdate",
    "method": "PUT",
    "path": "/3/articles-v2/{ArticleNumber}",
    "summary": "Update an article",
    "description": "Updates the specified article with the values provided in the properties. Any property not provided will be left unchanged.\n You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.\n Note that even though the article number is writeable you can not change the number of an existing article.",
    "tags": [
      "fortnox_ArticlesV2"
    ],
    "pathParameters": [
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "identifies the article"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update article",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ArticleV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Article": {
          "reference": "fortnox_ArticleV2SinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleFileConnectionController_doCreate",
    "method": "POST",
    "path": "/3/articlefileconnections",
    "summary": "Create an article file connection",
    "description": "Create an article file connection",
    "tags": [
      "fortnox_ArticleFileConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create article file connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Da_ArticleFileConnectionSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "ArticleFileConnection"
      ],
      "properties": {
        "ArticleFileConnection": {
          "reference": "fortnox_Da_ArticleFileConnectionSinglePayloadItem",
          "type": "object",
          "required": [
            "ArticleNumber",
            "FileId"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleFileConnectionController_doDelete",
    "method": "DELETE",
    "path": "/3/articlefileconnections/{FileId}",
    "summary": "Remove an article file connection",
    "description": "Delete an article file connection",
    "tags": [
      "fortnox_ArticleFileConnections"
    ],
    "pathParameters": [
      {
        "name": "FileId",
        "required": true,
        "description": "identifies the article file connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleFileConnectionController_doIndex",
    "method": "GET",
    "path": "/3/articlefileconnections",
    "summary": "Retrieve a list of article file connections",
    "description": "The article file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.",
    "tags": [
      "fortnox_ArticleFileConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "articlenumber",
        "required": false,
        "description": "Articlenumber of file connections to list"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ArticleFileConnectionController_doShow",
    "method": "GET",
    "path": "/3/articlefileconnections/{FileId}",
    "summary": "Retrieve a single article file connection",
    "description": "Retrieve an article file connection",
    "tags": [
      "fortnox_ArticleFileConnections"
    ],
    "pathParameters": [
      {
        "name": "FileId",
        "required": true,
        "description": "identifies the article file connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetFileConnectionController_doCreate",
    "method": "POST",
    "path": "/3/assetfileconnections",
    "summary": "Create an asset file connection",
    "description": "Create an asset file connection",
    "tags": [
      "fortnox_AssetFileConnection"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create asset file connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Da_AssetFileConnectionCreatePayload",
      "type": "object",
      "properties": {
        "AssetId": {
          "type": "string"
        },
        "FileId": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetFileConnectionController_doDelete",
    "method": "DELETE",
    "path": "/3/assetfileconnections/{FileId}",
    "summary": "Remove an asset file connection",
    "description": "Delete an asset file connection",
    "tags": [
      "fortnox_AssetFileConnection"
    ],
    "pathParameters": [
      {
        "name": "FileId",
        "required": true,
        "description": "File id of asset file connection to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetFileConnectionController_doIndex",
    "method": "GET",
    "path": "/3/assetfileconnections",
    "summary": "Retrieve a list of asset file connections",
    "description": "The asset register can return a list of assets or a single asset. By specifying a FileId in the URL, a single asset will be returned. Not specifying a FileId will return a list of records.",
    "tags": [
      "fortnox_AssetFileConnection"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "assetid",
        "required": false,
        "description": "Assetid of asset file connections to list"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doChangeob",
    "method": "PUT",
    "path": "/3/assets/changeob/{Id}",
    "summary": "Change manual OB value of an Asset",
    "description": "The updated asset will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset ID"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_AssetActionsSingleItem",
      "type": "object",
      "properties": {
        "Amount": {
          "type": "integer",
          "format": "int32"
        },
        "AssetIds": {
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int32"
          }
        },
        "Comment": {
          "type": "string"
        },
        "Date": {
          "type": "string",
          "format": "date"
        },
        "DepreciateUntil": {
          "type": "string",
          "format": "date"
        },
        "FinancialYearId": {
          "type": "integer",
          "format": "int32"
        },
        "Percentage": {
          "type": "integer",
          "format": "int32"
        },
        "Price": {
          "type": "integer",
          "format": "int32"
        },
        "TransactionDate": {
          "type": "string",
          "format": "date"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doCreate",
    "method": "POST",
    "path": "/3/assets",
    "summary": "Create an Asset",
    "description": "The created asset will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_AssetsSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Anl_AssetsSinglePayloadItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doDelete",
    "method": "DELETE",
    "path": "/3/assets/{Id}",
    "summary": "Delete or Void an Asset",
    "description": "By specifying an {Id} in the URL a single &quot;Not active&quot; asset or asset with a type &quot;Not depreciable&quot; can be deleted. By specifying an {Id} in the URL a single &quot;Active&quot; or &quot;Fully depreciated&quot; assets can be voided and in this case in request body voiddate should be provided, otherwise it will use todays date.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Delete_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Delete",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doDepreciate",
    "method": "POST",
    "path": "/3/assets/depreciate",
    "summary": "Perform a Depreciation of an Asset",
    "description": "The created vouchers list will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_Depreciation_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Anl_AssetActionsSingleItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doDepreciations",
    "method": "GET",
    "path": "/3/assets/depreciations/{ToDate}",
    "summary": "Assets depreciation list",
    "description": "Retrieves a list of assets to depreciate.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "ToDate",
        "required": true,
        "description": "toDate"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doIndex",
    "method": "GET",
    "path": "/3/assets",
    "summary": "Retrieve a list of assets",
    "description": "Get assets",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "number",
        "required": false,
        "description": "Asset number"
      },
      {
        "name": "description",
        "required": false,
        "description": "Asset description"
      },
      {
        "name": "type",
        "required": false,
        "description": "Asset type"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "Filter on last modified date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doScrap",
    "method": "PUT",
    "path": "/3/assets/scrap/{Id}",
    "summary": "Scrap an Asset",
    "description": "The updated asset will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset ID"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_ScrapAsset_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Anl_AssetActionsSingleItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doSell",
    "method": "PUT",
    "path": "/3/assets/sell/{Id}",
    "summary": "Sell an Asset",
    "description": "Partial sell or full sell of an asset.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset ID"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_SellAsset_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Anl_AssetActionsSingleItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doShow",
    "method": "GET",
    "path": "/3/assets/{Id}",
    "summary": "Retrieve a single asset",
    "description": "Retrieve an asset",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doTypesDeleteWithId",
    "method": "DELETE",
    "path": "/3/assets/types/{id}",
    "summary": "Delete an asset type",
    "description": "Delete an asset",
    "tags": [
      "fortnox_AssetTypes"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doTypesGet",
    "method": "GET",
    "path": "/3/assets/types",
    "summary": "Retrieve a list of asset types",
    "description": "Get assets",
    "tags": [
      "fortnox_AssetTypes"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doTypesGetWithId",
    "method": "GET",
    "path": "/3/assets/types/{id}",
    "summary": "Retrieve an asset type",
    "description": "Retrieve an asset",
    "tags": [
      "fortnox_AssetTypes"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doTypesPost",
    "method": "POST",
    "path": "/3/assets/types",
    "summary": "Create an asset type",
    "description": "Update an asset",
    "tags": [
      "fortnox_AssetTypes"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_CreateAssetType_Wrap",
      "type": "object",
      "properties": {
        "AssetType": {
          "reference": "fortnox_Anl_CreateAssetType",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doTypesPutWithId",
    "method": "PUT",
    "path": "/3/assets/types/{id}",
    "summary": "Update an asset type",
    "description": "Update an asset",
    "tags": [
      "fortnox_AssetTypes"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_UpdateAssetType_Wrap",
      "type": "object",
      "properties": {
        "AssetType": {
          "reference": "fortnox_Anl_UpdateAssetType",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doUpdate",
    "method": "PUT",
    "path": "/3/assets/{Id}",
    "summary": "Update an Asset",
    "description": "The updated asset will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset ID"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_AssetsSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Anl_AssetsSinglePayloadItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doWritedown",
    "method": "PUT",
    "path": "/3/assets/writedown/{Id}",
    "summary": "Write down an Asset",
    "description": "The updated asset will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset ID"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_AdjustAssetValue_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Anl_AssetActionsSingleItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AssetsController_doWriteup",
    "method": "PUT",
    "path": "/3/assets/writeup/{Id}",
    "summary": "Write up an Asset",
    "description": "The updated asset will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Assets"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "Asset ID"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update asset",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Anl_AdjustAssetValue_Wrap",
      "type": "object",
      "properties": {
        "Asset": {
          "reference": "fortnox_Anl_AssetActionsSingleItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "attach",
    "method": "POST",
    "path": "/api/fileattachments/attachments-v1",
    "summary": "Attach files to one or more entities",
    "description": "",
    "tags": [
      "fileattachments_Attachment"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "A list of attachments",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "array",
      "items": {
        "reference": "fileattachments_Attachment",
        "type": "object",
        "properties": {
          "entityId": {
            "type": "integer",
            "format": "int64"
          },
          "entityType": {
            "type": "string",
            "enum": [
              "OF",
              "O",
              "F",
              "C",
              "LGR_IO",
              "LGR_IG"
            ]
          },
          "fileId": {
            "type": "string"
          },
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "includeOnSend": {
            "type": "boolean"
          }
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AttendanceTransactionsController_doCreate",
    "method": "POST",
    "path": "/3/attendancetransactions",
    "summary": "Create a new attendance transaction",
    "description": "Create an attendance transaction",
    "tags": [
      "fortnox_AttendanceTransactions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create attendance transaction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_AttendanceTransactionsSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "AttendanceTransaction": {
          "reference": "fortnox_Lon_AttendanceTransactionsSinglePayloadItem",
          "type": "object",
          "required": [
            "CauseCode",
            "Date",
            "EmployeeId"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AttendanceTransactionsController_doDelete",
    "method": "DELETE",
    "path": "/3/attendancetransactions/{id}",
    "summary": "Delete an attendance transaction",
    "description": "Delete an attendance transaction",
    "tags": [
      "fortnox_AttendanceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AttendanceTransactionsController_doIndex",
    "method": "GET",
    "path": "/3/attendancetransactions",
    "summary": "Lists all attendance transactions",
    "description": "Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.",
    "tags": [
      "fortnox_AttendanceTransactions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "employeeid",
        "required": false,
        "description": "filter by employee id"
      },
      {
        "name": "date",
        "required": false,
        "description": "filter by date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AttendanceTransactionsController_doListByIdDateCauseCode",
    "method": "GET",
    "path": "/3/attendancetransactions/{id}/{Date}/{Code}",
    "summary": "Retrieve attendance transactions",
    "description": "Retrieves a list of attendance transaction for an employee on a specific date and cause code.",
    "tags": [
      "fortnox_AttendanceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the employee"
      },
      {
        "name": "Date",
        "required": true,
        "description": "date of the attendance"
      },
      {
        "name": "Code",
        "required": true,
        "description": "status code of the attendance transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AttendanceTransactionsController_doShow",
    "method": "GET",
    "path": "/3/attendancetransactions/{id}",
    "summary": "Retrieve a specific attendance transaction",
    "description": "Retrieves a specific transaction",
    "tags": [
      "fortnox_AttendanceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "AttendanceTransactionsController_doUpdate",
    "method": "PUT",
    "path": "/3/attendancetransactions/{id}",
    "summary": "Update a single attendance transaction",
    "description": "Update an attendance transaction",
    "tags": [
      "fortnox_AttendanceTransactions"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update attendance transaction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_AttendanceTransactionsSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "AttendanceTransaction": {
          "reference": "fortnox_Lon_AttendanceTransactionsSinglePayloadItem",
          "type": "object",
          "required": [
            "CauseCode",
            "Date",
            "EmployeeId"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "batchUpdateResponseState",
    "method": "PUT",
    "path": "/api/warehouse/purchaseorders-v1/response",
    "summary": "Update response states",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "ids",
        "required": false,
        "description": "List of purchase order ids.",
        "style": "form",
        "explode": true
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "The new response state.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ResponseStateChange",
      "type": "object",
      "properties": {
        "responseState": {
          "type": "string",
          "enum": [
            "NOT_SENT",
            "SENT",
            "ACCEPTED_WITH_REQ_DLV_DATE",
            "ACCEPTED_WITH_CHANGED_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE",
            "REJECTED"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CompanyInformationController_doIndex",
    "method": "GET",
    "path": "/3/companyinformation",
    "summary": "Retrieve the Company Information",
    "description": "Retrieve a company information",
    "tags": [
      "fortnox_CompanyInformation"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CompanySettingsController_doIndex",
    "method": "GET",
    "path": "/3/settings/company",
    "summary": "Retrieve the company settings",
    "description": "Retrieve a setting",
    "tags": [
      "fortnox_CompanySettings"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "completed",
    "method": "PUT",
    "path": "/api/warehouse/incominggoods-v1/{id}/completed",
    "summary": "Complete Incoming Goods document",
    "description": "Mark a released Incoming Goods document as Completed.\n Bookkeeping will be finalized.\n A Completed Incoming Goods document cannot be matched against\n any more Supplier Invoices.",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Incoming goods document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Date for bookkeeping in format `\"YYYY-MM-DD\"`. Must be between document's release date (inclusive) and today's date (inclusive).",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "string"
    },
    "responseContentTypes": []
  },
  {
    "operationId": "ContractAccrualController_doCreate",
    "method": "POST",
    "path": "/3/contractaccruals",
    "summary": "Create a contract accrual",
    "description": "Create a contract accrual",
    "tags": [
      "fortnox_ContractAccruals"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create contract accrual",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractAccrualSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "ContractAccrual": {
          "reference": "fortnox_ContractInvoice_ContractAccrualSinglePayloadItem",
          "type": "object",
          "required": [
            "AccrualAccount",
            "AccrualRows",
            "CostAccount",
            "Description",
            "DocumentNumber",
            "Total"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractAccrualController_doDelete",
    "method": "DELETE",
    "path": "/3/contractaccruals/{DocumentNumber}",
    "summary": "Remove a contract accrual",
    "description": "Delete a contract accrual",
    "tags": [
      "fortnox_ContractAccruals"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "Document number of contract accrual to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractAccrualController_doIndex",
    "method": "GET",
    "path": "/3/contractaccruals",
    "summary": "Retrieve a list of contract accruals",
    "description": "The contract accruals register can return a list of records or a single record. By specifying a DocumentNumber in the URL, a single record will be returned. Not specifying a DocumentNumber will return a list of records.",
    "tags": [
      "fortnox_ContractAccruals"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractAccrualController_doShow",
    "method": "GET",
    "path": "/3/contractaccruals/{DocumentNumber}",
    "summary": "Retrieve a single contract accrual",
    "description": "Retrieve a contract accrual",
    "tags": [
      "fortnox_ContractAccruals"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "Document number of contract accrual to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractAccrualController_doUpdate",
    "method": "PUT",
    "path": "/3/contractaccruals/{DocumentNumber}",
    "summary": "Update a contract accrual",
    "description": "Update a contract accrual",
    "tags": [
      "fortnox_ContractAccruals"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "Document number of contract accrual to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update contract accrual",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractAccrualSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "ContractAccrual": {
          "reference": "fortnox_ContractInvoice_ContractAccrualSinglePayloadItem",
          "type": "object",
          "required": [
            "AccrualAccount",
            "AccrualRows",
            "CostAccount",
            "Description",
            "DocumentNumber",
            "Total"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractController_doCreate",
    "method": "POST",
    "path": "/3/contracts",
    "summary": "Create a contract",
    "description": "Create a contract",
    "tags": [
      "fortnox_Contracts"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create contract",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractCreatePayload_Wrap",
      "type": "object",
      "properties": {
        "Contract": {
          "reference": "fortnox_ContractInvoice_ContractCreatePayload",
          "type": "object",
          "required": [
            "CustomerNumber",
            "InvoiceRows",
            "PeriodEnd"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractController_doIndex",
    "method": "GET",
    "path": "/3/contracts",
    "summary": "Retrieve a list of contracts",
    "description": "Get contracts",
    "tags": [
      "fortnox_Contracts"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "periodstart",
        "required": false,
        "description": "Filter contracts by start of contract period"
      },
      {
        "name": "periodend",
        "required": false,
        "description": "Filter contracts by end of contract period"
      },
      {
        "name": "filter",
        "required": false,
        "description": "Filter contracts by status"
      },
      {
        "name": "documentnumber",
        "required": false,
        "description": "Filter contracts by document number"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "Filter contracts by customer number"
      },
      {
        "name": "templatenumber",
        "required": false,
        "description": "Filter contracts by template number"
      },
      {
        "name": "invoicesremaining",
        "required": false,
        "description": "Filter contracts by number of remaining invoices"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "Filter contracts by last modified date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractController_doShow",
    "method": "GET",
    "path": "/3/contracts/{DocumentNumber}",
    "summary": "Retrieve a single contract",
    "description": "Retrieve a contract",
    "tags": [
      "fortnox_Contracts"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the contract"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractController_doUpdate",
    "method": "PUT",
    "path": "/3/contracts/{DocumentNumber}",
    "summary": "Update a contract",
    "description": "Note that there are two approaches for updating the rows on a contract.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the contract needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the contract then specify only RowId like { \"RowId\": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time a contract is updated.\n\n When the InvoiceDiscount value is set on the rows and the Contract, the value set on the Contract takes precedence over the row-level InvoiceDiscount.",
    "tags": [
      "fortnox_Contracts"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the contract"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update contract",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractUpdatePayload_Wrap",
      "type": "object",
      "properties": {
        "Contract": {
          "reference": "fortnox_ContractInvoice_ContractUpdatePayload",
          "type": "object",
          "required": [
            "CustomerNumber",
            "InvoiceRows",
            "PeriodEnd"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractController_doUpdateAndCreateInvoice",
    "method": "PUT",
    "path": "/3/contracts/{DocumentNumber}/createinvoice",
    "summary": "Create invoice from contract",
    "description": "Update a contract",
    "tags": [
      "fortnox_Contracts"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the contract"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "invoicedate",
        "required": false,
        "description": "Date of invoicing"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update contract",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractUpdateAndCreateInvoicePayload_Wrap",
      "type": "object",
      "properties": {
        "Contract": {
          "reference": "fortnox_ContractInvoice_ContractUpdateAndCreateInvoicePayload",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractController_doUpdateAndFinish",
    "method": "PUT",
    "path": "/3/contracts/{DocumentNumber}/finish",
    "summary": "Set a contract as finished",
    "description": "Update a contract",
    "tags": [
      "fortnox_Contracts"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the contract"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update contract",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractUpdateAndFinishPayload_Wrap",
      "type": "object",
      "properties": {
        "Contract": {
          "reference": "fortnox_ContractInvoice_ContractUpdateAndFinishPayload",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractController_doUpdateAndIncreaseInvoiceCount",
    "method": "PUT",
    "path": "/3/contracts/{DocumentNumber}/increaseinvoicecount",
    "summary": "Increases the invoice count without creating an invoice",
    "description": "Update a contract",
    "tags": [
      "fortnox_Contracts"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the contract"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update contract",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractUpdateAndIncreaseInvoiceCountPayload_Wrap",
      "type": "object",
      "properties": {
        "Contract": {
          "reference": "fortnox_ContractInvoice_ContractUpdateAndIncreaseInvoiceCountPayload",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractTemplateController_doCreate",
    "method": "POST",
    "path": "/3/contracttemplates",
    "summary": "Create a contract template",
    "description": "Create a contract template",
    "tags": [
      "fortnox_ContractTemplates"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create contract template",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractTemplateSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "ContractTemplate": {
          "reference": "fortnox_ContractInvoice_ContractTemplateSinglePayloadItem",
          "type": "object",
          "required": [
            "TemplateName"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractTemplateController_doIndex",
    "method": "GET",
    "path": "/3/contracttemplates",
    "summary": "Retrieve a list of contract templates",
    "description": "The contract template resource can return a list of records or a single record. By specifying a TemplateNumber in the URL, a single record will be returned. Not specifying a TemplateNumber will return a list of records.",
    "tags": [
      "fortnox_ContractTemplates"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractTemplateController_doShow",
    "method": "GET",
    "path": "/3/contracttemplates/{TemplateNumber}",
    "summary": "Retrieve a single contract template",
    "description": "Retrieve a contract template",
    "tags": [
      "fortnox_ContractTemplates"
    ],
    "pathParameters": [
      {
        "name": "TemplateNumber",
        "required": true,
        "description": "identifies the contract template"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ContractTemplateController_doUpdate",
    "method": "PUT",
    "path": "/3/contracttemplates/{TemplateNumber}",
    "summary": "Update a contract template",
    "description": "Update a contract template",
    "tags": [
      "fortnox_ContractTemplates"
    ],
    "pathParameters": [
      {
        "name": "TemplateNumber",
        "required": true,
        "description": "identifies the contract template"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update contract template",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ContractInvoice_ContractTemplateSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "ContractTemplate": {
          "reference": "fortnox_ContractInvoice_ContractTemplateSinglePayloadItem",
          "type": "object",
          "required": [
            "TemplateName"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CostCenterController_doCreate",
    "method": "POST",
    "path": "/3/costcenters",
    "summary": "Create a cost center",
    "description": "Create a cost center",
    "tags": [
      "fortnox_CostCenters"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create cost center",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_CostCenterSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "CostCenter": {
          "reference": "fortnox_CostCenterSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CostCenterController_doDelete",
    "method": "DELETE",
    "path": "/3/costcenters/{Code}",
    "summary": "Remove a cost center",
    "description": "Delete a cost center",
    "tags": [
      "fortnox_CostCenters"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the cost center to remove"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CostCenterController_doIndex",
    "method": "GET",
    "path": "/3/costcenters",
    "summary": "Retrieve a list of cost centers",
    "description": "The cost centers register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_CostCenters"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CostCenterController_doShow",
    "method": "GET",
    "path": "/3/costcenters/{Code}",
    "summary": "Retrieve a single cost center",
    "description": "Retrieve a cost center",
    "tags": [
      "fortnox_CostCenters"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the cost center"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CostCenterController_doUpdate",
    "method": "PUT",
    "path": "/3/costcenters/{Code}",
    "summary": "Update a cost center",
    "description": "Update a cost center",
    "tags": [
      "fortnox_CostCenters"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the cost center"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update cost center",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_CostCenterSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "CostCenter": {
          "reference": "fortnox_CostCenterSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create",
    "method": "POST",
    "path": "/api/warehouse/deliveries-v1/inbounddeliveries",
    "summary": "Create manual inbound document",
    "description": "<p>\n The <code>id</code> is set automatically.",
    "tags": [
      "warehouse_ManualInboundDocument"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "manual inbound document",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ManualInboundDocument",
      "type": "object",
      "required": [
        "currency",
        "currencyRate",
        "date",
        "rows"
      ],
      "properties": {
        "currency": {
          "type": "string"
        },
        "currencyRate": {
          "type": "number"
        },
        "currencyUnit": {
          "type": "integer",
          "format": "int32"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_ManualInboundDocumentRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "stockPointName": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_1",
    "method": "POST",
    "path": "/api/warehouse/deliveries-v1/outbounddeliveries",
    "summary": "Create manual outbound document",
    "description": "<p>\n The <code>id</code> is set automatically.",
    "tags": [
      "warehouse_ManualOutboundDocument"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "manual outbound document",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ManualOutboundDocument",
      "type": "object",
      "required": [
        "date",
        "rows"
      ],
      "properties": {
        "date": {
          "type": "string",
          "format": "date"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_ManualOutboundDocumentRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "stockPointName": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_10",
    "method": "POST",
    "path": "/api/warehouse/productionorders-v1",
    "summary": "Create a new production order",
    "description": "<p>\n Set <code>itemId</code> to the item to be produced.\n <p>\n Set <code>quantity</code> to number of units to produce.\n <p>\n Set <code>startDate</code> to production start state.\n <p>\n ProductionState is set to <code>reserved</code> by default.\n It can also be <code>registered</code>. Then no reservations\n will be made (no quantities will be assigned to the <code>packageItems</code> yet).\n <p>\n Setting <code>outboundStockPointId</code> (where the <code>packageItems</code>\n will be taken from), and <code>inboundStockPointId</code> (where the\n produced item will be put) is mandatory multiple stockpoints has been activated\n in the warehouse settings.\n <p>\n Before the document is released, the <code>productionDate</code> must be set.\n <p>\n The <code>packageItems</code> to include is easiest to get by calling\n the method <code>getRequiredProductionParts</code>.",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "the production order to create <code>ProductionOrder</code>",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ProductionOrder",
      "type": "object",
      "required": [
        "productionState",
        "quantity",
        "startDate"
      ],
      "properties": {
        "batch": {
          "type": "string"
        },
        "costCenterCode": {
          "type": "string"
        },
        "documentState": {
          "type": "string",
          "enum": [
            "completed",
            "voided"
          ]
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "inboundStockLocationId": {
          "type": "string",
          "format": "uuid"
        },
        "inboundStockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "itemDescription": {
          "type": "string"
        },
        "itemId": {
          "type": "string"
        },
        "itemUnit": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "outboundStockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "packageItems": {
          "type": "array",
          "items": {
            "reference": "warehouse_PackageItem"
          }
        },
        "productionDate": {
          "type": "string",
          "format": "date"
        },
        "productionState": {
          "type": "string",
          "enum": [
            "registered",
            "reserved",
            "ongoing"
          ]
        },
        "projectId": {
          "type": "string"
        },
        "quantity": {
          "type": "number"
        },
        "startDate": {
          "type": "string",
          "format": "date"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_11",
    "method": "POST",
    "path": "/api/warehouse/purchaseorders-v1",
    "summary": "Create Purchase Order",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "<code>PurchaseOrder</code> document.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_PurchaseOrder",
      "type": "object",
      "required": [
        "currencyCode",
        "currencyRate",
        "deliveryAddress",
        "deliveryCity",
        "deliveryName",
        "deliveryZipCode",
        "orderDate",
        "paymentTermsCode",
        "supplierNumber"
      ],
      "properties": {
        "confirmationEmail": {
          "type": "string"
        },
        "costCenterCode": {
          "type": "string"
        },
        "currencyCode": {
          "type": "string"
        },
        "currencyRate": {
          "type": "number"
        },
        "currencyUnit": {
          "type": "integer",
          "format": "int32"
        },
        "customerId": {
          "type": "string"
        },
        "customerName": {
          "type": "string"
        },
        "customerNumber": {
          "type": "string"
        },
        "deliveryAddress": {
          "type": "string"
        },
        "deliveryAddress2": {
          "type": "string"
        },
        "deliveryCity": {
          "type": "string"
        },
        "deliveryCountryCode": {
          "type": "string"
        },
        "deliveryDate": {
          "type": "string",
          "format": "date"
        },
        "deliveryName": {
          "type": "string"
        },
        "deliveryZipCode": {
          "type": "string"
        },
        "dropship": {
          "type": "boolean"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "internalReference": {
          "type": "string"
        },
        "languageCode": {
          "type": "string"
        },
        "manuallyCompleted": {
          "type": "boolean"
        },
        "messageToSupplier": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "orderDate": {
          "type": "string",
          "format": "date"
        },
        "orderValue": {
          "type": "number"
        },
        "orderValueInSEK": {
          "type": "number"
        },
        "ourReference": {
          "type": "string"
        },
        "outboundDocumentReference": {
          "reference": "warehouse_DocumentReference",
          "type": "object"
        },
        "paymentTermsCode": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "purchaseOrderState": {
          "type": "string",
          "enum": [
            "NOT_SENT",
            "SENT",
            "SENT_NOT_REJECTED",
            "DELAYED",
            "RECEIVED",
            "VOIDED",
            "CURRENT",
            "ALL"
          ]
        },
        "purchaseType": {
          "type": "string",
          "enum": [
            "WAREHOUSE",
            "DROPSHIP"
          ]
        },
        "responseState": {
          "type": "string",
          "enum": [
            "NOT_SENT",
            "SENT",
            "ACCEPTED_WITH_REQ_DLV_DATE",
            "ACCEPTED_WITH_CHANGED_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE",
            "REJECTED"
          ]
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_PurchaseOrderRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "supplier": {
          "type": "string"
        },
        "supplierAddress": {
          "type": "string"
        },
        "supplierAddress2": {
          "type": "string"
        },
        "supplierCity": {
          "type": "string"
        },
        "supplierCountryCode": {
          "type": "string"
        },
        "supplierEmail": {
          "type": "string"
        },
        "supplierName": {
          "type": "string"
        },
        "supplierNumber": {
          "type": "string"
        },
        "supplierPostCode": {
          "type": "string"
        },
        "totalReceivedQuantity": {
          "type": "number"
        },
        "translatedResponseState": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        },
        "yourReference": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_2",
    "method": "POST",
    "path": "/api/warehouse/stocktaking-v1",
    "summary": "Create stock taking",
    "description": "<p>\n Create a new Stock Taking document.\n The only mandatory fields are <code>name</code> and <code>responsible</code>.\n <code>state</code> will be set to <code>planning</code> for a newly created document.\n <p>\n The <code>date</code>-field is not mandatory for documents in state <code>planning</code>.\n However, when you update the state to <code>started</code> you have to provide a date.\n\n <code>name</code> is a descriptive name of the stock taking.\n\n <code>responsible</code> is the name of the responsible for the stock taking.\n\n <code>rows</code> are added after creation by using the addRows-method.\n\n <code>projectId</code> and <code>costCenterCode</code> are used for book-keeping, when the\n Stock Taking document is released.\n <p>\n The field <code>usingStockPoints</code> is set from Warehouse system settings upon creation.\n If multiple stockpoints is used, then the rows will be per item-stockPoint-stockLocation.\n If multiple stockpoints is NOT used, then the rows will be per item-stockLocation.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "stock taking",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_StockTaking",
      "type": "object",
      "required": [
        "name",
        "responsible",
        "state"
      ],
      "properties": {
        "costCenterCode": {
          "type": "string"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "responsible": {
          "type": "string"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_StockTakingRow"
          }
        },
        "sortParams": {
          "reference": "warehouse_StockTakingSortParams",
          "type": "object"
        },
        "sortingId": {
          "type": "integer",
          "format": "int32"
        },
        "state": {
          "type": "string"
        },
        "usingStockPoints": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_3",
    "method": "POST",
    "path": "/api/warehouse/stockpoints-v1",
    "summary": "Create stock point",
    "description": "<p>\n Both <code>code</code> and <code>name</code> are mandatory.\n <p>\n If you want to set a custom delivery address for this stock point,\n you must remember to set <code>usingCompanyAddress</code> to <code>false</code>.\n <p>\n Returns 400 <code>alreadyexists</code> if a stock point with same code already exists.\n <p>\n Returns 400 <code>duplicatestocklocations</code> if two or more stock locations have the same code.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "stock point",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_StockPoint",
      "type": "object",
      "required": [
        "code",
        "name"
      ],
      "properties": {
        "active": {
          "type": "boolean"
        },
        "code": {
          "type": "string"
        },
        "deliveryAddress": {
          "type": "string"
        },
        "deliveryAddress2": {
          "type": "string"
        },
        "deliveryCity": {
          "type": "string"
        },
        "deliveryCountryCode": {
          "type": "string"
        },
        "deliveryName": {
          "type": "string"
        },
        "deliveryPhone": {
          "type": "string"
        },
        "deliveryZipCode": {
          "type": "string"
        },
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "name": {
          "type": "string"
        },
        "stockLocations": {
          "type": "array",
          "items": {
            "reference": "warehouse_StockLocation"
          }
        },
        "usingCompanyAddress": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_5",
    "method": "POST",
    "path": "/api/warehouse/stocktransfer-v1",
    "summary": "Create a stock transfer document",
    "description": "<p>\n Outbounds will be reserved in the from-place.\n Inbounds are created upon release of the stock transfer document.",
    "tags": [
      "warehouse_StockTransfer"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "stock transfer document",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_StockTransferDocument",
      "type": "object",
      "required": [
        "rows"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_StockTransferRow"
          }
        },
        "transferDate": {
          "type": "string",
          "format": "date"
        },
        "version": {
          "type": "integer",
          "format": "int64"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_8",
    "method": "POST",
    "path": "/api/warehouse/documentdeliveries/custom/documenttypes-v1",
    "summary": "Create custom document type",
    "description": "Create type, if it doesn't already exists. Note that new custom document types are\n created automatically when you create custom documents, so normally\n you do not need to call this method.\n\n Throws HTTP 400 <code>referenceTypeNotAllowed</code> if the name of the type is not allowed.",
    "tags": [
      "warehouse_CustomDocumentType"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The <code>CustomDocumentType</code>.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_CustomDocumentType",
      "type": "object",
      "required": [
        "category",
        "referenceType"
      ],
      "properties": {
        "category": {
          "type": "string",
          "enum": [
            "INBOUND",
            "OUTBOUND"
          ]
        },
        "referenceType": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "create_9",
    "method": "POST",
    "path": "/api/warehouse/incominggoods-v1",
    "summary": "Create Incoming Goods document",
    "description": "",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The <code>IncomingGoods</code> document.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_IncomingGoods",
      "type": "object",
      "required": [
        "deliveryNoteId"
      ],
      "properties": {
        "completed": {
          "type": "boolean"
        },
        "costCenterCode": {
          "type": "string"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "deliveryNoteId": {
          "type": "string"
        },
        "hasDeliveryNote": {
          "type": "boolean"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_IncomingGoodsRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "stockPointName": {
          "type": "string"
        },
        "supplierName": {
          "type": "string"
        },
        "supplierNumber": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "createInvoiceRequests",
    "method": "POST",
    "path": "/api/recurring-billing/recurrings-invoice-requests-v1",
    "summary": "Create invoice requests for multiple recurrings",
    "description": "Generates invoices for the supplied recurrings. With `processing-mode=SYNC` (the default) the invoices are created immediately and the completed request is returned, limited to at most 100 recurring IDs. With `processing-mode=ASYNC` the request is persisted and processed in the background, supports larger batches, and is returned with status `PENDING`/`PROCESSING`. A recurring that already has an in-flight request causes the new request to be rejected with `409`.",
    "tags": [
      "Recurring-API_InvoiceRequests"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "processing-mode",
        "required": false,
        "description": "Controls how invoice creation is processed. SYNC processes immediately and returns the result, but is limited to a maximum of 100 recurring IDs. ASYNC accepts any number of IDs, persists the request, and processes it in the background — use this for batches larger than 100."
      }
    ],
    "requestBodyRequired": true,
    "requestBodyDescription": "",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Recurring-API_CreateInvoiceRequest",
      "type": "object",
      "required": [
        "recurring_ids"
      ],
      "properties": {
        "recurring_ids": {
          "type": "array",
          "description": "List of recurring IDs to create invoices for. When using SYNC processing mode, a maximum of 100 IDs is allowed. For larger batches, use ASYNC processing mode.",
          "items": {
            "type": "string",
            "format": "uuid"
          }
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "createOrderDocument",
    "method": "PUT",
    "path": "/api/bank-process-orders/v1/{order_id}/documents",
    "summary": "Create or update a document for an order.",
    "description": "Supported upload type:\n- LiquidityCertificate (Likvidintyg)\n",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to return"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The document in binary format and what type it is.",
    "requestContentTypes": [
      "multipart/form-data"
    ],
    "requestEncoding": {
      "file": {
        "contentType": "application/pdf"
      }
    },
    "requestBodySchema": {
      "reference": "Company-Order-Bank-Process-API_CreateDocument",
      "type": "object",
      "required": [
        "type",
        "file"
      ],
      "properties": {
        "document_in_effect_date": {
          "type": "string",
          "format": "date",
          "description": "Date when the document (or related action) came in effect. For example for a liquidity document it can be when the customer deposited the share capital (e.g. 2026-01-15). Defaults to today's date if not provided."
        },
        "file": {
          "type": "string",
          "format": "binary",
          "description": "The file content to upload"
        },
        "type": {
          "reference": "Company-Order-Bank-Process-API_UploadDocumentType",
          "type": "string",
          "enum": [
            "LiquidityCertificate",
            "BankCertificate"
          ]
        }
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "createOrderDocumentDeprecated",
    "method": "POST",
    "path": "/api/bank-process-orders/v1/{order_id}/documents",
    "summary": "Create or update a document for an order.",
    "description": "This endpoint is deprecated. Use `PUT /api/bank-process-orders/v1/{order_id}/documents` instead.",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to return"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The document in binary format and what type it is.",
    "requestContentTypes": [
      "multipart/form-data"
    ],
    "requestEncoding": {
      "file": {
        "contentType": "application/pdf"
      }
    },
    "requestBodySchema": {
      "reference": "Company-Order-Bank-Process-API_CreateDocument",
      "type": "object",
      "required": [
        "type",
        "file"
      ],
      "properties": {
        "document_in_effect_date": {
          "type": "string",
          "format": "date",
          "description": "Date when the document (or related action) came in effect. For example for a liquidity document it can be when the customer deposited the share capital (e.g. 2026-01-15). Defaults to today's date if not provided."
        },
        "file": {
          "type": "string",
          "format": "binary",
          "description": "The file content to upload"
        },
        "type": {
          "reference": "Company-Order-Bank-Process-API_UploadDocumentType",
          "type": "string",
          "enum": [
            "LiquidityCertificate",
            "BankCertificate"
          ]
        }
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "createRecurring",
    "method": "POST",
    "path": "/api/recurring-billing/recurrings-v1",
    "summary": "Create a new Recurring",
    "description": "Creates a new recurring contract. The created recurring is always persisted with status `ACTIVE`.  The full created representation is returned together with a `Location` header pointing to it, plus `ETag` and `Last-Modified` headers for subsequent optimistic concurrency control.",
    "tags": [
      "Recurring-API_Recurrings"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": true,
    "requestBodyDescription": "",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Recurring-API_CreateActiveRecurring",
      "type": "object",
      "description": "Payload for creating a recurring. The created recurring is always persisted with status ACTIVE, so no status field is accepted here.",
      "required": [
        "dates",
        "customer",
        "rows"
      ],
      "properties": {
        "accrual": {
          "reference": "Recurring-API_CreateAccrual"
        },
        "amount_per_invoicing": {
          "type": "integer",
          "description": "Number of recurring periods combined onto a single invoice. For example, with a monthly recurring an amount of 3 invoices a full quarter at once. Must be between 1 and 12. Defaults to 1."
        },
        "cost_center_id": {
          "type": "string",
          "description": "Identifier of the cost center the recurring and its invoices are booked against."
        },
        "currency": {
          "type": "string",
          "description": "ISO 4217 currency code the recurring is invoiced in (e.g. SEK, EUR)."
        },
        "customer": {
          "reference": "Recurring-API_RecurringCustomer",
          "type": "object",
          "required": [
            "number"
          ]
        },
        "dates": {
          "reference": "Recurring-API_CreateRecurringDates",
          "type": "object",
          "description": "Scheduling supplied when creating a recurring. Only `dates` is required.\n\nSupply the first occurrence in `dates` (`invoice_processing_date` and `period_start_date` are required).\n`rules` is optional: omit it to accept the defaults (interval 1, frequency MONTH). Anchors (`invoice_anchor`, `period_anchor`) are derived from the\nsupplied dates when omitted — e.g. `invoice_processing_date` 2026-02-28 with frequency MONTH yields\n`invoice_anchor` LAST_DAY. `invoice_date` is computed by the server and is therefore not part of the create input.\n",
          "required": [
            "dates"
          ]
        },
        "delivery": {
          "reference": "Recurring-API_RecurringDelivery",
          "type": "object"
        },
        "distribution_method": {
          "reference": "Recurring-API_DistributionMethod",
          "type": "string",
          "description": "How the generated invoices are delivered to the customer:\n- EMAIL: Sent as a PDF by email.\n- E_INVOICE: Sent as a structured electronic invoice.\n- LETTER: Printed and sent by physical mail. (only usable with invoice service)\n"
        },
        "email": {
          "reference": "Recurring-API_RecurringEmail",
          "type": "object"
        },
        "invoice_handling": {
          "reference": "Recurring-API_InvoiceHandling",
          "type": "string",
          "description": "How invoices are produced and managed for the recurring:\n- MANUAL: Invoices are created on demand; nothing is generated automatically.\n- AUTOMATIC: Invoices are generated automatically on schedule.\n- INVOICE_SERVICE_WITH_REMINDERS: Invoices are generated and handled by the Fortnox invoice service, including reminders.\n- INVOICE_SERVICE_WITHOUT_REMINDERS: Invoices are generated and handled by the Fortnox invoice service, only invoice creation and delivery without automatic reminders.\n"
        },
        "order_number": {
          "type": "string",
          "description": "Customer purchase order number printed on the generated invoices."
        },
        "our_reference": {
          "type": "string",
          "description": "The seller's own reference (e.g. the responsible employee) printed on the invoice."
        },
        "payment_terms": {
          "type": "string",
          "description": "Payment terms code applied to the generated invoices (e.g. days until due)."
        },
        "price_list_id": {
          "type": "string",
          "description": "Identifier of the price list used to resolve article prices for this recurring."
        },
        "print_configuration": {
          "reference": "Recurring-API_PrintConfiguration",
          "type": "object"
        },
        "project_id": {
          "type": "string",
          "description": "Identifier of the project the recurring and its invoices are booked against."
        },
        "remark": {
          "type": "string",
          "description": "Invoice text printed on the generated invoices. A text is printed verbatim, including leading and trailing whitespace. `null` follows the default: each invoice gets the customer's current invoice text, otherwise the tenant's current standard invoice text, otherwise no text; the resolved text is never stored on the recurring. An empty string means no invoice text. On create and full update an omitted remark is treated as `null`. A whitespace-only remark is stored as an empty string. The 1024-character limit applies to the stored remark."
        },
        "rows": {
          "type": "array",
          "description": "The line items of the recurring. At least one row is required.",
          "items": {
            "reference": "Recurring-API_CreateRecurringRow"
          }
        },
        "tax_reduction_category": {
          "allOf": [
            {
              "reference": "Recurring-API_TaxReductionCategory"
            },
            {
              "description": "The household/green tax reduction scheme applied to the recurring. Defaults to NONE."
            }
          ]
        },
        "tax_reductions": {
          "type": "array",
          "description": "Tax reduction records to attach to the recurring, one per applicant.",
          "items": {
            "reference": "Recurring-API_CreateTaxReduction"
          }
        },
        "vat_option": {
          "reference": "Recurring-API_VatOption",
          "type": "string",
          "description": "Indicates if the prices are shown including VAT (INCLUSIVE) or excluding VAT (EXCLUSIVE)",
          "enum": [
            "INCLUSIVE",
            "EXCLUSIVE"
          ]
        },
        "vat_payment_type": {
          "reference": "Recurring-API_VatPaymentType",
          "type": "string",
          "description": "The VAT scheme applied to the invoice:\n- SEVAT: Swedish domestic VAT.\n- SEREVERSEDVAT: Swedish domestic reverse-charge VAT (buyer accounts for VAT).\n- EUREVERSEDVAT: Reverse-charge VAT for EU trade (buyer accounts for VAT).\n- EUVAT: EU VAT.\n- EXPORT: Export outside the EU; no VAT charged.\n"
        },
        "your_reference": {
          "type": "string",
          "description": "The customer's reference (e.g. their contact person) printed on the invoice."
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "createStartOrderDocument",
    "method": "POST",
    "path": "/api/bank-process-start-orders/v1/{order_id}/documents",
    "summary": "Create document for the order",
    "description": "Create doc for order. If the document already exists for the provided type, a 409 Conflict is returned.\nSupported upload type:\n- BankCertificate (Bankintyg)\n",
    "tags": [
      "Company-Order-Bank-Process-API_StartCompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to return"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Create a new document for the order",
    "requestContentTypes": [
      "multipart/form-data"
    ],
    "requestEncoding": {
      "file": {
        "contentType": "application/pdf"
      }
    },
    "requestBodySchema": {
      "reference": "Company-Order-Bank-Process-API_CreateDocument",
      "type": "object",
      "required": [
        "type",
        "file"
      ],
      "properties": {
        "document_in_effect_date": {
          "type": "string",
          "format": "date",
          "description": "Date when the document (or related action) came in effect. For example for a liquidity document it can be when the customer deposited the share capital (e.g. 2026-01-15). Defaults to today's date if not provided."
        },
        "file": {
          "type": "string",
          "format": "binary",
          "description": "The file content to upload"
        },
        "type": {
          "reference": "Company-Order-Bank-Process-API_UploadDocumentType",
          "type": "string",
          "enum": [
            "LiquidityCertificate",
            "BankCertificate"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/problem+json"
    ]
  },
  {
    "operationId": "createWebhook",
    "method": "POST",
    "path": "/api/bank-process-webhooks/v1",
    "summary": "Creates a webhook",
    "description": "Creates a webhook ie. a subscription for updates. The registered url will be called whenever an\norder is accepted, updated or deleted.\nThe call will be a POST call with body as defined in WebhookEvent.\n\nA header \"X-Fnox-Signature-256\" will also be passed containing a HMAC hash of the content calculated\nusing the secret provided when registering the webhook. This hash should be used to verify that the\ncontent is not tampered with and that the call is coming from Fortnox.\n\nA maximum of 10 webhooks can be registered.\n\nIf a callback fails it is retried automatically, once per minute,\nfor up to 5 attempts before the delivery is abandoned.\n\nEvents are superseded per order. If a newer event is generated before a pending event is delivered,\nthe older event is dropped. You may not receive every state change; each delivered event reflects \nthe order's latest state.\n",
    "tags": [
      "Company-Order-Bank-Process-Webhook-API_BankProcessWebhook"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": true,
    "requestBodyDescription": "The webhook to create.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Company-Order-Bank-Process-Webhook-API_CreateWebhook",
      "allOf": [
        {
          "reference": "Company-Order-Bank-Process-Webhook-API_WebhookFields",
          "type": "object"
        },
        {
          "type": "object",
          "required": [
            "url",
            "secret"
          ]
        }
      ]
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CurrencyController_doCreate",
    "method": "POST",
    "path": "/3/currencies",
    "summary": "Create a currency",
    "description": "Create a currency",
    "tags": [
      "fortnox_Currencies"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create currency",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_CurrencySinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "Currency"
      ],
      "properties": {
        "Currency": {
          "reference": "fortnox_CurrencySinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CurrencyController_doDelete",
    "method": "DELETE",
    "path": "/3/currencies/{Code}",
    "summary": "Remove a currency",
    "description": "Delete a currency",
    "tags": [
      "fortnox_Currencies"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of currency to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CurrencyController_doIndex",
    "method": "GET",
    "path": "/3/currencies",
    "summary": "Retrieve a list of currencies",
    "description": "The currency register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_Currencies"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CurrencyController_doShow",
    "method": "GET",
    "path": "/3/currencies/{Code}",
    "summary": "Retrieve a single currency",
    "description": "Retrieve a currency",
    "tags": [
      "fortnox_Currencies"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of currency to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CurrencyController_doUpdate",
    "method": "PUT",
    "path": "/3/currencies/{Code}",
    "summary": "Update a currency",
    "description": "Update a currency",
    "tags": [
      "fortnox_Currencies"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of currency to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update currency",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_CurrencySinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "Currency"
      ],
      "properties": {
        "Currency": {
          "reference": "fortnox_CurrencySinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerController_doCreate",
    "method": "POST",
    "path": "/3/customers",
    "summary": "Create a customer",
    "description": "The created customer will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Customers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create customer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_CustomerSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Customer": {
          "reference": "fortnox_Kf_CustomerSinglePayloadItem",
          "type": "object",
          "required": [
            "Name"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerController_doDelete",
    "method": "DELETE",
    "path": "/3/customers/{CustomerNumber}",
    "summary": "Delete a customer",
    "description": "Deletes the customer permanently. If everything succeeded the response will be of the type 204 \\u2013 No content and the response body will be empty. If there were any problems an error will be returned.\n You need to supply the unique customer number of the customer that you want to delete.",
    "tags": [
      "fortnox_Customers"
    ],
    "pathParameters": [
      {
        "name": "CustomerNumber",
        "required": true,
        "description": "Customer number of customer to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerController_doIndex",
    "method": "GET",
    "path": "/3/customers",
    "summary": "Retrieve a list of customers",
    "description": "The customers are returned sorted by customer number with the lowest number appearing first.",
    "tags": [
      "fortnox_Customers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter customers"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "filter by customer number"
      },
      {
        "name": "name",
        "required": false,
        "description": "filter by name"
      },
      {
        "name": "zipcode",
        "required": false,
        "description": "filter by zip code"
      },
      {
        "name": "city",
        "required": false,
        "description": "filter by city"
      },
      {
        "name": "email",
        "required": false,
        "description": "filter by email"
      },
      {
        "name": "phone",
        "required": false,
        "description": "filter by phone"
      },
      {
        "name": "organisationnumber",
        "required": false,
        "description": "filter by organisation number"
      },
      {
        "name": "gln",
        "required": false,
        "description": "filter by gln"
      },
      {
        "name": "glndelivery",
        "required": false,
        "description": "filter by gln delivery"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by last modified"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerController_doShow",
    "method": "GET",
    "path": "/3/customers/{CustomerNumber}",
    "summary": "Retrieve a customer",
    "description": "You need to supply the unique customer number that was returned when the customer was created or retrieved from the list of customers.",
    "tags": [
      "fortnox_Customers"
    ],
    "pathParameters": [
      {
        "name": "CustomerNumber",
        "required": true,
        "description": "Customer number of customer to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerController_doUpdate",
    "method": "PUT",
    "path": "/3/customers/{CustomerNumber}",
    "summary": "Update a customer",
    "description": "<p>The updated customer will be returned if everything succeeded, if there were any problems an error will be returned.</p>\n <p>You need to supply the unique customer number of the customer that you want to update.</p>\n <p>Only the properties provided in the request body will be updated, properties not provided will be left unchanged.</p>",
    "tags": [
      "fortnox_Customers"
    ],
    "pathParameters": [
      {
        "name": "CustomerNumber",
        "required": true,
        "description": "Customer number of customer to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update customer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_CustomerSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Customer": {
          "reference": "fortnox_Kf_CustomerSinglePayloadItem",
          "type": "object",
          "required": [
            "Name"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerReferenceController_doCreate",
    "method": "POST",
    "path": "/3/customerreferences",
    "summary": "Create a customer reference row",
    "description": "</p>\n <p>The created customer reference row will be returned if everything succeeded, if there were any problems an error will be returned.</p>",
    "tags": [
      "fortnox_CustomerReferences"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create customer reference",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_CustomerReferenceRowRow_Wrap",
      "type": "object",
      "properties": {
        "CustomerReferenceRow": {
          "reference": "fortnox_Kf_CustomerReferenceRowRow",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerReferenceController_doDelete",
    "method": "DELETE",
    "path": "/3/customerreferences/{CustomerReferenceRowId}",
    "summary": "Delete a customer reference row",
    "description": "</p>\n <p>Deletes the customer reference row permanently. If everything succeeded the response will be of the type 204, No content and the response body will be empty.</p>\n <p>If there were any problems an error will be returned.</p>\n <p>You need to supply the unique customer reference row id of the customer reference row that you want to delete.</p>",
    "tags": [
      "fortnox_CustomerReferences"
    ],
    "pathParameters": [
      {
        "name": "CustomerReferenceRowId",
        "required": true,
        "description": "identifies the customer reference row"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "CustomerReferenceController_doIndex",
    "method": "GET",
    "path": "/3/customerreferences",
    "summary": "Retrieve a list of customers reference rows",
    "description": "</p>",
    "tags": [
      "fortnox_CustomerReferences"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "customer",
        "required": false,
        "description": "possibility to filter by customer number"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerReferenceController_doShow",
    "method": "GET",
    "path": "/3/customerreferences/{CustomerReferenceRowId}",
    "summary": "Retrieve a customer reference row",
    "description": "</p>\n <p>You need to supply the unique customer reference row id that was returned when the customer reference row was created or retrieved from the list of customer reference rows.</p>",
    "tags": [
      "fortnox_CustomerReferences"
    ],
    "pathParameters": [
      {
        "name": "CustomerReferenceRowId",
        "required": true,
        "description": "identifies the customer reference row"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "CustomerReferenceController_doUpdate",
    "method": "PUT",
    "path": "/3/customerreferences/{CustomerReferenceRowId}",
    "summary": "Update a customer reference row",
    "description": "</p>\n <p>The updated customer reference row will be returned if everything succeeded, if there were any problems an error will be returned.</p>\n <p>You need to supply the unique customer reference row id of the customer reference row that you want to update.</p>\n <p>Only the properties provided in the request body will be updated, properties not provided will be left unchanged.</p>\n <p>CustomerNumber cannot be changed by this request.</p>",
    "tags": [
      "fortnox_CustomerReferences"
    ],
    "pathParameters": [
      {
        "name": "CustomerReferenceRowId",
        "required": true,
        "description": "identifies the customer reference row"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update customer reference",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_CustomerReferenceRowRow_Wrap",
      "type": "object",
      "properties": {
        "CustomerReferenceRow": {
          "reference": "fortnox_Kf_CustomerReferenceRowRow",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "delete",
    "method": "DELETE",
    "path": "/api/warehouse/stockpoints-v1/{id}",
    "summary": "Delete stock point",
    "description": "<p>\n Note that it is not allowed to delete a stock point that is in use.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "deleteStockTaking",
    "method": "DELETE",
    "path": "/api/warehouse/stocktaking-v1/{id}",
    "summary": "Delete Stock Taking document",
    "description": "<p>\n Permanently deletes a Stock Taking document and its rows.\n <p>\n Only for documents in state <code>planning</code> and <code>started</code>.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "deleteStockTakingRow",
    "method": "DELETE",
    "path": "/api/warehouse/stocktaking-v1/{id}/rows/{rowId}",
    "summary": "Delete row",
    "description": "<p>\n Remove single row by id from the Stock Taking document.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      },
      {
        "name": "rowId",
        "required": true,
        "description": "row id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "deleteStockTakingRowByFilter",
    "method": "DELETE",
    "path": "/api/warehouse/stocktaking-v1/{id}/rows",
    "summary": "Delete rows by filter",
    "description": "<p>\n Remove all rows matching the filter parameters from the Stock Taking document.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "itemIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "supplierNumbers",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockPointIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockLocationIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "transactionDate",
        "required": false,
        "description": ""
      },
      {
        "name": "itemIdSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "itemDescriptionSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "excludeZeroBalanceItems",
        "required": false,
        "description": ""
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "deleteWebhook",
    "method": "DELETE",
    "path": "/api/bank-process-webhooks/v1/{webhook_id}",
    "summary": "Deletes a webhook",
    "description": "Deletes a registered webhook.",
    "tags": [
      "Company-Order-Bank-Process-Webhook-API_BankProcessWebhook"
    ],
    "pathParameters": [
      {
        "name": "webhook_id",
        "required": true,
        "description": "ID of the webhook"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "detach",
    "method": "DELETE",
    "path": "/api/fileattachments/attachments-v1/{attachmentId}",
    "summary": "Detach file",
    "description": "",
    "tags": [
      "fileattachments_Attachment"
    ],
    "pathParameters": [
      {
        "name": "attachmentId",
        "required": true,
        "description": "id of the attachment to be detached"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "DocumentTagController_doCreate",
    "method": "POST",
    "path": "/3/labels",
    "summary": "Create a label",
    "description": "The created label will be returned if everything succeeded, if there were any problems an error will be returned.",
    "tags": [
      "fortnox_Labels"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create label",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_DocumentTagSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "Label"
      ],
      "properties": {
        "Label": {
          "reference": "fortnox_DocumentTagSinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "DocumentTagController_doDelete",
    "method": "DELETE",
    "path": "/3/labels/{Id}",
    "summary": "Delete a label",
    "description": "Deletes the label and its connection to documents permanently.\n You need to supply the unique label id that was returned when the label was created or retrieved from the list of labels.",
    "tags": [
      "fortnox_Labels"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the label"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "DocumentTagController_doIndex",
    "method": "GET",
    "path": "/3/labels",
    "summary": "Retrieve a list of labels",
    "description": "Get labels",
    "tags": [
      "fortnox_Labels"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "DocumentTagController_doUpdate",
    "method": "PUT",
    "path": "/3/labels/{Id}",
    "summary": "Update a label",
    "description": "Updates the specified label with the values provided in the properties. Any property not provided will be left unchanged.",
    "tags": [
      "fortnox_Labels"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the label"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update label",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_DocumentTagSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "Label"
      ],
      "properties": {
        "Label": {
          "reference": "fortnox_DocumentTagSinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EmailSenderController_doIndex",
    "method": "GET",
    "path": "/3/emailsenders",
    "summary": "Retrieve a list of all trusted and rejected senders",
    "description": "Get email senders",
    "tags": [
      "fortnox_TrustedEmailSenders"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EmailSenderController_doTrustedDeleteWithId",
    "method": "DELETE",
    "path": "/3/emailsenders/trusted/{Id}",
    "summary": "Delete an email address from the trusted senders list",
    "description": "Provide an id matching an email to delete.",
    "tags": [
      "fortnox_TrustedEmailSenders"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the trusted email sender to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EmailSenderController_doTrustedPostDefault",
    "method": "POST",
    "path": "/3/emailsenders/trusted",
    "summary": "Add a new email address as trusted",
    "description": "Update an email sender",
    "tags": [
      "fortnox_TrustedEmailSenders"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update email sender",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Da_EmailSender_Trusted_Wrap",
      "type": "object",
      "properties": {
        "TrustedSender": {
          "reference": "fortnox_Da_EmailSenderSingleItem",
          "type": "object",
          "required": [
            "Email"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EmployeeController_doCreate",
    "method": "POST",
    "path": "/3/employees",
    "summary": "Create a new employee",
    "description": "EmployeeId is optional. If not supplied the program will generate a unique id.\n \n VacationDaysSaved and all registered and pending vacationdays are read only.\n \n Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied\n it must have one and only one record where FirstDay = '1970-01-01'.\n All FirstDay values must greater or equal to '1970-01-01' and unique.\n\n If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If\n MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied.\n If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'.\n All FirstDay values must greater or equal to '1970-01-01' and unique.",
    "tags": [
      "fortnox_Employees"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create employee",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_EmployeeSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Employee": {
          "reference": "fortnox_Lon_EmployeeSinglePayloadItem",
          "type": "object",
          "required": [
            "Email",
            "FirstName",
            "LastName"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EmployeeController_doIndex",
    "method": "GET",
    "path": "/3/employees",
    "summary": "Retrieve a list of employees",
    "description": "ScheduleId, MonthlySalary and HourlyPay reflect current values, all\n ScheduleIds are returned in DatedSchedules and all MonthlySalary and\n HourlyPay pairs are returned in DatedWages.",
    "tags": [
      "fortnox_Employees"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EmployeeController_doShow",
    "method": "GET",
    "path": "/3/employees/{EmployeeId}",
    "summary": "Retrieve a specific employee",
    "description": "ScheduleId, MonthlySalary and HourlyPay reflect current values, all\n ScheduleIds are returned in DatedSchedules and all MonthlySalary and\n HourlyPay pairs are returned in DatedWages.",
    "tags": [
      "fortnox_Employees"
    ],
    "pathParameters": [
      {
        "name": "EmployeeId",
        "required": true,
        "description": "identifies the employee"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EmployeeController_doUpdate",
    "method": "PUT",
    "path": "/3/employees/{EmployeeId}",
    "summary": "Update employee",
    "description": "Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied\n it must have one and only one record where FirstDay = '1970-01-01'.\n All FirstDay values must greater or equal to '1970-01-01' and unique.\n \n VacationDaysSaved and all registered and pending vacationdays are read only.\n\n If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If\n MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied.\n If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'.\n All FirstDay values must greater or equal to '1970-01-01' and unique.",
    "tags": [
      "fortnox_Employees"
    ],
    "pathParameters": [
      {
        "name": "EmployeeId",
        "required": true,
        "description": "identifies the employee"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update employee",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_EmployeeSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Employee": {
          "reference": "fortnox_Lon_EmployeeSinglePayloadItem",
          "type": "object",
          "required": [
            "Email",
            "FirstName",
            "LastName"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "EUVatLimitRegulationController_doIndex",
    "method": "GET",
    "path": "/3/euvatlimitregulation",
    "summary": "Retrieve details about eu vat limit",
    "description": "Get eu vat limit regulations",
    "tags": [
      "fortnox_EUVatLimitRegulation"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "year",
        "required": false,
        "description": "eu vat limit regulation for year, if not provided than this will be set to current year"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "evaluateWebhook",
    "method": "POST",
    "path": "/api/bank-process-webhooks/v1/{webhook_id}/evaluate",
    "summary": "Evaluates a webhook",
    "description": "Evaluates (triggers) a previously registered webhook. Should only be used for testing purposes.\nThe body in callback will contain dummy data.\n",
    "tags": [
      "Company-Order-Bank-Process-Webhook-API_BankProcessWebhook"
    ],
    "pathParameters": [
      {
        "name": "webhook_id",
        "required": true,
        "description": "ID of the webhook to evaluate"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "ExpensesController_doCreate",
    "method": "POST",
    "path": "/3/expenses",
    "summary": "Create an expense",
    "description": "Create an expense",
    "tags": [
      "fortnox_Expenses"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create expense",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_ExpensesSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Expense": {
          "reference": "fortnox_Lon_ExpensesSinglePayloadItem",
          "type": "object",
          "required": [
            "Account",
            "Code",
            "Text"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ExpensesController_doIndex",
    "method": "GET",
    "path": "/3/expenses",
    "summary": "Retrieve expenses",
    "description": "Retrieve expense codes.",
    "tags": [
      "fortnox_Expenses"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ExpensesController_doShow",
    "method": "GET",
    "path": "/3/expenses/{ExpenseCode}",
    "summary": "Retrieve an expense",
    "description": "Retrieves expense information for specified expense.",
    "tags": [
      "fortnox_Expenses"
    ],
    "pathParameters": [
      {
        "name": "ExpenseCode",
        "required": true,
        "description": "expenseCode"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "FinancialYearController_doCreate",
    "method": "POST",
    "path": "/3/financialyears",
    "summary": "Create a financial year",
    "description": "Create a financial year",
    "tags": [
      "fortnox_FinancialYears"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create financial year",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Bf_FinancialYearSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "FinancialYear"
      ],
      "properties": {
        "FinancialYear": {
          "reference": "fortnox_Bf_FinancialYearSinglePayloadItem",
          "type": "object",
          "required": [
            "FromDate",
            "ToDate"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "FinancialYearController_doIndex",
    "method": "GET",
    "path": "/3/financialyears",
    "summary": "Retrieve a list of financial years",
    "description": "Add the query param to filter on specific date.",
    "tags": [
      "fortnox_FinancialYears"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "Date",
        "required": false,
        "description": "date to filter on, for example 2020-06-30"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "FinancialYearController_doShow",
    "method": "GET",
    "path": "/3/financialyears/{Id}",
    "summary": "Retrieve financial year by id",
    "description": "Retrieve a financial year",
    "tags": [
      "fortnox_FinancialYears"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the year"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "findOrdersByOrganizationNumber",
    "method": "GET",
    "path": "/api/bank-process-orders/v1/find-by-organization-number/{organization_number}",
    "summary": "Returns zero or multiple orders",
    "description": "Returns orders by organization number",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "organization_number",
        "required": true,
        "description": "Organization number to return orders for, acceptable formats are \"123456789\" or \"123456-7890\""
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get",
    "method": "GET",
    "path": "/api/warehouse/deliveries-v1/inbounddeliveries/{id}",
    "summary": "Get manual inbound document",
    "description": "",
    "tags": [
      "warehouse_ManualInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Inbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_1",
    "method": "GET",
    "path": "/api/warehouse/deliveries-v1/outbounddeliveries/{id}",
    "summary": "Get manual outbound document",
    "description": "",
    "tags": [
      "warehouse_ManualOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Outbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_11",
    "method": "GET",
    "path": "/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}",
    "summary": "Get custom document type",
    "description": "",
    "tags": [
      "warehouse_CustomDocumentType"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "the name of the reference type"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_12",
    "method": "GET",
    "path": "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}",
    "summary": "Get custom inbound document",
    "description": "",
    "tags": [
      "warehouse_CustomInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "Document type."
      },
      {
        "name": "id",
        "required": true,
        "description": "Document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_13",
    "method": "GET",
    "path": "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}",
    "summary": "Get custom outbound document",
    "description": "",
    "tags": [
      "warehouse_CustomOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "document type"
      },
      {
        "name": "id",
        "required": true,
        "description": "document id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_15",
    "method": "GET",
    "path": "/api/warehouse/incominggoods-v1/{id}",
    "summary": "Get Incoming Goods document",
    "description": "",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Incoming goods document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "ignoreSupplierInvoiceId",
        "required": false,
        "description": "This Supplier Invoice id will be excluded when calculating the takenQuantity."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_16",
    "method": "GET",
    "path": "/api/warehouse/productionorders-v1/{id}",
    "summary": "Get Production Order document",
    "description": "",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Production Order document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_17",
    "method": "GET",
    "path": "/api/warehouse/purchaseorders-v1/{id}",
    "summary": "Get Purchase Order",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "ignoreIncomingGoodsId",
        "required": false,
        "description": "used for calculating the remaining ordered quantity. null will take the received quantity from all incoming goods"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_2",
    "method": "GET",
    "path": "/api/warehouse/stocktaking-v1/{id}",
    "summary": "Get Stock Taking document",
    "description": "",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "get_4",
    "method": "GET",
    "path": "/api/warehouse/stocktransfer-v1/{id}",
    "summary": "Get stock transfer document",
    "description": "",
    "tags": [
      "warehouse_StockTransfer"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Transfer document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAll",
    "method": "GET",
    "path": "/api/warehouse/deliveries-v1",
    "summary": "List manual documents",
    "description": "",
    "tags": [
      "warehouse_ManualDocument"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "state",
        "required": false,
        "description": "Include only documents with given state."
      },
      {
        "name": "type",
        "required": false,
        "description": "Include only documents with given type."
      },
      {
        "name": "itemId",
        "required": false,
        "description": "Include only documents containing the given item."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAll_1",
    "method": "GET",
    "path": "/api/warehouse/stocktaking-v1",
    "summary": "List stock takings",
    "description": "<p>\n Sortable fields:\n <code>id</code>,\n <code>name</code>,\n <code>date</code>,\n <code>responsible</code>,\n <code>state</code>\n </p>",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "state",
        "required": false,
        "description": "Include only stock takings with the given state."
      },
      {
        "name": "itemId",
        "required": false,
        "description": "Include only stock takings with the given item."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAll_2",
    "method": "GET",
    "path": "/api/warehouse/stockpoints-v1",
    "summary": "List stock points",
    "description": "<p>\n List stock points, optionally include a query parameter `q` to filter on stock point code or name.\n <p>\n Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include only ACTIVE stock points).\n <p>\n Stock locations are NOT included in the response.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "q",
        "required": false,
        "description": "filters on stock point code or name."
      },
      {
        "name": "state",
        "required": false,
        "description": "filter on stock point state"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAll_6",
    "method": "GET",
    "path": "/api/warehouse/documentdeliveries/custom/documenttypes-v1",
    "summary": "List custom document types",
    "description": "",
    "tags": [
      "warehouse_CustomDocumentType"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAll_7",
    "method": "GET",
    "path": "/api/warehouse/incominggoods-v1",
    "summary": "List Incoming Goods Documents",
    "description": "<p>\n     List incoming goods documents matching the given parameters.\n </p>\n <p>\n     Sortable fields:\n     <code>id</code>,\n     <code>has_delivery_note</code>,\n     <code>delivery_note_id</code>,\n     <code>supplier_number</code>,\n     <code>date</code>\n </p>",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "released",
        "required": false,
        "description": "`true` to include only released documents.\n `false` to include only non-released documents."
      },
      {
        "name": "completed",
        "required": false,
        "description": "`true` to include only completed documents.\n `false` to include only non-completed documents."
      },
      {
        "name": "voided",
        "required": false,
        "description": "`true` to include only voided documents.\n `false` to include only non-voided documents."
      },
      {
        "name": "supplierNumber",
        "required": false,
        "description": "Include only documents with the given `supplierNumber`."
      },
      {
        "name": "itemId",
        "required": false,
        "description": "Include only documents with the given `itemId`."
      },
      {
        "name": "note",
        "required": false,
        "description": "Include only documents where `note`-field contains the given text (case-insensitive)."
      },
      {
        "name": "deliveryNote",
        "required": false,
        "description": "Include only documents where `deliveryNote`-field contains the given text (case-insensitive)."
      },
      {
        "name": "q",
        "required": false,
        "description": "Include only documents where `id` or `deliveryNote`-field contains the given text (case-insensitive)."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAll_8",
    "method": "GET",
    "path": "/api/warehouse/productionorders-v1",
    "summary": "List production orders",
    "description": "",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "state",
        "required": false,
        "description": "Include only production orders with the given state.\n              Allowed states: all, incomplete, delayed, completed, voided.\n              (Default is incomplete)"
      },
      {
        "name": "itemId",
        "required": false,
        "description": "Include only production orders with the given production item."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAll_9",
    "method": "GET",
    "path": "/api/warehouse/purchaseorders-v1",
    "summary": "List Purchase Orders",
    "description": "<p>\n List purchase orders matching the given parameters.\n </p>\n <p>\n Sortable fields:\n <code>id</code>,\n <code>supplier_number</code>,\n <code>order_date</code>,\n <code>internal_reference</code>,\n <code>response_state</code>,\n <code>delivery_date</code>\n </p>",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "q",
        "required": false,
        "description": "Include only documents where `id` or `internalReference`-field contains the given text (case-insensitive)."
      },
      {
        "name": "supplierNumber",
        "required": false,
        "description": "Include only documents with the given `supplierNumber`."
      },
      {
        "name": "state",
        "required": false,
        "description": "Include only documents with the given `purchaseOrderState`."
      },
      {
        "name": "itemId",
        "required": false,
        "description": "Include only documents with the given `itemId`."
      },
      {
        "name": "purchaseType",
        "required": false,
        "description": "Include only documents with the given `purchaseType`"
      },
      {
        "name": "internalReference",
        "required": false,
        "description": "Include only documents where `internalReference' contains the given text (case-insensitive)."
      },
      {
        "name": "note",
        "required": false,
        "description": "Include only documents where `note`-field contains the given text (case-insensitive)."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAttachedNotes",
    "method": "GET",
    "path": "/api/warehouse/purchaseorders-v1/{id}/notes",
    "summary": "Get notes",
    "description": "<p>\n Get notes for a purchase order.",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getAttachments",
    "method": "GET",
    "path": "/api/fileattachments/attachments-v1",
    "summary": "Get attached files on an entity",
    "description": "",
    "tags": [
      "fileattachments_Attachment"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "entityid",
        "required": true,
        "description": "ids of the entities whose attachments should be fetched",
        "style": "form",
        "explode": true
      },
      {
        "name": "entitytype",
        "required": true,
        "description": "type of the entities whose attachments should be fetched"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getByAmbiguousId",
    "method": "GET",
    "path": "/api/warehouse/stockpoints-v1/{id}",
    "summary": "Get stock point",
    "description": "<p>\n Get stock point by id or code.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "stock point code, or stock point id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getCandidateRows",
    "method": "GET",
    "path": "/api/warehouse/stocktaking-v1/{id}/candidates",
    "summary": "Get candidate rows",
    "description": "<p>\n A candidate row is a combination of itemId, stockPointId and stockLocationId\n that can be added to the Stock Taking document.\n <p>\n Rows already added to the Stock Taking are excluded from this list.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "itemIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "supplierNumbers",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockPointIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockLocationIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "transactionDate",
        "required": false,
        "description": ""
      },
      {
        "name": "itemIdSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "itemDescriptionSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "excludeZeroBalanceItems",
        "required": false,
        "description": ""
      },
      {
        "name": "includeNonInboundItems",
        "required": false,
        "description": "Include items that do not exist on inbound deliveries."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getCsvReport",
    "method": "GET",
    "path": "/api/warehouse/purchaseorders-v1/csv",
    "summary": "Get CSV list of Purchase Orders",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "q",
        "required": false,
        "description": "Include only documents where `id` or `internalReference`-field contains the given text (case-insensitive)."
      },
      {
        "name": "supplierNumber",
        "required": false,
        "description": "Include only documents with the given `supplierNumber`."
      },
      {
        "name": "state",
        "required": false,
        "description": "Include only documents with the given `purchaseOrderState`."
      },
      {
        "name": "itemId",
        "required": false,
        "description": "Include only documents with the given `itemId`."
      },
      {
        "name": "purchaseType",
        "required": false,
        "description": "Include only documents with the given `purchaseType`"
      },
      {
        "name": "internalReference",
        "required": false,
        "description": "Include only documents where `internalReference' contains the given text (case-insensitive)."
      },
      {
        "name": "note",
        "required": false,
        "description": "Include only documents where `note`-field contains the given text (case-insensitive)."
      },
      {
        "name": "showPurchaseTypeColumn",
        "required": false,
        "description": "True to include the purchase type column, default is false."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "text/csv"
    ]
  },
  {
    "operationId": "getInvoiceRequestById",
    "method": "GET",
    "path": "/api/recurring-billing/recurrings-invoice-requests-v1/{invoice-request-id}",
    "summary": "Get an invoice request by ID",
    "description": "Returns a single invoice request including its per-recurring items, overall status and the generated invoice numbers. Use this to poll the result of an asynchronous request.",
    "tags": [
      "Recurring-API_InvoiceRequests"
    ],
    "pathParameters": [
      {
        "name": "invoice-request-id",
        "required": true,
        "description": "The unique identifier of the invoice request."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getMany_3",
    "method": "GET",
    "path": "/api/warehouse/stockpoints-v1/multi",
    "summary": "Get stock points",
    "description": "<p>\n Get stock points by IDs.\n <p>\n Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include ALL stock points).\n <p>\n Stock locations are NOT included in the response.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "ids",
        "required": false,
        "description": "stock point ids (comma separated list of UUIDs)",
        "style": "form",
        "explode": true
      },
      {
        "name": "state",
        "required": false,
        "description": "filter on <code>StockPointState</code>, default is to include ALL stock points."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getMatchedDocuments_1",
    "method": "GET",
    "path": "/api/warehouse/purchaseorders-v1/{id}/matches",
    "summary": "List matched documents",
    "description": "<p>\n Get a list of <code>DocumentReference</code> of linked/connected purchase orders to incoming goods and/or invoice document.",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getNumberOfAttachmentsForEntity",
    "method": "GET",
    "path": "/api/fileattachments/attachments-v1/numberofattachments",
    "summary": "List number of attachments",
    "description": "",
    "tags": [
      "fileattachments_Attachment"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "entityids",
        "required": true,
        "description": "ids of the entities to look for number of attachments on",
        "style": "form",
        "explode": true
      },
      {
        "name": "entitytype",
        "required": true,
        "description": "type of the entities  to look for number of attachments on"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getOrder",
    "method": "GET",
    "path": "/api/bank-process-orders/v1/{order_id}",
    "summary": "Returns an order",
    "description": "Returns one order by ID",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to return"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getOrderDocumentsContent",
    "method": "GET",
    "path": "/api/bank-process-orders/v1/{order_id}/documents/{document_type}/content",
    "summary": "Returns content of order document",
    "description": "Returns content of order document",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order for document"
      },
      {
        "name": "document_type",
        "required": true,
        "description": "Type of document to return content for"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getOrderDocumentsTypes",
    "method": "GET",
    "path": "/api/bank-process-orders/v1/{order_id}/documents",
    "summary": "Returns available document types for an order",
    "description": "- ACCEPTED: Orders accepted by us and currently in active processing.\n- SENT_TO_BV: Orders that have been sent to and are being processed by Bolagsverket.\n- COMPLETED: Orders that are completed and finalized.\n- ABORTED: Orders that have been cancelled by us.\n- DENIED_BY_BANK: Orders that were denied by the bank.\n\nReturns order document types by order ID.\n\n| Document type | Swedish name | Available when |\n| --- | --- | --- |\n| LiquidityCertificate | Likvidintyg | After it has been uploaded — ACCEPTED, SENT_TO_BV, COMPLETED |\n| RegistrationCertificate | Registreringsbevis | Available once the company has been registered — COMPLETED, ABORTED |\n| MemorandumOfAssociation | Stiftelseurkund | ACCEPTED, SENT_TO_BV, COMPLETED, sometimes during ABORTED depending on whether it had already been generated before it was cancelled |\n| ArticlesOfAssociation | Bolagsordning | ACCEPTED, SENT_TO_BV, COMPLETED, ABORTED |\n| MinutesOfAnExtraordinaryGeneralMeeting | Protokoll extra bolagsstämma | ACCEPTED, SENT_TO_BV, COMPLETED, ABORTED |\n| MinutesOfABoardMeeting | Protokoll styrelsemöte | ACCEPTED, SENT_TO_BV, COMPLETED, ABORTED |\n| BankPowerOfAttorney | Bankfullmakt | ACCEPTED, SENT_TO_BV, COMPLETED, and sometimes during ABORTED depending on whether it had already been created before it was cancelled |\n| GeneralPowerOfAttorney | Generalfullmakt | Available once the order has proceeded to or beyond status SENT_TO_BV |\n| SubscriptionList | Teckningslista | Only available for emission orders — any status |\n| BoardsProposal | Styrelsens förslag | Only available for emission orders — any status |\n| RegistrationNotification | Registreringsanmälan | Any status |\n| SignedDocumentCollection | — | A collection of Registreringsbevis, Protokoll extra bolagsstämma, and Protokoll styrelsemöte that have been signed by the customer with a digital certificate — available SENT_TO_BV, COMPLETED, ABORTED |\n",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getOrders",
    "method": "GET",
    "path": "/api/bank-process-orders/v1",
    "summary": "Returns orders",
    "description": "Returns a list of orders depending on the statuses provided.",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "limit",
        "required": false,
        "description": "Maximum number of orders to return."
      },
      {
        "name": "offset",
        "required": false,
        "description": "Number of matching orders to skip before returning results."
      },
      {
        "name": "status",
        "required": false,
        "description": "Filter orders by one or more statuses.\n- ACCEPTED: Orders accepted by us and currently in active processing.\n- SENT_TO_BV: Orders that have been sent to and are being processed by Bolagsverket.\n- COMPLETED: Orders that are completed and finalized.\n- ABORTED: Orders that have been cancelled by us.\n- DENIED_BY_BANK: Orders that were denied by the bank.\nNote: UNKNOWN is not a valid filter value. It may appear as a status on returned orders if an internal status could not be mapped to a known bank-process status.\n"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getRecurringById",
    "method": "GET",
    "path": "/api/recurring-billing/recurrings-v1/{recurring-id}",
    "summary": "Get a recurring by ID",
    "description": "Returns the full representation of a single recurring contract, including its rows, accrual, tax reductions, calculated totals and any accumulated error logs. The `ETag` and `Last-Modified` response headers can be used for later conditional updates.",
    "tags": [
      "Recurring-API_Recurrings"
    ],
    "pathParameters": [
      {
        "name": "recurring-id",
        "required": true,
        "description": "The unique identifier of the recurring contract."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getRecurringDeviation",
    "method": "GET",
    "path": "/api/recurring-billing/recurrings-v1/{recurring-id}/deviations/{deviation-id}",
    "summary": "Get a deviation by ID",
    "description": "Returns a single deviation for a recurring, including its rows and any accrual override.",
    "tags": [
      "Recurring-API_RecurringDeviations"
    ],
    "pathParameters": [
      {
        "name": "recurring-id",
        "required": true,
        "description": "The unique identifier of the recurring contract."
      },
      {
        "name": "deviation-id",
        "required": true,
        "description": "The unique identifier of the deviation."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getRequiredProductionParts",
    "method": "GET",
    "path": "/api/warehouse/productionorders-v1/billofmaterials/{itemId}",
    "summary": "Get the package items (Bill Of Materials, BOMs) for a production article",
    "description": "<p>\n If no parameters are supplied, the <code>totalQuantityRequired</code> for producing 1 unit is returned.\n <p>\n Query parameter <code>quantity</code> can optionally be supplied, which will\n calculate <code>totalQuantityRequired</code>.\n <p>\n If query parameter <code>id</code> is supplied, it will get the quantity from that\n Production Order (the <code>quantity</code> query parameter is ignored if <code>id</code>\n is included).",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [
      {
        "name": "itemId",
        "required": true,
        "description": "Production Article id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "id",
        "required": false,
        "description": "the id of the production order (optional)"
      },
      {
        "name": "quantity",
        "required": false,
        "description": "the quantity of the production order (assumed 1 if left empty)"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getRows",
    "method": "GET",
    "path": "/api/warehouse/stocktaking-v1/{id}/rows",
    "summary": "Get Stock Taking Rows",
    "description": "",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "itemIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "supplierNumbers",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockPointIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockLocationIds",
        "required": false,
        "description": "",
        "style": "form",
        "explode": true
      },
      {
        "name": "transactionDate",
        "required": false,
        "description": ""
      },
      {
        "name": "itemIdSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "itemDescriptionSearch",
        "required": false,
        "description": ""
      },
      {
        "name": "excludeZeroBalanceItems",
        "required": false,
        "description": ""
      },
      {
        "name": "secondarysortby",
        "required": false,
        "description": "Secondary sorting column"
      },
      {
        "name": "secondaryorder",
        "required": false,
        "description": "Secondary sorting order"
      },
      {
        "name": "stateFilter",
        "required": false,
        "description": ""
      },
      {
        "name": "startingRowNo",
        "required": false,
        "description": "the row number to start the search from, used with startingItemId to jump to specific rows, can be empty"
      },
      {
        "name": "startingItemId",
        "required": false,
        "description": "the itemId that should be on top of the rows list (used to jump to specific row), can be empty"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getSalesForSingleIntegration",
    "method": "GET",
    "path": "/api/integration-developer/sales-v1/{integrationId}",
    "summary": "Resolves sales information of an integration",
    "description": "**Required OAuth2 scope:** `developerapi`\n\n<p>\n Returns each order and cancellation event for the integration, with tenant, date and amount, so you can\n reconcile your own sales records with what Fortnox has billed on your behalf.\n <p>\n Prerequisites\n The partner has an active developer account and a published integration that is purchased through Fortnox.",
    "tags": [
      "integration-developer_Integration Sales"
    ],
    "pathParameters": [
      {
        "name": "integrationId",
        "required": true,
        "description": "of the integration to look up sales information for"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getStartOrder",
    "method": "GET",
    "path": "/api/bank-process-start-orders/v1/{order_id}",
    "summary": "Returns a start company order",
    "description": "Returns one order by ID",
    "tags": [
      "Company-Order-Bank-Process-API_StartCompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to return"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getStartOrderDocumentsContent",
    "method": "GET",
    "path": "/api/bank-process-start-orders/v1/{order_id}/documents/{document_type}/content",
    "summary": "Returns content of order document",
    "description": "Returns content of order document",
    "tags": [
      "Company-Order-Bank-Process-API_StartCompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order for document"
      },
      {
        "name": "document_type",
        "required": true,
        "description": "Type of document to return content for"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getStartOrderDocumentsTypes",
    "method": "GET",
    "path": "/api/bank-process-start-orders/v1/{order_id}/documents",
    "summary": "Returns available document types for an order",
    "description": "Returns order document types by order ID.\nDocument types:\n- RegistrationCertificate (Registreringsbevis)\n- MemorandumOfAssociation (Stiftelseurkund)\n- BankPowerOfAttorney (Bankfullmakt)\n- GeneralPowerOfAttorney (Generalfullmakt)\n- BankCertificate (Bankintyg)\n- ArticlesOfAssociation (Bolagsordning)\n",
    "tags": [
      "Company-Order-Bank-Process-API_StartCompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to return documents for"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getStartOrders",
    "method": "GET",
    "path": "/api/bank-process-start-orders/v1",
    "summary": "Returns start company orders",
    "description": "Returns a list of orders depending on the statuses provided.",
    "tags": [
      "Company-Order-Bank-Process-API_StartCompanyOrderBankProcess"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "limit",
        "required": false,
        "description": "Maximum number of orders to return."
      },
      {
        "name": "offset",
        "required": false,
        "description": "Number of matching orders to skip before returning results."
      },
      {
        "name": "status",
        "required": false,
        "description": "Filter orders by one or multiple statuses.\n"
      },
      {
        "name": "founder_civic_number",
        "required": false,
        "description": "Filter orders by founder civic number.\n"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getStockBalance",
    "method": "GET",
    "path": "/api/warehouse/status-v1/stockbalance",
    "summary": "Get stock balance",
    "description": "<p>\n Get stock balance for each stockpoint.\n <p>\n Returns a list of <code>itemId</code>, <code>stockPointCode</code>,\n <code>availableStock</code>, <code>inStock</code>.\n <p>\n (The difference between <code>availableStock</code> and <code>inStock</code>\n is the reserved amount.)",
    "tags": [
      "warehouse_StockStatus"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "itemIds",
        "required": false,
        "description": "Optional filter on itemIds (comma-separated)",
        "style": "form",
        "explode": true
      },
      {
        "name": "stockPointCodes",
        "required": false,
        "description": "Optional filter on stock point codes (comma-separated).",
        "style": "form",
        "explode": true
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getStockLocationsByAmbiguousId",
    "method": "GET",
    "path": "/api/warehouse/stockpoints-v1/{id}/stocklocations",
    "summary": "Get stock locations",
    "description": "<p>\n List stock locations for a specific stock point.\n <p>\n Optionally include a query parameter `q` to filter on stock location code or name.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "stock point id or code"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "q",
        "required": false,
        "description": "filters on stock location code or name."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getTenant",
    "method": "GET",
    "path": "/api/warehouse/tenants-v4",
    "summary": "Get Warehouse activation status",
    "description": "<p>\n Check if current tenant has activated Fortnox Warehouse.",
    "tags": [
      "warehouse_Tenant"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getUsersForSingleIntegrationAndTenant",
    "method": "GET",
    "path": "/api/integration-developer/users/users-v1/{integrationId}/{tenantId}",
    "summary": "Fetch user information for a single published integration and tenant",
    "description": "**Required OAuth2 scope:** `developerapi`\n\n<p>\n Use this to provision or deprovision accounts in your own system as users are added, removed or promoted\n to admin within that tenant, or to see who currently has access before deactivating the integration for\n a tenant.",
    "tags": [
      "integration-developer_Users"
    ],
    "pathParameters": [
      {
        "name": "integrationId",
        "required": true,
        "description": ""
      },
      {
        "name": "tenantId",
        "required": true,
        "description": ""
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "getWebhook",
    "method": "GET",
    "path": "/api/bank-process-webhooks/v1/{webhook_id}",
    "summary": "Returns a webhook",
    "description": "Returns a registered webhook by id.",
    "tags": [
      "Company-Order-Bank-Process-Webhook-API_BankProcessWebhook"
    ],
    "pathParameters": [
      {
        "name": "webhook_id",
        "required": true,
        "description": "ID of the webhook"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InboxController_doCreate",
    "method": "POST",
    "path": "/3/inbox",
    "summary": "Upload a file",
    "description": "Upload a file to a specific subdirectory.",
    "tags": [
      "fortnox_Inbox"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "folderId",
        "required": false,
        "description": "folder id"
      },
      {
        "name": "path",
        "required": false,
        "description": "path"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create folder",
    "requestContentTypes": [
      "multipart/form-data"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "object",
      "properties": {
        "file": {
          "type": "object",
          "description": "file"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InboxController_doDelete",
    "method": "DELETE",
    "path": "/3/inbox/{Id}",
    "summary": "Remove a file or folder",
    "description": "Delete a folder",
    "tags": [
      "fortnox_Inbox"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the file to remove"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InboxController_doIndex",
    "method": "GET",
    "path": "/3/inbox",
    "summary": "Retrieve the root folder containing files and folders",
    "description": "Get folders",
    "tags": [
      "fortnox_Inbox"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InboxController_doShow",
    "method": "GET",
    "path": "/3/inbox/{Id}",
    "summary": "Retrieve a single file",
    "description": "Retrieve a folder",
    "tags": [
      "fortnox_Inbox"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the folder"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "*/*",
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceAccrualController_doCreate",
    "method": "POST",
    "path": "/3/invoiceaccruals",
    "summary": "Create an invoice accrual",
    "description": "Create an invoice accrual",
    "tags": [
      "fortnox_InvoiceAccruals"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create invoice accrual",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceAccrualSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "InvoiceAccrual": {
          "reference": "fortnox_Kf_InvoiceAccrualSinglePayloadItem",
          "type": "object",
          "required": [
            "AccrualAccount",
            "Description",
            "EndDate",
            "InvoiceAccrualRows",
            "InvoiceNumber",
            "RevenueAccount",
            "StartDate",
            "Total"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceAccrualController_doDelete",
    "method": "DELETE",
    "path": "/3/invoiceaccruals/{InvoiceNumber}",
    "summary": "Remove an invoice accrual",
    "description": "Delete an invoice accrual",
    "tags": [
      "fortnox_InvoiceAccruals"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "Invoice number of invoice accrual to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceAccrualController_doIndex",
    "method": "GET",
    "path": "/3/invoiceaccruals",
    "summary": "Retrieve a list of invoice accruals",
    "description": "The invoice accruals register can return a list of records or a single record. By specifying a InvoiceNumber in the URL, a single record will be returned. Not specifying a InvoiceNumber will return a list of records.",
    "tags": [
      "fortnox_InvoiceAccruals"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceAccrualController_doShow",
    "method": "GET",
    "path": "/3/invoiceaccruals/{InvoiceNumber}",
    "summary": "Retrieve a single invoice accrual",
    "description": "Retrieve an invoice accrual",
    "tags": [
      "fortnox_InvoiceAccruals"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "Invoice number of invoice accrual to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceAccrualController_doUpdate",
    "method": "PUT",
    "path": "/3/invoiceaccruals/{InvoiceNumber}",
    "summary": "Update an invoice accrual",
    "description": "Update an invoice accrual",
    "tags": [
      "fortnox_InvoiceAccruals"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "Invoice number of invoice accrual to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice accrual",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceAccrualSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "InvoiceAccrual": {
          "reference": "fortnox_Kf_InvoiceAccrualSinglePayloadItem",
          "type": "object",
          "required": [
            "AccrualAccount",
            "Description",
            "EndDate",
            "InvoiceAccrualRows",
            "InvoiceNumber",
            "RevenueAccount",
            "StartDate",
            "Total"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doCreate",
    "method": "POST",
    "path": "/3/invoices",
    "summary": "Create an invoice",
    "description": "An endpoint for creating an invoice. While it is possible to create an invoice without rows, we encourage you to add them if you can.\n Omitted values in the payload will be supplied by Predefined values which can be edited in the Fortnox account settings.\n Note that Predefined values will always be overwritten by values provided through the API.\n\n Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n <caption>Errors that can be raised by this endpoint.</caption>\n \t\t<tr>\n \t\t\t<th>Error Code</th>\n \t\t\t<th>HTTP Code</th>\n \t\t\t<th>Description</th>\n \t\t\t<th>Solution</th>\n \t\t</tr>\n \t\t<tr>\n \t\t\t<td>2004167</td>\n \t\t\t<td>400</td>\n \t\t\t<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>\n \t\t\t<td>Supply each row which has a custom VAT rate with an account.</td>\n \t\t</tr>\n </table>\n\n Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.\n This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice\n should be included in the report or not.\n A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be\n used when determining if an invoice should be included in the report or not, with one exception: if the invoice\n is created before 2021-12-01, and this property is false, the invoice will be excluded from the report.\n For invoices created 2021-12-01 and later, this property will have no effect.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doIndex",
    "method": "GET",
    "path": "/3/invoices",
    "summary": "Retrieve a list of invoices",
    "description": "Get invoices",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "tofinalpaydate",
        "required": false,
        "description": "Tofinalpaydate of invoices to list"
      },
      {
        "name": "fromfinalpaydate",
        "required": false,
        "description": "Fromfinalpaydate of invoices to list"
      },
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter invoices"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list on"
      },
      {
        "name": "costcenter",
        "required": false,
        "description": "Costcenter of invoices to list"
      },
      {
        "name": "customername",
        "required": false,
        "description": "Customername of invoices to list"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "Customernumber of invoices to list"
      },
      {
        "name": "label",
        "required": false,
        "description": "Label of invoices to list"
      },
      {
        "name": "documentnumber",
        "required": false,
        "description": "Documentnumber of invoices to list"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "Fromdate of invoices to list"
      },
      {
        "name": "todate",
        "required": false,
        "description": "Todate of invoices to list"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "Lastmodified of invoices to list"
      },
      {
        "name": "notcompleted",
        "required": false,
        "description": "Notcompleted of invoices to list"
      },
      {
        "name": "ocr",
        "required": false,
        "description": "Ocr of invoices to list"
      },
      {
        "name": "ourreference",
        "required": false,
        "description": "Ourreference of invoices to list"
      },
      {
        "name": "project",
        "required": false,
        "description": "Project of invoices to list"
      },
      {
        "name": "sent",
        "required": false,
        "description": "Sent of invoices to list"
      },
      {
        "name": "externalinvoicereference1",
        "required": false,
        "description": "Externalinvoicereference1 of invoices to list"
      },
      {
        "name": "externalinvoicereference2",
        "required": false,
        "description": "Externalinvoicereference2 of invoices to list"
      },
      {
        "name": "yourreference",
        "required": false,
        "description": "Yourreference of invoices to list"
      },
      {
        "name": "invoicetype",
        "required": false,
        "description": "Invoicetype of invoices to list"
      },
      {
        "name": "articlenumber",
        "required": false,
        "description": "Articlenumber of invoices to list"
      },
      {
        "name": "articledescription",
        "required": false,
        "description": "Articledescription of invoices to list"
      },
      {
        "name": "currency",
        "required": false,
        "description": "Currency of invoices to list"
      },
      {
        "name": "accountnumberfrom",
        "required": false,
        "description": "Accountnumberfrom of invoices to list"
      },
      {
        "name": "accountnumberto",
        "required": false,
        "description": "Accountnumberto of invoices to list"
      },
      {
        "name": "yourordernumber",
        "required": false,
        "description": "Yourordernumber of invoices to list"
      },
      {
        "name": "credit",
        "required": false,
        "description": "Credit of invoices to list"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doShow",
    "method": "GET",
    "path": "/3/invoices/{DocumentNumber}",
    "summary": "Retrieve a single invoice",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doShowAndEinvoice",
    "method": "GET",
    "path": "/3/invoices/{DocumentNumber}/einvoice",
    "summary": "Send an invoice as e-invoice",
    "description": "Should the invoice contain a delivery address (DeliveryAddress1, DeliveryAddress2, DeliveryZipCode or DeliveryCity), it is mandatory to also provide DeliveryCountry.\n         Should the invoice use the EU reverse charge tax type, it is mandatory to provide DeliveryDate.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doShowAndEmail",
    "method": "GET",
    "path": "/3/invoices/{DocumentNumber}/email",
    "summary": "Send an invoice as email",
    "description": "You can use the properties in the EmailInformation to customize the e-mail message on each invoice.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doShowAndEprint",
    "method": "GET",
    "path": "/3/invoices/{DocumentNumber}/eprint",
    "summary": "Send an invoice as e-print",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doShowAndPreview",
    "method": "GET",
    "path": "/3/invoices/{DocumentNumber}/preview",
    "summary": "Preview an invoice",
    "description": "The difference between this and the print-endpoint is that property Sent is not set to TRUE.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doShowAndPrint",
    "method": "GET",
    "path": "/3/invoices/{DocumentNumber}/print",
    "summary": "Print an invoice",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doShowAndPrintReminder",
    "method": "GET",
    "path": "/3/invoices/{DocumentNumber}/printreminder",
    "summary": "Print an invoice as reminder",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doUpdate",
    "method": "PUT",
    "path": "/3/invoices/{DocumentNumber}",
    "summary": "Update an invoice",
    "description": "Note that there are two approaches for updating the rows on an invoice.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the invoice needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the invoice then specify only RowId like { \"RowId\": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an invoice is updated.\n\n Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.\n This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice\n should be included in the report or not.\n A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be\n used when determining if an invoice should be included in the report or not, with one exception: if the invoice\n is created before 2021-12-01, and this property is false, the invoice will be excluded from the report.\n For invoices created 2021-12-01 and later, this property will have no effect.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doUpdateAndBookkeep",
    "method": "PUT",
    "path": "/3/invoices/{DocumentNumber}/bookkeep",
    "summary": "Bookkeep an invoice",
    "description": "Update an invoice",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doUpdateAndCancel",
    "method": "PUT",
    "path": "/3/invoices/{DocumentNumber}/cancel",
    "summary": "Cancel an invoice",
    "description": "Update an invoice",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doUpdateAndCredit",
    "method": "PUT",
    "path": "/3/invoices/{DocumentNumber}/credit",
    "summary": "Credit an invoice",
    "description": "The created credit invoice will be referenced in the property CreditInvoiceReference.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doUpdateAndExternalPrint",
    "method": "PUT",
    "path": "/3/invoices/{DocumentNumber}/externalprint",
    "summary": "Set an invoice as sent",
    "description": "Use this endpoint to set invoice as sent, without generating an invoice.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceController_doUpdateAndWarehouseReady",
    "method": "PUT",
    "path": "/3/invoices/{DocumentNumber}/warehouseready",
    "summary": "Set an invoice as done",
    "description": "Used for marking a document as ready in the warehouse module. DeliveryState needs to be set to &quot;delivery&quot;.",
    "tags": [
      "fortnox_Invoices"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doCreate",
    "method": "POST",
    "path": "/3/invoices-v2",
    "summary": "Create an invoice",
    "description": "An endpoint for creating an invoice. While it is possible to create an invoice without rows, we encourage you to add them if you can.\n Omitted values in the payload will be supplied by Predefined values which can be edited in the Fortnox account settings.\n Note that Predefined values will always be overwritten by values provided through the API.\n\n Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n <caption>Errors that can be raised by this endpoint.</caption>\n \t\t<tr>\n \t\t\t<th>Error Code</th>\n \t\t\t<th>HTTP Code</th>\n \t\t\t<th>Description</th>\n \t\t\t<th>Solution</th>\n \t\t</tr>\n \t\t<tr>\n \t\t\t<td>2004167</td>\n \t\t\t<td>400</td>\n \t\t\t<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>\n \t\t\t<td>Supply each row which has a custom VAT rate with an account.</td>\n \t\t</tr>\n </table>\n\n Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.\n This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice\n should be included in the report or not.\n A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be\n used when determining if an invoice should be included in the report or not, with one exception: if the invoice\n is created before 2021-12-01, and this property is false, the invoice will be excluded from the report.\n For invoices created 2021-12-01 and later, this property will have no effect.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doIndex",
    "method": "GET",
    "path": "/3/invoices-v2",
    "summary": "Retrieve a list of invoices",
    "description": "Get invoices",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "tofinalpaydate",
        "required": false,
        "description": "Tofinalpaydate of invoices to list"
      },
      {
        "name": "fromfinalpaydate",
        "required": false,
        "description": "Fromfinalpaydate of invoices to list"
      },
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter invoices"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list on"
      },
      {
        "name": "costcenter",
        "required": false,
        "description": "Costcenter of invoices to list"
      },
      {
        "name": "customername",
        "required": false,
        "description": "Customername of invoices to list"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "Customernumber of invoices to list"
      },
      {
        "name": "label",
        "required": false,
        "description": "Label of invoices to list"
      },
      {
        "name": "documentnumber",
        "required": false,
        "description": "Documentnumber of invoices to list"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "Fromdate of invoices to list"
      },
      {
        "name": "todate",
        "required": false,
        "description": "Todate of invoices to list"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "Lastmodified of invoices to list"
      },
      {
        "name": "notcompleted",
        "required": false,
        "description": "Notcompleted of invoices to list"
      },
      {
        "name": "ocr",
        "required": false,
        "description": "Ocr of invoices to list"
      },
      {
        "name": "ourreference",
        "required": false,
        "description": "Ourreference of invoices to list"
      },
      {
        "name": "project",
        "required": false,
        "description": "Project of invoices to list"
      },
      {
        "name": "sent",
        "required": false,
        "description": "Sent of invoices to list"
      },
      {
        "name": "externalinvoicereference1",
        "required": false,
        "description": "Externalinvoicereference1 of invoices to list"
      },
      {
        "name": "externalinvoicereference2",
        "required": false,
        "description": "Externalinvoicereference2 of invoices to list"
      },
      {
        "name": "yourreference",
        "required": false,
        "description": "Yourreference of invoices to list"
      },
      {
        "name": "invoicetype",
        "required": false,
        "description": "Invoicetype of invoices to list"
      },
      {
        "name": "articlenumber",
        "required": false,
        "description": "Articlenumber of invoices to list"
      },
      {
        "name": "articledescription",
        "required": false,
        "description": "Articledescription of invoices to list"
      },
      {
        "name": "currency",
        "required": false,
        "description": "Currency of invoices to list"
      },
      {
        "name": "accountnumberfrom",
        "required": false,
        "description": "Accountnumberfrom of invoices to list"
      },
      {
        "name": "accountnumberto",
        "required": false,
        "description": "Accountnumberto of invoices to list"
      },
      {
        "name": "yourordernumber",
        "required": false,
        "description": "Yourordernumber of invoices to list"
      },
      {
        "name": "credit",
        "required": false,
        "description": "Credit of invoices to list"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doShow",
    "method": "GET",
    "path": "/3/invoices-v2/{DocumentNumber}",
    "summary": "Retrieve a single invoice",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doShowAndEinvoice",
    "method": "GET",
    "path": "/3/invoices-v2/{DocumentNumber}/einvoice",
    "summary": "Send an invoice as e-invoice",
    "description": "Should the invoice contain a delivery address (DeliveryAddress1, DeliveryAddress2, DeliveryZipCode or DeliveryCity), it is mandatory to also provide DeliveryCountry.\n         Should the invoice use the EU reverse charge tax type, it is mandatory to provide DeliveryDate.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doShowAndEmail",
    "method": "GET",
    "path": "/3/invoices-v2/{DocumentNumber}/email",
    "summary": "Send an invoice as email",
    "description": "You can use the properties in the EmailInformation to customize the e-mail message on each invoice.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doShowAndEprint",
    "method": "GET",
    "path": "/3/invoices-v2/{DocumentNumber}/eprint",
    "summary": "Send an invoice as e-print",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doShowAndPreview",
    "method": "GET",
    "path": "/3/invoices-v2/{DocumentNumber}/preview",
    "summary": "Preview an invoice",
    "description": "The difference between this and the print-endpoint is that property Sent is not set to TRUE.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doShowAndPrint",
    "method": "GET",
    "path": "/3/invoices-v2/{DocumentNumber}/print",
    "summary": "Print an invoice",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doShowAndPrintReminder",
    "method": "GET",
    "path": "/3/invoices-v2/{DocumentNumber}/printreminder",
    "summary": "Print an invoice as reminder",
    "description": "Retrieve an invoice",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doUpdate",
    "method": "PUT",
    "path": "/3/invoices-v2/{DocumentNumber}",
    "summary": "Update an invoice",
    "description": "Note that there are two approaches for updating the rows on an invoice.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the invoice needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the invoice then specify only RowId like { \"RowId\": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an invoice is updated.\n\n Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.\n This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice\n should be included in the report or not.\n A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be\n used when determining if an invoice should be included in the report or not, with one exception: if the invoice\n is created before 2021-12-01, and this property is false, the invoice will be excluded from the report.\n For invoices created 2021-12-01 and later, this property will have no effect.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doUpdateAndBookkeep",
    "method": "PUT",
    "path": "/3/invoices-v2/{DocumentNumber}/bookkeep",
    "summary": "Bookkeep an invoice",
    "description": "Update an invoice",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doUpdateAndCancel",
    "method": "PUT",
    "path": "/3/invoices-v2/{DocumentNumber}/cancel",
    "summary": "Cancel an invoice",
    "description": "Update an invoice",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doUpdateAndCredit",
    "method": "PUT",
    "path": "/3/invoices-v2/{DocumentNumber}/credit",
    "summary": "Credit an invoice",
    "description": "The created credit invoice will be referenced in the property CreditInvoiceReference.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doUpdateAndExternalPrint",
    "method": "PUT",
    "path": "/3/invoices-v2/{DocumentNumber}/externalprint",
    "summary": "Set an invoice as sent",
    "description": "Use this endpoint to set invoice as sent, without generating an invoice.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoiceControllerV2_doUpdateAndWarehouseReady",
    "method": "PUT",
    "path": "/3/invoices-v2/{DocumentNumber}/warehouseready",
    "summary": "Set an invoice as done",
    "description": "Used for marking a document as ready in the warehouse module. DeliveryState needs to be set to &quot;delivery&quot;.",
    "tags": [
      "fortnox_InvoicesV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Invoice": {
          "reference": "fortnox_Kf_InvoiceV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoicePaymentController_doCreate",
    "method": "POST",
    "path": "/3/invoicepayments",
    "summary": "Create an invoice payment",
    "description": "Create an invoice payment",
    "tags": [
      "fortnox_InvoicePayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create invoice payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoicePaymentSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "InvoicePayment": {
          "reference": "fortnox_Kf_InvoicePaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "InvoiceNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoicePaymentController_doDelete",
    "method": "DELETE",
    "path": "/3/invoicepayments/{Number}",
    "summary": "Remove an invoice payment",
    "description": "Delete an invoice payment",
    "tags": [
      "fortnox_InvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoicePaymentController_doIndex",
    "method": "GET",
    "path": "/3/invoicepayments",
    "summary": "Retrieve a list of invoice payments",
    "description": "Get invoice payments",
    "tags": [
      "fortnox_InvoicePayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list on"
      },
      {
        "name": "invoicenumber",
        "required": false,
        "description": "filter by invoice number"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by last modified"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoicePaymentController_doShow",
    "method": "GET",
    "path": "/3/invoicepayments/{Number}",
    "summary": "Retrieve a single invoice payment",
    "description": "Retrieve an invoice payment",
    "tags": [
      "fortnox_InvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoicePaymentController_doUpdate",
    "method": "PUT",
    "path": "/3/invoicepayments/{Number}",
    "summary": "Update an invoice payment",
    "description": "Update an invoice payment",
    "tags": [
      "fortnox_InvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoicePaymentSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "InvoicePayment": {
          "reference": "fortnox_Kf_InvoicePaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "InvoiceNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "InvoicePaymentController_doUpdateAndBookkeep",
    "method": "PUT",
    "path": "/3/invoicepayments/{Number}/bookkeep",
    "summary": "Bookkeep an invoice payment",
    "description": "Update an invoice payment",
    "tags": [
      "fortnox_InvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update invoice payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_InvoicePaymentSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "InvoicePayment": {
          "reference": "fortnox_Kf_InvoicePaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "InvoiceNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ItemUrlConnectionController_doCreate",
    "method": "POST",
    "path": "/3/articleurlconnections",
    "summary": "Create an article url connection",
    "description": "Create an article url connection",
    "tags": [
      "fortnox_ArticleUrlConnection"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create article url connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ItemUrlConnectionSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "ArticleUrlConnection"
      ],
      "properties": {
        "ArticleUrlConnection": {
          "reference": "fortnox_ItemUrlConnectionSinglePayloadItem",
          "type": "object",
          "required": [
            "ArticleNumber",
            "URLConnection"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ItemUrlConnectionController_doDelete",
    "method": "DELETE",
    "path": "/3/articleurlconnections/{id}",
    "summary": "Remove an article url connection",
    "description": "Delete an article url connection",
    "tags": [
      "fortnox_ArticleUrlConnection"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the article url connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "ItemUrlConnectionController_doIndex",
    "method": "GET",
    "path": "/3/articleurlconnections",
    "summary": "Retrieve a list of article url connections",
    "description": "The article url connections register can return a list of records or a single record. By specifying an id in the URL, a single record will be returned. Not specifying an id will return a list of records.",
    "tags": [
      "fortnox_ArticleUrlConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "articlenumber",
        "required": false,
        "description": "identifies the article"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ItemUrlConnectionController_doShow",
    "method": "GET",
    "path": "/3/articleurlconnections/{id}",
    "summary": "Retrieve a single article url connection",
    "description": "Retrieve an article url connection",
    "tags": [
      "fortnox_ArticleUrlConnection"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "identifies the article url connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ItemUrlConnectionController_doUpdate",
    "method": "PUT",
    "path": "/3/articleurlconnections/{id}",
    "summary": "Update an article url connection",
    "description": "Update an article url connection",
    "tags": [
      "fortnox_ArticleUrlConnection"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Id of article url connection to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update article url connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ItemUrlConnectionSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "ArticleUrlConnection"
      ],
      "properties": {
        "ArticleUrlConnection": {
          "reference": "fortnox_ItemUrlConnectionSinglePayloadItem",
          "type": "object",
          "required": [
            "ArticleNumber",
            "URLConnection"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "list_2",
    "method": "GET",
    "path": "/api/time/registrations-v2",
    "summary": "Get time/absence registrations that match filter",
    "description": "<p>\n <b>Response property descriptions:</b><br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of the registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>userId</i></b> - The user ID who owns the registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>userName</i></b> - The name of the user who owns the registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedDate</i></b> - The date for which the registration is created.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedHours</i></b> - The time spent, or the time of absence.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>startTime</i></b> - The start of clock time.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>stopTime</i></b> - The end of clock time.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceText</i></b> - The text to be included in the invoice/order basis which would be used to create an invoice/order.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>note</i></b> - The note on the registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>chargeHours</i></b> - The time to be invoiced, or 0 for the absence, or locked for non-invoiceable.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>childId</i></b> - The child ID related to the absence registration of parental leave (FPE), which comes from Payroll application.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>nonInvoiceable</i></b> - If the registration would be ignored for charging or not.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentId</i></b> - The document ID which includes the registration and is created in Invoicing application.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentType</i></b> - The document type which could be \"invoice\" or \"order\".<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitCost</i></b> - The unit cost from the registration owner who takes the work.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitPrice</i></b> - The unit price for the service on the registration, which comes in priority from \"invoice/order basis\", \"price group\" or \"service\".\n <p>",
    "tags": [
      "time-reporting_Registrations"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "fromDate",
        "required": false,
        "description": "The start date of the search span, the max of which should be 1 year to the end date (\"toDate\").\n Example: 2022-11-01"
      },
      {
        "name": "toDate",
        "required": false,
        "description": "The end date of the search span, the max of which should be 1 year back to the start date (\"fromDate\").\n Example: 2022-11-30"
      },
      {
        "name": "customerIds",
        "required": false,
        "description": "An array of customer IDs which are being used in database and in one-to-one relation with customer numbers.\n Example: 100,101,102",
        "style": "form",
        "explode": true
      },
      {
        "name": "projectIds",
        "required": false,
        "description": "An array of project IDs.\n Example: p1,p2,p3",
        "style": "form",
        "explode": true
      },
      {
        "name": "serviceIds",
        "required": false,
        "description": "An array of service IDs.\n Example: s1,s2,s3",
        "style": "form",
        "explode": true
      },
      {
        "name": "costCenterIds",
        "required": false,
        "description": "An array of cost center IDs.\n Example: cc1,cc2,cc3",
        "style": "form",
        "explode": true
      },
      {
        "name": "regCodes",
        "required": false,
        "description": "An array of registration codes.\n Example: TID,SEM,FPE",
        "style": "form",
        "explode": true
      },
      {
        "name": "userIds",
        "required": false,
        "description": "An array of user IDs that time/absence registrations belong to.\n Example: 1,2,3",
        "style": "form",
        "explode": true
      },
      {
        "name": "includeRegistrationsWithoutProject",
        "required": false,
        "description": "If the time/absence registration without project is included, or not."
      },
      {
        "name": "invoiced",
        "required": false,
        "description": "If a document is created with the time/absence registration, or not."
      },
      {
        "name": "inInvoiceBasis",
        "required": false,
        "description": "If the time/absence registration is locked on an invoice basis, or not."
      },
      {
        "name": "internalTime",
        "required": false,
        "description": "If the time/absence registration is internal, which is registered on an internal customer, or not."
      },
      {
        "name": "nonInvoiceable",
        "required": false,
        "description": "If the time/absence registration has been moved to non-invoiceable, or not."
      },
      {
        "name": "includeNonInvoiceableChargeHours",
        "required": false,
        "description": "If the price of the non-invoiceable time/absence registration is included, or not."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "list_8",
    "method": "GET",
    "path": "/api/time/articles-v1",
    "summary": "Get full article registrations that match filter",
    "description": "<p>\n <b>Response property descriptions:</b><br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of a basic common combination of article registrations. (The basic common combination means \"user/purchase date/customer/project/cost center\", which leads to a dialog with several article registrations.)<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>purchaseDate</i></b> - The date on which the article is purchased or registered for charging.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>ownerId</i></b> - The user ID who creates the basic common combination.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>ownerName</i></b> - The name of the user who creates the basic common combination.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>version</i></b> - The version of the basic common combination (article dialog) being updated, which is used for handling the concurrency issue.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>registrationType</i></b> - It is always \"ARTICLE\" for article list endpoint.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;    <b>Sub-Class - ArticleRegistration:</b><br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>id</i></b> - The unique id of an article registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>registrationId</i></b> - The id of the basic common combination.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>orderIndex</i></b> - the order index for the article registration in regard of the common combination.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>ownerId</i></b> - The user ID who owns the article registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>ownerName</i></b> - The name of the user who owns the article registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>totalQuantity</i></b> - The quantity of the article.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitPrice</i></b> - The unit price connected to the article registration, which might be locked on an invoice/order basis or for non-invoiceable.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitCost</i></b> - The unit cost connected to the article registration, which might be locked on an invoice/order basis.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>nonInvoiceable</i></b> - If the article registration would be ignored for charging or not.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>note</i></b> - The note on the article registration.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentId</i></b> - The document ID which includes the article registration and is created in Invoicing application.<br/>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentType</i></b> - The document type which could be \"invoice\" or \"order\".\n </p>",
    "tags": [
      "time-reporting_Articles"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "fromDate",
        "required": false,
        "description": "The start date of the search span, the max of which should be 1 year to the end date (\"toDate\").\n Example: 2022-11-01"
      },
      {
        "name": "toDate",
        "required": false,
        "description": "The end date of the search span, the max of which should be 1 year back to the start date (\"fromDate\").\n Example: 2022-11-30"
      },
      {
        "name": "customerIds",
        "required": false,
        "description": "An array of customer IDs which are being used in database and in one-to-one relation with customer numbers.\n Example: 100,101,102",
        "style": "form",
        "explode": true
      },
      {
        "name": "projectIds",
        "required": false,
        "description": "An array of project IDs.\n Example: p1,p2,p3",
        "style": "form",
        "explode": true
      },
      {
        "name": "includeRegistrationsWithoutProject",
        "required": false,
        "description": "If the article registration without project is included, or not."
      },
      {
        "name": "itemIds",
        "required": false,
        "description": "An array of article IDs.\n Example: s1,s2,s3",
        "style": "form",
        "explode": true
      },
      {
        "name": "costCenterIds",
        "required": false,
        "description": "An array of cost center IDs.\n Example: cc1,cc2,cc3",
        "style": "form",
        "explode": true
      },
      {
        "name": "ownerIds",
        "required": false,
        "description": "An array of user ids who own the article registrations.\n Example: 1,2,3",
        "style": "form",
        "explode": true
      },
      {
        "name": "invoiced",
        "required": false,
        "description": "If a document is created with the article registration, or not."
      },
      {
        "name": "inInvoiceBasis",
        "required": false,
        "description": "If the article registration is locked on an invoice basis, or not."
      },
      {
        "name": "internalArticles",
        "required": false,
        "description": "If the article registration is internal, which is registered on an internal customer, or not."
      },
      {
        "name": "nonInvoiceable",
        "required": false,
        "description": "If the article registration has been moved to non-invoiceable, or not."
      },
      {
        "name": "includeNonInvoiceablePrice",
        "required": false,
        "description": "If the price of the non-invoiceable article registration is included, or not."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "listInvoiceRequests",
    "method": "GET",
    "path": "/api/recurring-billing/recurrings-invoice-requests-v1",
    "summary": "List all invoice requests",
    "description": "Returns invoice requests (the administrative records for invoice generation) for the supplied recurring IDs, optionally narrowed by status.",
    "tags": [
      "Recurring-API_InvoiceRequests"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "status",
        "required": false,
        "description": "Filter by invoice request status. Multiple values must be comma-separated (e.g. `status=PENDING,FAILED`).",
        "style": "form",
        "explode": false
      },
      {
        "name": "recurring-ids",
        "required": true,
        "description": "Recurring IDs to return invoice requests for. At least one and at most 100 IDs, comma-separated.",
        "style": "form",
        "explode": false
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "listRatings",
    "method": "GET",
    "path": "/api/integration-developer/ratings-v1",
    "summary": "List rating and reviews for integrations that you own",
    "description": "**Required OAuth2 scope:** `developerapi`\n\n<p>\n Use this to monitor the feedback tenants have left on your integrations and to find reviews that still\n need a response via addResponseToRating.",
    "tags": [
      "integration-developer_Integration Ratings"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "integrationId",
        "required": false,
        "description": ""
      },
      {
        "name": "includeOnlyUnrespondedRatings",
        "required": false,
        "description": ""
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "listRecurringDeviations",
    "method": "GET",
    "path": "/api/recurring-billing/recurrings-v1/{recurring-id}/deviations",
    "summary": "List all deviations for a recurring",
    "description": "Returns the deviations defined for a recurring. A deviation overrides the normal invoicing for one or more occurrences of the recurring — either changing the rows (`ROWS`) or skipping the invoice entirely (`SKIP`).",
    "tags": [
      "Recurring-API_RecurringDeviations"
    ],
    "pathParameters": [
      {
        "name": "recurring-id",
        "required": true,
        "description": "The unique identifier of the recurring contract."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "listRecurringLabels",
    "method": "GET",
    "path": "/api/recurring-billing/recurrings-v1/{recurring-id}/labels",
    "summary": "List all labels for a recurring",
    "description": "Returns the labels attached to a recurring contract. Labels are key-value pairs (e.g. \"Avtalsnr\" / contract number) that can be used to categorize and filter recurrings. This endpoint is read-only.",
    "tags": [
      "Recurring-API_RecurringLabels"
    ],
    "pathParameters": [
      {
        "name": "recurring-id",
        "required": true,
        "description": "The unique identifier of the recurring contract."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "listRecurrings",
    "method": "GET",
    "path": "/api/recurring-billing/recurrings-v1",
    "summary": "List all recurring contracts",
    "description": "Returns a paginated list of recurring contracts for the authenticated tenant. The result can be narrowed with the `customer-numbers`, `statuses`, `invoice-handlings`, `cost-center-ids`, `project-ids`, `order-number`, `error-status` and `label-name`/`label-value` filters, ordered with `sortby` and `order`, and paged with `offset` and `limit` (1-100, default 100). Pagination metadata is returned in the `X-PAGINATION` and `X-LAST-RECORD` response headers.",
    "tags": [
      "Recurring-API_Recurrings"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "customer-numbers",
        "required": false,
        "description": "Filter by customer numbers. Multiple values must be comma-separated (e.g. `customer-numbers=1,2,3`).",
        "style": "form",
        "explode": false
      },
      {
        "name": "statuses",
        "required": false,
        "description": "Filter by recurring statuses. Multiple values must be comma-separated (e.g. `statuses=ACTIVE,DRAFT`).",
        "style": "form",
        "explode": false
      },
      {
        "name": "invoice-handlings",
        "required": false,
        "description": "Filter by invoice handling types. Multiple values must be comma-separated (e.g. `invoice-handlings=MANUAL,AUTOMATIC`).",
        "style": "form",
        "explode": false
      },
      {
        "name": "cost-center-ids",
        "required": false,
        "description": "Filter by cost center ids. Multiple values must be comma-separated (e.g. `cost-center-ids=CC1,CC2`).",
        "style": "form",
        "explode": false
      },
      {
        "name": "project-ids",
        "required": false,
        "description": "Filter by exact project IDs on the recurring contract header, not on its rows. Multiple values must be comma-separated (e.g. `project-ids=P1,P2`) and match any selected ID. An omitted or empty selection disables this filter. Unknown IDs produce no matches. Contracts without a header project do not match a non-empty selection. Results are restricted to the authenticated tenant and combined with other filters using AND.",
        "style": "form",
        "explode": false
      },
      {
        "name": "order-number",
        "required": false,
        "description": "Filter by a case-insensitive partial match on the customer purchase order number. Percent signs, underscores and exclamation marks are matched literally. An omitted, empty or blank value disables this filter. Contracts without an order number do not match a non-blank value. Results are restricted to the authenticated tenant and combined with other filters using AND."
      },
      {
        "name": "error-status",
        "required": false,
        "description": "Filter recurrings by error status"
      },
      {
        "name": "offset",
        "required": false,
        "description": "Number of items to skip"
      },
      {
        "name": "limit",
        "required": false,
        "description": "Maximum number of items to return"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "Field to sort by"
      },
      {
        "name": "order",
        "required": false,
        "description": "Sort order direction"
      },
      {
        "name": "label-name",
        "required": false,
        "description": "Filter recurrings by label name. Must be provided together with `label-value`."
      },
      {
        "name": "label-value",
        "required": false,
        "description": "Filter recurrings by label value. Must be provided together with `label-name`. Multiple values must be comma-separated (e.g. `label-value=123,456`).",
        "style": "form",
        "explode": false
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "listWebhooks",
    "method": "GET",
    "path": "/api/bank-process-webhooks/v1",
    "summary": "List webhooks",
    "description": "List previously created webhooks",
    "tags": [
      "Company-Order-Bank-Process-Webhook-API_BankProcessWebhook"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "LockedPeriodSettingsController_doShow",
    "method": "GET",
    "path": "/3/settings/lockedperiod",
    "summary": "Retrieve the locked period",
    "description": "If no date is returned, no period is locked.",
    "tags": [
      "fortnox_LockedPeriod"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "MeController_doIndex",
    "method": "GET",
    "path": "/3/me",
    "summary": "Retrieve user information\n Use this endpoint to retrieve user information related to the used access token",
    "description": "Retrieve a me",
    "tags": [
      "fortnox_Me"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ModeOfPaymentController_doCreate",
    "method": "POST",
    "path": "/3/modesofpayments",
    "summary": "Create a mode of payment",
    "description": "Create a mode of payment",
    "tags": [
      "fortnox_ModesOfPayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create mode of payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ModeOfPaymentSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "ModeOfPayment"
      ],
      "properties": {
        "ModeOfPayment": {
          "reference": "fortnox_ModeOfPaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "AccountNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ModeOfPaymentController_doDelete",
    "method": "DELETE",
    "path": "/3/modesofpayments/{Code}",
    "summary": "Remove a mode of payment",
    "description": "Delete a mode of payment",
    "tags": [
      "fortnox_ModesOfPayments"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of mode of payment to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ModeOfPaymentController_doIndex",
    "method": "GET",
    "path": "/3/modesofpayments",
    "summary": "Retrieve a list of modes of payments",
    "description": "The modes of payments register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_ModesOfPayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ModeOfPaymentController_doShow",
    "method": "GET",
    "path": "/3/modesofpayments/{Code}",
    "summary": "Retrieve a single mode of payment",
    "description": "Retrieve a mode of payment",
    "tags": [
      "fortnox_ModesOfPayments"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of mode of payment to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ModeOfPaymentController_doUpdate",
    "method": "PUT",
    "path": "/3/modesofpayments/{Code}",
    "summary": "Update a mode of payment",
    "description": "Update a mode of payment",
    "tags": [
      "fortnox_ModesOfPayments"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of mode of payment to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update mode of payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_ModeOfPaymentSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "ModeOfPayment"
      ],
      "properties": {
        "ModeOfPayment": {
          "reference": "fortnox_ModeOfPaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "AccountNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "NoxInvoiceController_doCreate",
    "method": "POST",
    "path": "/3/noxfinansinvoices",
    "summary": "Send an invoice with Fortnox Finans",
    "description": "<p>\n When sending an invoice with Fortnox Finans you will get the invoice status returned if everything succeeded,\n if there were any problems, an error will be returned.\n <p>\n Please note that it can take 1 min to several hours before you will get back status, OCR number and link to\n PDF document, meanwhile the invoice will have status UNKNOWN or NOT_AUTHORIZED.\n <p>\n Fortnox Finans is currently only accepting invoices in SEK\n <p>\n <i>Parameters in the body:</i>\n <ul>\n     <li><b>InvoiceNumber</b>: the invoice number for the invoice which should be sent with Fortnox Finans</li>\n     <li><b>SendMethod</b>: how to send the invoice; EMAIL, LETTER, EINVOICE or NONE</li>\n     <li><b>Service</b>: which service to use; LEDGERBASE or REMINDER</li>\n </ul>\n <p>",
    "tags": [
      "fortnox_FinanceInvoices"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create nox finans invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_NoxInvoiceCreatePayload_Wrap",
      "type": "object",
      "properties": {
        "NoxFinansInvoice": {
          "reference": "fortnox_Kf_NoxInvoiceCreatePayload",
          "type": "object",
          "required": [
            "InvoiceNumber",
            "SendMethod",
            "Service"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "NoxInvoiceController_doShow",
    "method": "GET",
    "path": "/3/noxfinansinvoices/{InvoiceNumber}",
    "summary": "Retrieve a single invoice payment",
    "description": "<p>\n Retrieves the status and balance of an invoice sent to Fortnox Finans.\n You need to supply the invoice number in Fortox to retrieve the invoice.\n <p>\n <b>Note that</b> invoices sent with the old &quot;Noxbox&quot; platform will not have the &quot;ServiceName&quot;\n property in the response. This new property is added to the response if the invoice is\n sent with the new finance service.\n <p>\n Response explanation for <b>Service</b> and <b>ServiceName</b>\n <p>\n <b>Service:</b>\n <ul>\n     <li><b>LEDGERBASE</b>: if the invoice is sent by using the old &quot;Noxbox&quot; platform, or the new finance service with the subtypes &quot;Service Full&quot; or &quot;Service Light&quot;. These services are explained above in the &quot;Fortnox Finans services&quot; section</li>\n     <li><b>REMINDER</b>: If the invoice is sent by the new finance service, with the service Reminder Service</li>\n </ul>\n <p>\n <b>ServiceName</b> (only provided for <u>new finance service</u> invoices):\n <ul>\n     <li><b>SERVICE_FULL</b>: Ledgerbase service <u>with</u> automatic reminders is used</li>\n     <li><b>SERVICE_LIGHT</b>: Ledgerbase service <u>without</u> automatic reminders is used.</li>\n     <li><b>REMINDER_SERVICE</b>: Reminder service is used</li>\n </ul>",
    "tags": [
      "fortnox_FinanceInvoices"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "The Fortnox invoice number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "NoxInvoiceController_doUpdateAndPause",
    "method": "PUT",
    "path": "/3/noxfinansinvoices/{InvoiceNumber}/pause",
    "summary": "Action Pause",
    "description": "<p>\n Pauses an invoice for up to 60 days. Pause means that Fortnox Finans reminder process will stop for the invoice. All invoices which have the status OPEN can be paused.\n <p>\n <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform\n <p>\n <i>Parameters in the body:</i>\n <ul>\n     <li><b>PausedUntilDate</b>: the invoice will be paused to and including this date.</li>\n </ul>\n <p>",
    "tags": [
      "fortnox_FinanceInvoices"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "The Fortnox invoice number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update nox finans invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_NoxInvoiceUpdateAndPausePayload_Wrap",
      "type": "object",
      "properties": {
        "NoxFinansInvoice": {
          "reference": "fortnox_Kf_NoxInvoiceUpdateAndPausePayload",
          "type": "object",
          "required": [
            "PausedUntilDate"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "NoxInvoiceController_doUpdateAndRepostPayment",
    "method": "PUT",
    "path": "/3/noxfinansinvoices/{InvoiceNumber}/report-payment",
    "summary": "Action Report Payment",
    "description": "<p>\n If a customer has paid some or all of the capital on an invoice directly to the client, this can be reported\n for bookkeeping purposes and reported to Fortnox Finans to actually deduct the paid amount from the invoice.\n <p>\n <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform\n <p>\n <i>Parameters in the body:</i>\n <ul>\n     <li><b>PaymentAmount</b>: a decimal field with the amount to report.</li>\n     <li><b>PaymentMethodCode</b>: a string with the method code (e.g. BG, PG or other). Could be omitted if BookkeepPaymentInFortnox is false.</li>\n     <li><b>PaymentMethodAccount</b>: an integer with the account number to bookkeep the payment on (e.g. 1920 or other). Could be omitted if BookkeepPaymentInFortnox is false.</li>\n     <li><b>ClientTakesFees</b>: a boolean indicating if the client should take the customer fees or not.</li>\n     <li><b>BookkeepPaymentInFortnox</b>: a boolean indicating if the payment should be bookkept in Fortnox or not. Usually the payment should be bookkept.</li>\n     <li><b>ReportToFinance</b>: a boolean indicating if the payment should be reported to Fortnox Finans or not. Usually the payment should be reported.</li>\n </ul>\n <p>",
    "tags": [
      "fortnox_FinanceInvoices"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "The Fortnox invoice number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update nox finans invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_NoxInvoiceUpdateAndRepostPaymentPayload_Wrap",
      "type": "object",
      "properties": {
        "NoxFinansInvoice": {
          "reference": "fortnox_Kf_NoxInvoiceUpdateAndRepostPaymentPayload",
          "type": "object",
          "required": [
            "BookkeepPaymentInFortnox",
            "ClientTakesFees",
            "PaymentAmount",
            "PaymentMethodAccount",
            "PaymentMethodCode",
            "ReportToFinance"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "NoxInvoiceController_doUpdateAndStop",
    "method": "PUT",
    "path": "/3/noxfinansinvoices/{InvoiceNumber}/stop",
    "summary": "Action Stop",
    "description": "<p>\n Removes the invoice from Fortnox Finans process. The invoice can still be handled manually, but no further automatic process will be applied\n <p>\n <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform",
    "tags": [
      "fortnox_FinanceInvoices"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "The Fortnox invoice number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update nox finans invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_NoxInvoiceUpdateAndStopPayload_Wrap",
      "type": "object",
      "properties": {
        "NoxFinansInvoice": {
          "reference": "fortnox_Kf_NoxInvoiceUpdateAndStopPayload",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "NoxInvoiceController_doUpdateAndTakeFees",
    "method": "PUT",
    "path": "/3/noxfinansinvoices/{InvoiceNumber}/take-fees",
    "summary": "Action Take Fees",
    "description": "<p>\n If fees have been added to an invoice, e.g. reminder fees, the client can choose to pay those fees instead of letting the customer pay.\n <p>\n <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform",
    "tags": [
      "fortnox_FinanceInvoices"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "The Fortnox invoice number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update nox finans invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_NoxInvoiceUpdateAndTakeFeesPayload_Wrap",
      "type": "object",
      "properties": {
        "NoxFinansInvoice": {
          "reference": "fortnox_Kf_NoxInvoiceUpdateAndTakeFeesPayload",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "NoxInvoiceController_doUpdateAndUnpause",
    "method": "PUT",
    "path": "/3/noxfinansinvoices/{InvoiceNumber}/unpause",
    "summary": "Action Unpause",
    "description": "<p>\n Unpauses a paused invoice. If the invoice is manually paused, then this action will remove the pause status immediately. Invoices which are paused by the system cannot be unpaused.\n <p>\n <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform",
    "tags": [
      "fortnox_FinanceInvoices"
    ],
    "pathParameters": [
      {
        "name": "InvoiceNumber",
        "required": true,
        "description": "The Fortnox invoice number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update nox finans invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_NoxInvoiceUpdateAndUnpausePayload_Wrap",
      "type": "object",
      "properties": {
        "NoxFinansInvoice": {
          "reference": "fortnox_Kf_NoxInvoiceUpdateAndUnpausePayload",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doCreate",
    "method": "POST",
    "path": "/3/offers",
    "summary": "Create an offer",
    "description": "An endpoint for creating an offer.\n\n Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n <caption>Errors that can be raised by this endpoint.</caption>\n \t\t<tr>\n \t\t\t<th>Error Code</th>\n \t\t\t<th>HTTP Code</th>\n \t\t\t<th>Description</th>\n \t\t\t<th>Solution</th>\n \t\t</tr>\n \t\t<tr>\n \t\t\t<td>2004167</td>\n \t\t\t<td>400</td>\n \t\t\t<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>\n \t\t\t<td>Supply each row which has a custom VAT rate with an account.</td>\n \t\t</tr>\n </table>",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doIndex",
    "method": "GET",
    "path": "/3/offers",
    "summary": "Retrieve a list of offers",
    "description": "Get offers",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "todate",
        "required": false,
        "description": "filter by to date"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter by from date"
      },
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter offers"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "sort returned list of offers"
      },
      {
        "name": "customername",
        "required": false,
        "description": "filter by customer name"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "filter by customer number"
      },
      {
        "name": "documentnumber",
        "required": false,
        "description": "filter by document number"
      },
      {
        "name": "costcenter",
        "required": false,
        "description": "filter by cost center"
      },
      {
        "name": "label",
        "required": false,
        "description": "filter by label"
      },
      {
        "name": "project",
        "required": false,
        "description": "filter by project"
      },
      {
        "name": "sent",
        "required": false,
        "description": "filter by sent"
      },
      {
        "name": "notcompleted",
        "required": false,
        "description": "filter by not completed"
      },
      {
        "name": "ourreference",
        "required": false,
        "description": "filter by our reference"
      },
      {
        "name": "yourreference",
        "required": false,
        "description": "filter by your reference"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by last modified"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doShow",
    "method": "GET",
    "path": "/3/offers/{DocumentNumber}",
    "summary": "Retrieve a single offer",
    "description": "Retrieve an offer",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doShowAndEmail",
    "method": "GET",
    "path": "/3/offers/{DocumentNumber}/email",
    "summary": "Send given offer as email",
    "description": "You can use the properties in the EmailInformation to customize the e-mail message on each offer.",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doShowAndPreview",
    "method": "GET",
    "path": "/3/offers/{DocumentNumber}/preview",
    "summary": "Preview given offer",
    "description": "The difference between this and the print-endpoint is that property Sent is not set to TRUE.",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doShowAndPrint",
    "method": "GET",
    "path": "/3/offers/{DocumentNumber}/print",
    "summary": "Print given offer",
    "description": "Retrieve an offer",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doUpdate",
    "method": "PUT",
    "path": "/3/offers/{DocumentNumber}",
    "summary": "Update an offer",
    "description": "Note that there are two approaches for updating the rows on an offer.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the offer needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the offer then specify only RowId like { \"RowId\": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an offer is updated.",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doUpdateAndCancel",
    "method": "PUT",
    "path": "/3/offers/{DocumentNumber}/cancel",
    "summary": "Cancels given offer",
    "description": "Update an offer",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doUpdateAndCreateInvoice",
    "method": "PUT",
    "path": "/3/offers/{DocumentNumber}/createinvoice",
    "summary": "Create invoice out of given offer",
    "description": "Update an offer",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doUpdateAndCreateOrder",
    "method": "PUT",
    "path": "/3/offers/{DocumentNumber}/createorder",
    "summary": "Create order out of given offer",
    "description": "Update an offer",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferController_doUpdateAndExternalPrint",
    "method": "PUT",
    "path": "/3/offers/{DocumentNumber}/externalprint",
    "summary": "Set given offer as sent",
    "description": "Use this endpoint to set offer as sent, without generating an offer.",
    "tags": [
      "fortnox_Offers"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doCreate",
    "method": "POST",
    "path": "/3/offers-v2",
    "summary": "Create an offer",
    "description": "An endpoint for creating an offer.\n\n Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n <caption>Errors that can be raised by this endpoint.</caption>\n \t\t<tr>\n \t\t\t<th>Error Code</th>\n \t\t\t<th>HTTP Code</th>\n \t\t\t<th>Description</th>\n \t\t\t<th>Solution</th>\n \t\t</tr>\n \t\t<tr>\n \t\t\t<td>2004167</td>\n \t\t\t<td>400</td>\n \t\t\t<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>\n \t\t\t<td>Supply each row which has a custom VAT rate with an account.</td>\n \t\t</tr>\n </table>",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doIndex",
    "method": "GET",
    "path": "/3/offers-v2",
    "summary": "Retrieve a list of offers",
    "description": "Get offers",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "todate",
        "required": false,
        "description": "filter by to date"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter by from date"
      },
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter offers"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "sort returned list of offers"
      },
      {
        "name": "customername",
        "required": false,
        "description": "filter by customer name"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "filter by customer number"
      },
      {
        "name": "documentnumber",
        "required": false,
        "description": "filter by document number"
      },
      {
        "name": "costcenter",
        "required": false,
        "description": "filter by cost center"
      },
      {
        "name": "label",
        "required": false,
        "description": "filter by label"
      },
      {
        "name": "project",
        "required": false,
        "description": "filter by project"
      },
      {
        "name": "sent",
        "required": false,
        "description": "filter by sent"
      },
      {
        "name": "notcompleted",
        "required": false,
        "description": "filter by not completed"
      },
      {
        "name": "ourreference",
        "required": false,
        "description": "filter by our reference"
      },
      {
        "name": "yourreference",
        "required": false,
        "description": "filter by your reference"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by last modified"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doShow",
    "method": "GET",
    "path": "/3/offers-v2/{DocumentNumber}",
    "summary": "Retrieve a single offer",
    "description": "Retrieve an offer",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doShowAndEmail",
    "method": "GET",
    "path": "/3/offers-v2/{DocumentNumber}/email",
    "summary": "Send given offer as email",
    "description": "You can use the properties in the EmailInformation to customize the e-mail message on each offer.",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doShowAndPreview",
    "method": "GET",
    "path": "/3/offers-v2/{DocumentNumber}/preview",
    "summary": "Preview given offer",
    "description": "The difference between this and the print-endpoint is that property Sent is not set to TRUE.",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doShowAndPrint",
    "method": "GET",
    "path": "/3/offers-v2/{DocumentNumber}/print",
    "summary": "Print given offer",
    "description": "Retrieve an offer",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doUpdate",
    "method": "PUT",
    "path": "/3/offers-v2/{DocumentNumber}",
    "summary": "Update an offer",
    "description": "Note that there are two approaches for updating the rows on an offer.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the offer needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the offer then specify only RowId like { \"RowId\": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an offer is updated.",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doUpdateAndCancel",
    "method": "PUT",
    "path": "/3/offers-v2/{DocumentNumber}/cancel",
    "summary": "Cancels given offer",
    "description": "Update an offer",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doUpdateAndCreateInvoice",
    "method": "PUT",
    "path": "/3/offers-v2/{DocumentNumber}/createinvoice",
    "summary": "Create invoice out of given offer",
    "description": "Update an offer",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doUpdateAndCreateOrder",
    "method": "PUT",
    "path": "/3/offers-v2/{DocumentNumber}/createorder",
    "summary": "Create order out of given offer",
    "description": "Update an offer",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OfferControllerV2_doUpdateAndExternalPrint",
    "method": "PUT",
    "path": "/3/offers-v2/{DocumentNumber}/externalprint",
    "summary": "Set given offer as sent",
    "description": "Use this endpoint to set offer as sent, without generating an offer.",
    "tags": [
      "fortnox_OffersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update offer",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Offer_OfferV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Offer": {
          "reference": "fortnox_Offer_OfferV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doCreate",
    "method": "POST",
    "path": "/3/orders",
    "summary": "Create a new order",
    "description": "An endpoint for creating an order.\n\n Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n <caption>Errors that can be raised by this endpoint.</caption>\n \t\t<tr>\n \t\t\t<th>Error Code</th>\n \t\t\t<th>HTTP Code</th>\n \t\t\t<th>Description</th>\n \t\t\t<th>Solution</th>\n \t\t</tr>\n \t\t<tr>\n \t\t\t<td>2004167</td>\n \t\t\t<td>400</td>\n \t\t\t<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>\n \t\t\t<td>Supply each row which has a custom VAT rate with an account.</td>\n \t\t</tr>\n </table>",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doIndex",
    "method": "GET",
    "path": "/3/orders",
    "summary": "Retrieve a list of orders",
    "description": "Get orders",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "todate",
        "required": false,
        "description": "filter by to date"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter by from date"
      },
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter orders"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list"
      },
      {
        "name": "customername",
        "required": false,
        "description": "filter by customer name"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "filter by customer number"
      },
      {
        "name": "label",
        "required": false,
        "description": "filter by label"
      },
      {
        "name": "documentnumber",
        "required": false,
        "description": "filter by document number"
      },
      {
        "name": "externalinvoicereference1",
        "required": false,
        "description": "filter by external invoice reference 1"
      },
      {
        "name": "externalinvoicereference2",
        "required": false,
        "description": "filter by external invoice reference 2"
      },
      {
        "name": "costcenter",
        "required": false,
        "description": "filter by cost center"
      },
      {
        "name": "project",
        "required": false,
        "description": "filter by project"
      },
      {
        "name": "sent",
        "required": false,
        "description": "filter by sent"
      },
      {
        "name": "notcompleted",
        "required": false,
        "description": "filter by not completed"
      },
      {
        "name": "ourreference",
        "required": false,
        "description": "filter by ourreference"
      },
      {
        "name": "yourreference",
        "required": false,
        "description": "filter by your reference"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by lastmodified"
      },
      {
        "name": "ordertype",
        "required": false,
        "description": "filter by order type"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doShow",
    "method": "GET",
    "path": "/3/orders/{DocumentNumber}",
    "summary": "Retrieve a single order",
    "description": "Retrieve an order",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doShowAndEmail",
    "method": "GET",
    "path": "/3/orders/{DocumentNumber}/email",
    "summary": "Send given order as email",
    "description": "You can use the properties in the EmailInformation to customize the e-mail message on each order.",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doShowAndPreview",
    "method": "GET",
    "path": "/3/orders/{DocumentNumber}/preview",
    "summary": "Preview given offer",
    "description": "The difference between this and the print-endpoint is that property Sent is not set to TRUE.",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doShowAndPrint",
    "method": "GET",
    "path": "/3/orders/{DocumentNumber}/print",
    "summary": "Print given order",
    "description": "Retrieve an order",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doUpdate",
    "method": "PUT",
    "path": "/3/orders/{DocumentNumber}",
    "summary": "Update an order",
    "description": "Note that there are two approaches for updating the rows on an order.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the order needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the order then specify only RowId like { \"RowId\": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an order is updated.",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doUpdateAndCancel",
    "method": "PUT",
    "path": "/3/orders/{DocumentNumber}/cancel",
    "summary": "Cancels given order",
    "description": "Update an order",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doUpdateAndCreateOrder",
    "method": "PUT",
    "path": "/3/orders/{DocumentNumber}/createinvoice",
    "summary": "Create invoice out of given order",
    "description": "Update an order",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderController_doUpdateAndExternalPrint",
    "method": "PUT",
    "path": "/3/orders/{DocumentNumber}/externalprint",
    "summary": "Set given order as sent",
    "description": "Use this endpoint to set order as sent, without generating an order.",
    "tags": [
      "fortnox_Orders"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderSinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doCreate",
    "method": "POST",
    "path": "/3/orders-v2",
    "summary": "Create a new order",
    "description": "An endpoint for creating an order.\n\n Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n <caption>Errors that can be raised by this endpoint.</caption>\n \t\t<tr>\n \t\t\t<th>Error Code</th>\n \t\t\t<th>HTTP Code</th>\n \t\t\t<th>Description</th>\n \t\t\t<th>Solution</th>\n \t\t</tr>\n \t\t<tr>\n \t\t\t<td>2004167</td>\n \t\t\t<td>400</td>\n \t\t\t<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>\n \t\t\t<td>Supply each row which has a custom VAT rate with an account.</td>\n \t\t</tr>\n </table>",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doIndex",
    "method": "GET",
    "path": "/3/orders-v2",
    "summary": "Retrieve a list of orders",
    "description": "Get orders",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "todate",
        "required": false,
        "description": "filter by to date"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter by from date"
      },
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter orders"
      },
      {
        "name": "sortby",
        "required": false,
        "description": "field to sort returned list"
      },
      {
        "name": "customername",
        "required": false,
        "description": "filter by customer name"
      },
      {
        "name": "customernumber",
        "required": false,
        "description": "filter by customer number"
      },
      {
        "name": "label",
        "required": false,
        "description": "filter by label"
      },
      {
        "name": "documentnumber",
        "required": false,
        "description": "filter by document number"
      },
      {
        "name": "externalinvoicereference1",
        "required": false,
        "description": "filter by external invoice reference 1"
      },
      {
        "name": "externalinvoicereference2",
        "required": false,
        "description": "filter by external invoice reference 2"
      },
      {
        "name": "costcenter",
        "required": false,
        "description": "filter by cost center"
      },
      {
        "name": "project",
        "required": false,
        "description": "filter by project"
      },
      {
        "name": "sent",
        "required": false,
        "description": "filter by sent"
      },
      {
        "name": "notcompleted",
        "required": false,
        "description": "filter by not completed"
      },
      {
        "name": "ourreference",
        "required": false,
        "description": "filter by ourreference"
      },
      {
        "name": "yourreference",
        "required": false,
        "description": "filter by your reference"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter by lastmodified"
      },
      {
        "name": "ordertype",
        "required": false,
        "description": "filter by order type"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doShow",
    "method": "GET",
    "path": "/3/orders-v2/{DocumentNumber}",
    "summary": "Retrieve a single order",
    "description": "Retrieve an order",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doShowAndEmail",
    "method": "GET",
    "path": "/3/orders-v2/{DocumentNumber}/email",
    "summary": "Send given order as email",
    "description": "You can use the properties in the EmailInformation to customize the e-mail message on each order.",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doShowAndPreview",
    "method": "GET",
    "path": "/3/orders-v2/{DocumentNumber}/preview",
    "summary": "Preview given offer",
    "description": "The difference between this and the print-endpoint is that property Sent is not set to TRUE.",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the offer"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doShowAndPrint",
    "method": "GET",
    "path": "/3/orders-v2/{DocumentNumber}/print",
    "summary": "Print given order",
    "description": "Retrieve an order",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/pdf",
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doUpdate",
    "method": "PUT",
    "path": "/3/orders-v2/{DocumentNumber}",
    "summary": "Update an order",
    "description": "Note that there are two approaches for updating the rows on an order.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the order needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the order then specify only RowId like { \"RowId\": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an order is updated.",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doUpdateAndCancel",
    "method": "PUT",
    "path": "/3/orders-v2/{DocumentNumber}/cancel",
    "summary": "Cancels given order",
    "description": "Update an order",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doUpdateAndCreateOrder",
    "method": "PUT",
    "path": "/3/orders-v2/{DocumentNumber}/createinvoice",
    "summary": "Create invoice out of given order",
    "description": "Update an order",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "OrderControllerV2_doUpdateAndExternalPrint",
    "method": "PUT",
    "path": "/3/orders-v2/{DocumentNumber}/externalprint",
    "summary": "Set given order as sent",
    "description": "Use this endpoint to set order as sent, without generating an order.",
    "tags": [
      "fortnox_OrdersV2"
    ],
    "pathParameters": [
      {
        "name": "DocumentNumber",
        "required": true,
        "description": "identifies the order"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Order_OrderV2SinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Order": {
          "reference": "fortnox_Order_OrderV2SinglePayloadItem",
          "type": "object",
          "required": [
            "CustomerNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "patch",
    "method": "PATCH",
    "path": "/api/warehouse/incominggoods-v1/{id}",
    "summary": "Partial update Incoming Goods document",
    "description": "Perform a partial update of an <code>IncomingGoods</code> document. The partial update will update\n <code>note</code>, <code>deliveryNoteId</code>, <code>supplierName</code> and <code>hasDeliveryNote</code>\n It is possible to perform a partial update of a released/completed (TODO: ?) document.",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Incoming goods document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "the incoming goods document to update. The partial update updates\n                      <code>note</code>, <code>deliveryNoteId</code>, <code>supplierName</code> and <code>hasDeliveryNote</code>",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_IncomingGoods",
      "type": "object",
      "required": [
        "deliveryNoteId"
      ],
      "properties": {
        "completed": {
          "type": "boolean"
        },
        "costCenterCode": {
          "type": "string"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "deliveryNoteId": {
          "type": "string"
        },
        "hasDeliveryNote": {
          "type": "boolean"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_IncomingGoodsRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "stockPointName": {
          "type": "string"
        },
        "supplierName": {
          "type": "string"
        },
        "supplierNumber": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "patchRecurring",
    "method": "PATCH",
    "path": "/api/recurring-billing/recurrings-v1/{recurring-id}",
    "summary": "Update only specified fields of a Recurring by ID",
    "description": "Applies JSON Patch operations to editable recurring fields. Supported operations are `add`, `remove`, and `replace`.\nAllowed root paths are: `/accrual`, `/project_id`, `/cost_center_id`, `/price_list_id`, `/dates`, `/amount_per_invoicing`, `/status`, `/invoice_handling`, `/distribution_method`, `/payment_terms`, `/our_reference`, `/your_reference`, `/remark`, `/order_number`, `/print_configuration`, `/vat_option`, `/vat_payment_type`, `/currency`, `/email`, `/customer`, `/delivery`, `/tax_reduction_category`, `/tax_reductions`, `/rows`.\nDeviation-related paths are not supported on this endpoint and return 400. JSON Pointer escape sequences are supported (`~0` for `~`, `~1` for `/`).\nThe `If-Match` (ETag) header is mandatory: requests without it are rejected with `428`, and a stale ETag is rejected with `412`.",
    "tags": [
      "Recurring-API_Recurrings"
    ],
    "pathParameters": [
      {
        "name": "recurring-id",
        "required": true,
        "description": "The unique identifier of the recurring contract to patch."
      }
    ],
    "headerParameters": [
      {
        "name": "If-Match",
        "required": true,
        "description": "Required strong ETag for optimistic concurrency control; standard comma-separated If-Match lists are also accepted. Requests without this header are rejected with 428."
      },
      {
        "name": "If-Unmodified-Since",
        "required": false,
        "description": "Optional expected Last-Modified value for optimistic concurrency control, formatted as an RFC 1123 date in GMT. Evaluated only after If-Match succeeds."
      }
    ],
    "queryParameters": [],
    "requestBodyRequired": true,
    "requestBodyDescription": "The Content-Type header must be set to `application/json`. The body is fully JSON Patch compliant (RFC 6902).",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Recurring-API_JsonPatchDocument",
      "type": "array",
      "items": {
        "reference": "Recurring-API_JsonPatchOperation",
        "type": "object",
        "required": [
          "op",
          "path"
        ]
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PreDefinedAccountController_doIndex",
    "method": "GET",
    "path": "/3/predefinedaccounts",
    "summary": "Retrieve a list of all predefined accounts",
    "description": "Get pre defined accounts",
    "tags": [
      "fortnox_PredefinedAccounts"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PreDefinedAccountController_doShow",
    "method": "GET",
    "path": "/3/predefinedaccounts/{name}",
    "summary": "Retrieve information for a specific account type",
    "description": "Retrieve a pre defined account",
    "tags": [
      "fortnox_PredefinedAccounts"
    ],
    "pathParameters": [
      {
        "name": "name",
        "required": true,
        "description": "identifies the predefined account"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PreDefinedAccountController_doUpdate",
    "method": "PUT",
    "path": "/3/predefinedaccounts/{name}",
    "summary": "Update a Predefined Account",
    "description": "An endpoint for updating a Predefined Account. Predefined Accounts are identified by their <em>name</em>-field, and as such must be unique.\n Some Predefined Accounts distinguish between Goods and Services.\n In this case, the former retains the original name whereas the latter ends with a 2. Such as <em>SALES</em> and <em>SALES2</em>.\n Accounts are chosen from the Account Registry, and if you have EasyVat enabled then the new EasyVat Predefined Accounts (<em>SALES_25_SE</em>, etc.) have certain restrictions on the accounts that can be selected.\n Refer to the table below.\n\n <table>\n     <caption>Account restrictions when EasyVat has been enabled.</caption>\n     <tr>\n         <th>Name</th>\n         <th>VAT Code</th>\n         <th>Restrictions</th>\n     </tr>\n     <tr>\n         <td>SALES_25_SE</td>\n         <td>MP1</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n     <tr>\n         <td>SALES_12_SE</td>\n         <td>MP2</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n     <tr>\n         <td>SALES_6_SE</td>\n         <td>MP3</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n     <tr>\n         <td>SALES_0_SE</td>\n         <td>MF</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n </table>\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n     <caption>Errors that can be raised by this endpoint.</caption>\n     <tr>\n         <th>Error Code</th>\n         <th>HTTP Code</th>\n         <th>Description</th>\n         <th>Solution</th>\n     </tr>\n     <tr>\n         <td>2001265</td>\n         <td>400</td>\n         <td>The provided account is invalid. It either has not been provided, does not exist, or is inactive.</td>\n         <td>Verify that an account has been provided and that it exists and is active.</td>\n     </tr>\n     <tr>\n         <td>2002462</td>\n         <td>400</td>\n         <td>The account is not in a valid format.</td>\n         <td>Verify that the format of the account is correct. It has to consist of 4 digits.</td>\n     </tr>\n     <tr>\n         <td>2000729</td>\n         <td>400</td>\n         <td>A Predefined Account has not been provided.</td>\n         <td>Verify that a valid Predefined Account has been provided as a PATH-parameter.</td>\n     </tr>\n     <tr>\n         <td>2004052</td>\n         <td>400</td>\n         <td>The provided account has an incompatible VAT Code. Only applies if EasyVat has been enabled.</td>\n         <td>Verify that the provided account has a VAT Code that is compatible with the selected Predefined Account. Refer to the table above for more information about compatibility.</td>\n     </tr>\n </table>\n\n If you have activated EasyVat, you can read more about how to use the new Predefined Accounts with your documents in their respective api documentation.",
    "tags": [
      "fortnox_PredefinedAccounts"
    ],
    "pathParameters": [
      {
        "name": "name",
        "required": true,
        "description": "identifies the predefined account"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update pre defined account",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_PreDefinedAccountSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "PreDefinedAccount"
      ],
      "properties": {
        "PreDefinedAccount": {
          "reference": "fortnox_PreDefinedAccountSinglePayloadItem",
          "type": "object",
          "required": [
            "Account"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PreDefinedVoucherSeriesController_doIndex",
    "method": "GET",
    "path": "/3/predefinedvoucherseries",
    "summary": "Retrieve a list of predefined voucher series",
    "description": "Get pre defined voucher series collection",
    "tags": [
      "fortnox_PredefinedVoucherSeries"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PreDefinedVoucherSeriesController_doShow",
    "method": "GET",
    "path": "/3/predefinedvoucherseries/{Name}",
    "summary": "Retrieve a specific predefined voucher series",
    "description": "Retrieve a pre defined voucher series",
    "tags": [
      "fortnox_PredefinedVoucherSeries"
    ],
    "pathParameters": [
      {
        "name": "Name",
        "required": true,
        "description": "identifies the predefined voucher series"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PreDefinedVoucherSeriesController_doUpdate",
    "method": "PUT",
    "path": "/3/predefinedvoucherseries/{Name}",
    "summary": "Update a predefined voucher series",
    "description": "Update a pre defined voucher series",
    "tags": [
      "fortnox_PredefinedVoucherSeries"
    ],
    "pathParameters": [
      {
        "name": "Name",
        "required": true,
        "description": "identifies the predefined voucher series"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update pre defined voucher series",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Bf_PreDefinedVoucherSeriesSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "PreDefinedVoucherSeries": {
          "reference": "fortnox_Bf_PreDefinedVoucherSeriesSinglePayloadItem",
          "type": "object",
          "required": [
            "VoucherSeries"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doCreate",
    "method": "POST",
    "path": "/3/prices",
    "summary": "Create a price",
    "description": "Create a price",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create price",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_PriceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Price": {
          "reference": "fortnox_PriceSinglePayloadItem",
          "type": "object",
          "required": [
            "ArticleNumber",
            "PriceList"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doDeleteWithId3",
    "method": "DELETE",
    "path": "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}",
    "summary": "Delete a single price",
    "description": "Delete a price",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [
      {
        "name": "PriceList",
        "required": true,
        "description": "Price list to delete from"
      },
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "Number of article to delete the price for"
      },
      {
        "name": "FromQuantity",
        "required": true,
        "description": "From quantity of price to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doIndex",
    "method": "GET",
    "path": "/3/prices",
    "summary": "Retrieve a list of prices",
    "description": "Retrieve a price",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "fromquantity",
        "required": false,
        "description": "Lists prices by from quantity"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doShow",
    "method": "GET",
    "path": "/3/prices/{PriceList}/{ArticleNumber}",
    "summary": "Retrieve the first price for the specified article",
    "description": "Retrieve a price",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [
      {
        "name": "PriceList",
        "required": true,
        "description": "Price list of the price to show"
      },
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "Article number of the price to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "fromquantity",
        "required": false,
        "description": "Get price by from quantity"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doShowWithId3",
    "method": "GET",
    "path": "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}",
    "summary": "Retrieve a price for a specified article",
    "description": "Retrieve a price",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [
      {
        "name": "PriceList",
        "required": true,
        "description": "Price list to get the price from"
      },
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "Number of article to get the price for"
      },
      {
        "name": "FromQuantity",
        "required": true,
        "description": "From quantity of price to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doSublistWithTwoParams",
    "method": "GET",
    "path": "/3/prices/sublist/{PriceList}/{ArticleNumber}",
    "summary": "Retrieve a list of articles with all their prices in the specified price list",
    "description": "The list contains a slimmer version of the prices. To get a full entity, use the GET with a price list, article number and from quantity.",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [
      {
        "name": "PriceList",
        "required": true,
        "description": "Price list of the prices to list"
      },
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "Article number of the prices to list"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "fromquantity",
        "required": false,
        "description": "Filter prices by from quantity"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doUpdate",
    "method": "PUT",
    "path": "/3/prices/{PriceList}/{ArticleNumber}",
    "summary": "Update the first price in the specified article",
    "description": "Update a price",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [
      {
        "name": "PriceList",
        "required": true,
        "description": "Price list to update the price for"
      },
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "Number of article to update the price for"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update price",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_PriceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Price": {
          "reference": "fortnox_PriceSinglePayloadItem",
          "type": "object",
          "required": [
            "ArticleNumber",
            "PriceList"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceController_doUpdateWithId3",
    "method": "PUT",
    "path": "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}",
    "summary": "Update a price",
    "description": "Update a price",
    "tags": [
      "fortnox_Prices"
    ],
    "pathParameters": [
      {
        "name": "PriceList",
        "required": true,
        "description": "Price list to update the price for"
      },
      {
        "name": "ArticleNumber",
        "required": true,
        "description": "Number of article to update the price for"
      },
      {
        "name": "FromQuantity",
        "required": true,
        "description": "From quantity of price to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update price",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_PriceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Price": {
          "reference": "fortnox_PriceSinglePayloadItem",
          "type": "object",
          "required": [
            "ArticleNumber",
            "PriceList"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceListController_doCreate",
    "method": "POST",
    "path": "/3/pricelists",
    "summary": "Create a price list",
    "description": "Create a price list",
    "tags": [
      "fortnox_PriceLists"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create price list",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_PriceListSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "PriceList"
      ],
      "properties": {
        "PriceList": {
          "reference": "fortnox_PriceListSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceListController_doIndex",
    "method": "GET",
    "path": "/3/pricelists",
    "summary": "Retrieve a list of price lists",
    "description": "The price lists register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_PriceLists"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceListController_doShow",
    "method": "GET",
    "path": "/3/pricelists/{Code}",
    "summary": "Retrieve a single price list",
    "description": "Retrieve a price list",
    "tags": [
      "fortnox_PriceLists"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the price list"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PriceListController_doUpdate",
    "method": "PUT",
    "path": "/3/pricelists/{Code}",
    "summary": "Update a price list",
    "description": "Update a price list",
    "tags": [
      "fortnox_PriceLists"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the price list"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update price list",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_PriceListSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "PriceList"
      ],
      "properties": {
        "PriceList": {
          "reference": "fortnox_PriceListSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "PrintTemplateController_doIndex",
    "method": "GET",
    "path": "/3/printtemplates",
    "summary": "Retrieve a list of print templates",
    "description": "Get print templates",
    "tags": [
      "fortnox_PrintTemplates"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "type",
        "required": false,
        "description": "Filters the list of print templates by type"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ProjectsController_doCreate",
    "method": "POST",
    "path": "/3/projects",
    "summary": "Create a project",
    "description": "Create a project",
    "tags": [
      "fortnox_Projects"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create project",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Project_ProjectSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Project": {
          "reference": "fortnox_Project_ProjectSinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ProjectsController_doDelete",
    "method": "DELETE",
    "path": "/3/projects/{ProjectNumber}",
    "summary": "Remove a project",
    "description": "Delete a project",
    "tags": [
      "fortnox_Projects"
    ],
    "pathParameters": [
      {
        "name": "ProjectNumber",
        "required": true,
        "description": "identifies the project"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ProjectsController_doIndex",
    "method": "GET",
    "path": "/3/projects",
    "summary": "Retrieve a list of projects",
    "description": "The project register can return a list of records or a single record. By specifying a ProjectNumber in the URL, a single record will be returned. If no ProjectNumber is provided, a list of records will be returned.",
    "tags": [
      "fortnox_Projects"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "description",
        "required": false,
        "description": "filter on description"
      },
      {
        "name": "projectleader",
        "required": false,
        "description": "filter on project leader"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ProjectsController_doShow",
    "method": "GET",
    "path": "/3/projects/{ProjectNumber}",
    "summary": "Retrieve a single project",
    "description": "Retrieve a project",
    "tags": [
      "fortnox_Projects"
    ],
    "pathParameters": [
      {
        "name": "ProjectNumber",
        "required": true,
        "description": "identifies the project"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ProjectsController_doUpdate",
    "method": "PUT",
    "path": "/3/projects/{ProjectNumber}",
    "summary": "Update a project",
    "description": "Update a project",
    "tags": [
      "fortnox_Projects"
    ],
    "pathParameters": [
      {
        "name": "ProjectNumber",
        "required": true,
        "description": "identifies the project"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update project",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Project_ProjectSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Project": {
          "reference": "fortnox_Project_ProjectSinglePayloadItem",
          "type": "object",
          "required": [
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "release",
    "method": "PUT",
    "path": "/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release",
    "summary": "Release manual inbound document",
    "description": "<p>\n The document will be locked and bookkept.\n <p>\n The following error codes might be thrown:\n  <dl>\n  <dt>cannot_release_later_than_current_date</dt>\n    <dd>Document date cannot be in the future.</dd>\n  <dt>document_is_voided</dt>\n    <dd>Document is voided.</dd>\n  <dt>period_locked</dt>\n    <dd>Document date is within a locked bookkeeping period.</dd>\n  </dl>",
    "tags": [
      "warehouse_ManualInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Inbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "release_1",
    "method": "PUT",
    "path": "/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release",
    "summary": "Release manual outbound document",
    "description": "<p>\n The document will be locked and bookkept.\n <p>\n The following error codes might be thrown:\n  <dl>\n  <dt>cannot_release_later_than_current_date</dt>\n    <dd>Document date cannot be in the future.</dd>\n  <dt>document_is_voided</dt>\n    <dd>Document is voided.</dd>\n  <dt>period_locked</dt>\n    <dd>Document date is within a locked bookkeeping period.</dd>\n  </dl>",
    "tags": [
      "warehouse_ManualOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Outbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "release_2",
    "method": "PUT",
    "path": "/api/warehouse/stocktaking-v1/{id}/release",
    "summary": "Release Stock Taking document",
    "description": "<p>\n The document will be locked and bookkept.\n The Stock Taking document state will be set to <code>completed</code>.\n The stock amount will be adjusted according to the stock taken quantity.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "release_3",
    "method": "PUT",
    "path": "/api/warehouse/stocktransfer-v1/{id}/release",
    "summary": "Release a stock transfer document",
    "description": "<p>\n This will deliver all outbounds which are reserved in from-place, and\n create inbounds in the to-place.\n Nothing happens if you releasr an already released stock transfer document.\n <p>\n Returns <code>document_is_voided</code> if document is voided.",
    "tags": [
      "warehouse_StockTransfer"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Transfer document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "release_4",
    "method": "PUT",
    "path": "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release",
    "summary": "Release custom inbound document",
    "description": "The document will be locked and bookkept.\n The inbound deliveries will affect available stock.",
    "tags": [
      "warehouse_CustomInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "document type"
      },
      {
        "name": "id",
        "required": true,
        "description": "document id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "release_5",
    "method": "PUT",
    "path": "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release",
    "summary": "Release custom outbound document",
    "description": "",
    "tags": [
      "warehouse_CustomOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "document type"
      },
      {
        "name": "id",
        "required": true,
        "description": "document id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "release_6",
    "method": "PUT",
    "path": "/api/warehouse/incominggoods-v1/{id}/release",
    "summary": "Release Incoming Goods document",
    "description": "The document will be locked and bookkept.\n The inbound deliveries will affect available stock.",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Incoming goods document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "release_7",
    "method": "PUT",
    "path": "/api/warehouse/productionorders-v1/release/{id}",
    "summary": "Release a production order document",
    "description": "<p>\n The document will be locked and bookkept.\n <p>\n The following error codes might be thrown:\n  <dl>\n  <dt>PRODUCTION_DATE_IS_EMPTY</dt>\n    <dd>Production date cannot be empty.</dd>\n  <dt>CANNOT_RELEASE_AFTER_CURRENT_DATE</dt>\n    <dd>Document date cannot be in the future.</dd>\n  <dt>DOCUMENT_IS_VOIDED</dt>\n    <dd> The document has been voided and can no longer be modified.</dd>\n  <dt>DOCUMENT_IS_RELEASED</dt>\n    <dd>The document has already been released and can no longer be modified.</dd>\n  <dt>DOCUMENT_NOT_FULLY_RESERVED</dt>\n    <dd>The documents package items (BOMs, Bill Of Materials) has not been fully reserved\n    (reserved quantity is not equal to total required quantity for one or more package item).</dd>\n  </dl>",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Production Order document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SalaryTransactionsController_doCreate",
    "method": "POST",
    "path": "/3/salarytransactions",
    "summary": "Create a new salary transaction for an employee",
    "description": "Create a salary transaction",
    "tags": [
      "fortnox_SalaryTransactions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create salary transaction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_SalaryTransactionsSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "SalaryTransaction"
      ],
      "properties": {
        "SalaryTransaction": {
          "reference": "fortnox_Lon_SalaryTransactionsSinglePayloadItem",
          "type": "object",
          "required": [
            "Date",
            "EmployeeId",
            "SalaryCode"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SalaryTransactionsController_doDelete",
    "method": "DELETE",
    "path": "/3/salarytransactions/{SalaryRow}",
    "summary": "Delete a single salary transaction",
    "description": "Delete a salary transaction",
    "tags": [
      "fortnox_SalaryTransactions"
    ],
    "pathParameters": [
      {
        "name": "SalaryRow",
        "required": true,
        "description": "identifies the salary transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SalaryTransactionsController_doIndex",
    "method": "GET",
    "path": "/3/salarytransactions",
    "summary": "List all salary transactions for all employees",
    "description": "Supports query-string parameters <b>employeeid</b> and <b>date</b> for filtering the result.",
    "tags": [
      "fortnox_SalaryTransactions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "date",
        "required": false,
        "description": "filter on date"
      },
      {
        "name": "employeeId",
        "required": false,
        "description": "filter on employeeId"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SalaryTransactionsController_doShow",
    "method": "GET",
    "path": "/3/salarytransactions/{SalaryRow}",
    "summary": "Retrieve a single salary transaction",
    "description": "Retrieve a salary transaction",
    "tags": [
      "fortnox_SalaryTransactions"
    ],
    "pathParameters": [
      {
        "name": "SalaryRow",
        "required": true,
        "description": "identifies the salary transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SalaryTransactionsController_doUpdate",
    "method": "PUT",
    "path": "/3/salarytransactions/{SalaryRow}",
    "summary": "Update a salary transaction",
    "description": "Update a salary transaction",
    "tags": [
      "fortnox_SalaryTransactions"
    ],
    "pathParameters": [
      {
        "name": "SalaryRow",
        "required": true,
        "description": "identifies the salary transaction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update salary transaction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_SalaryTransactionsSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "SalaryTransaction"
      ],
      "properties": {
        "SalaryTransaction": {
          "reference": "fortnox_Lon_SalaryTransactionsSinglePayloadItem",
          "type": "object",
          "required": [
            "Date",
            "EmployeeId",
            "SalaryCode"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "save",
    "method": "PUT",
    "path": "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}",
    "summary": "Save custom inbound document",
    "description": "",
    "tags": [
      "warehouse_CustomInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "min 1 character, max 25 characters, may contain letters A-Z, digits 0-9, underscore (_), and dash (-), type is case-insensitive\n <blockquote><pre>\n      Type is a custom name/reference of the document that will be used to reference the document type <br>\n      * If type is not known, it will be registered as belonging to the INBOUND category. <br>\n      * If type is an existing custom document type of category OUTBOUND an error is thrown. <br>\n      * If type is invalid an error is thrown. <br>\n </pre></blockquote>"
      },
      {
        "name": "id",
        "required": true,
        "description": "min 1 character, max 25 characters, may only contain digits 0-9"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "the <code>CustomInboundDocument</code> to create",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_CustomInboundDocument",
      "type": "object",
      "required": [
        "date",
        "rows"
      ],
      "properties": {
        "currency": {
          "reference": "warehouse_Currency",
          "type": "object",
          "required": [
            "currency",
            "rate"
          ]
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "id": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_CustomInboundDocumentRow"
          }
        },
        "type": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        },
        "warehouseReady": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "save_1",
    "method": "PUT",
    "path": "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}",
    "summary": "Save a custom outbound document",
    "description": "<br>\n If type is not known, it will be registered as belonging to the OUTBOUND category.<br>\n If type is an existing custom document type of category INBOUND an error is thrown.<br>\n If type is invalid an error is thrown.<br>",
    "tags": [
      "warehouse_CustomOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "the type of the custom outbound document, min 1 character, max 25 characters, may contain letters A-Z, digits 0-9, underscore (_), and dash (-). Always stored as upper case."
      },
      {
        "name": "id",
        "required": true,
        "description": "the id of the custom outbound document, min 1 character, max 25 characters, may only contain digits 0-9"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "the <code>CustomOutboundDocument</code> to create",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_CustomOutboundDocument",
      "type": "object",
      "required": [
        "date",
        "deliveryState",
        "rows"
      ],
      "properties": {
        "averageCosts": {
          "type": "array",
          "items": {
            "reference": "warehouse_AverageCost"
          }
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "deliveryState": {
          "type": "string",
          "enum": [
            "registration",
            "reservation",
            "delivery"
          ]
        },
        "forcedDelivery": {
          "type": "boolean"
        },
        "id": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "referenceType": {
          "type": "string"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_CustomOutboundDocumentRow"
          }
        },
        "voided": {
          "type": "boolean"
        },
        "warehouseReady": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "save_2",
    "method": "PUT",
    "path": "/api/warehouse/incominggoods-v1/{id}",
    "summary": "Update Incoming Goods document",
    "description": "",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Incoming goods document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The <code>IncomingGoods</code> document.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_IncomingGoods",
      "type": "object",
      "required": [
        "deliveryNoteId"
      ],
      "properties": {
        "completed": {
          "type": "boolean"
        },
        "costCenterCode": {
          "type": "string"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "deliveryNoteId": {
          "type": "string"
        },
        "hasDeliveryNote": {
          "type": "boolean"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_IncomingGoodsRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "stockPointName": {
          "type": "string"
        },
        "supplierName": {
          "type": "string"
        },
        "supplierNumber": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ScheduleTimeController_doShow",
    "method": "GET",
    "path": "/3/scheduletimes/{EmployeeId}/{Date}",
    "summary": "Retrieve a specific schedule time",
    "description": "Retrieve a schedule time",
    "tags": [
      "fortnox_ScheduleTimes"
    ],
    "pathParameters": [
      {
        "name": "EmployeeId",
        "required": true,
        "description": "identifies the employee"
      },
      {
        "name": "Date",
        "required": true,
        "description": "identifies the date"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ScheduleTimeController_doUpdate",
    "method": "PUT",
    "path": "/3/scheduletimes/{EmployeeId}/{Date}",
    "summary": "Update a schedule time",
    "description": "Update a schedule time",
    "tags": [
      "fortnox_ScheduleTimes"
    ],
    "pathParameters": [
      {
        "name": "EmployeeId",
        "required": true,
        "description": "identifies the employee"
      },
      {
        "name": "Date",
        "required": true,
        "description": "identifies the date"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update schedule time",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_ScheduleTimeSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "ScheduleTime": {
          "reference": "fortnox_Lon_ScheduleTimeSinglePayloadItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "ScheduleTimeController_doUpdateAndResetDay",
    "method": "PUT",
    "path": "/3/scheduletimes/{EmployeeId}/{Date}/resetday",
    "summary": "Reset schedule time",
    "description": "Update a schedule time",
    "tags": [
      "fortnox_ScheduleTimes"
    ],
    "pathParameters": [
      {
        "name": "EmployeeId",
        "required": true,
        "description": "identifies the employee"
      },
      {
        "name": "Date",
        "required": true,
        "description": "identifies the date"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update schedule time",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lon_ScheduleTimeSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "ScheduleTime": {
          "reference": "fortnox_Lon_ScheduleTimeSinglePayloadItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "sendPurchaseOrder",
    "method": "POST",
    "path": "/api/warehouse/purchaseorders-v1/{id}/send",
    "summary": "Send purchase order via email",
    "description": "<p>\n Sends the purchase order with the specified <code>id</code> to the recipient and sets the purchase order state to SENT",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "see <code>PurchaseOrderMailSettings</code>",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_PurchaseOrderMailSettings",
      "type": "object",
      "required": [
        "body",
        "receiver",
        "replyTo",
        "subject"
      ],
      "properties": {
        "body": {
          "type": "string"
        },
        "bodyAsHtml": {
          "type": "string"
        },
        "receiver": {
          "type": "string"
        },
        "receiverCopy": {
          "type": "string"
        },
        "receiverSecretCopy": {
          "type": "string"
        },
        "replyTo": {
          "type": "string"
        },
        "senderName": {
          "type": "string"
        },
        "subject": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "sendPurchaseOrders",
    "method": "POST",
    "path": "/api/warehouse/purchaseorders-v1/sendpurchaseorders",
    "summary": "Sends multiple purchase orders via email",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "List of Purchase order ids.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int64"
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "setDropshipManuallyCompleted",
    "method": "PUT",
    "path": "/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete",
    "summary": "Manually complete dropship order",
    "description": "<p>\n The dropship order will be treated as fully received.\n Any remaining quantity will be ignored.",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "setManuallyCompleted",
    "method": "PUT",
    "path": "/api/warehouse/purchaseorders-v1/{id}/complete",
    "summary": "Manually complete Purchase Order",
    "description": "<p>\n The purchase order will be treated as fully received.\n Any remaining quantity will be ignored.",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "SieController_doShow",
    "method": "GET",
    "path": "/3/sie/{Type}",
    "summary": "Retrieve a SIE file",
    "description": "Retrieves a SIE file as streamed content",
    "tags": [
      "fortnox_Sie"
    ],
    "pathParameters": [
      {
        "name": "Type",
        "required": true,
        "description": "type"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "selection",
        "required": false,
        "description": "filter on selection"
      },
      {
        "name": "financialYear",
        "required": false,
        "description": "financialYear"
      },
      {
        "name": "exportall",
        "required": false,
        "description": "filter on export all"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter on from date"
      },
      {
        "name": "todate",
        "required": false,
        "description": "filter on to date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/octet-stream",
      "application/json"
    ]
  },
  {
    "operationId": "SinvoiceExternalUrlConnectionController_doCreate",
    "method": "POST",
    "path": "/3/supplierinvoiceexternalurlconnections",
    "summary": "Create a supplier invoice external URL connection",
    "description": "The connection will initially be inactive. It will show up once a file has been connected to the supplier invoice via POST /3/supplierinvoicefileconnections",
    "tags": [
      "fortnox_SupplierInvoiceExternalUrlConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create supplier invoice externalurl connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_SinvoiceExternalUrlConnectionSinglePayloadItem",
      "type": "object",
      "properties": {
        "ExternalURLConnection": {
          "type": "string"
        },
        "SupplierInvoiceNumber": {
          "type": "integer",
          "format": "int32"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SinvoiceExternalUrlConnectionController_doDelete",
    "method": "DELETE",
    "path": "/3/supplierinvoiceexternalurlconnections/{Id}",
    "summary": "Remove a supplier invoice external URL connection",
    "description": "Delete a supplier invoice externalurl connection",
    "tags": [
      "fortnox_SupplierInvoiceExternalUrlConnections"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SinvoiceExternalUrlConnectionController_doShow",
    "method": "GET",
    "path": "/3/supplierinvoiceexternalurlconnections/{Id}",
    "summary": "Retrieve a single supplier invoice external URL connection",
    "description": "Retrieve a supplier invoice externalurl connection",
    "tags": [
      "fortnox_SupplierInvoiceExternalUrlConnections"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SinvoiceExternalUrlConnectionController_doUpdate",
    "method": "PUT",
    "path": "/3/supplierinvoiceexternalurlconnections/{Id}",
    "summary": "Update a supplier invoice external URL connection",
    "description": "Update a supplier invoice externalurl connection",
    "tags": [
      "fortnox_SupplierInvoiceExternalUrlConnections"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice externalurl connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_SinvoiceExternalUrlConnectionSinglePayloadItem",
      "type": "object",
      "properties": {
        "ExternalURLConnection": {
          "type": "string"
        },
        "SupplierInvoiceNumber": {
          "type": "integer",
          "format": "int32"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierController_doCreate",
    "method": "POST",
    "path": "/3/suppliers",
    "summary": "Create a supplier",
    "description": "Create a supplier",
    "tags": [
      "fortnox_Suppliers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create supplier",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Supplier": {
          "reference": "fortnox_Lf_SupplierSinglePayloadItem",
          "type": "object",
          "required": [
            "Name"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierController_doIndex",
    "method": "GET",
    "path": "/3/suppliers",
    "summary": "Retrieve a list of suppliers",
    "description": "The supplier register can return a list of records or a single record. By specifying a SupplierNumber in the URL, a single record will be returned. Not specifying a SupplierNumber will return a list of records.",
    "tags": [
      "fortnox_Suppliers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "suppliernumber",
        "required": false,
        "description": "filter on supplier number"
      },
      {
        "name": "name",
        "required": false,
        "description": "filter on name"
      },
      {
        "name": "organisationnumber",
        "required": false,
        "description": "filter on organisation number"
      },
      {
        "name": "phone",
        "required": false,
        "description": "filter on phone"
      },
      {
        "name": "zipcode",
        "required": false,
        "description": "filter on zip code"
      },
      {
        "name": "city",
        "required": false,
        "description": "filter on city"
      },
      {
        "name": "email",
        "required": false,
        "description": "filter on email"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter on last modified date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierController_doShow",
    "method": "GET",
    "path": "/3/suppliers/{SupplierNumber}",
    "summary": "Retrieve a single supplier",
    "description": "Retrieve a supplier",
    "tags": [
      "fortnox_Suppliers"
    ],
    "pathParameters": [
      {
        "name": "SupplierNumber",
        "required": true,
        "description": "Supplier number of supplier to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierController_doUpdate",
    "method": "PUT",
    "path": "/3/suppliers/{SupplierNumber}",
    "summary": "Update a supplier",
    "description": "Update a supplier",
    "tags": [
      "fortnox_Suppliers"
    ],
    "pathParameters": [
      {
        "name": "SupplierNumber",
        "required": true,
        "description": "Supplier number of supplier to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Supplier": {
          "reference": "fortnox_Lf_SupplierSinglePayloadItem",
          "type": "object",
          "required": [
            "Name"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceAccrualController_doCreate",
    "method": "POST",
    "path": "/3/supplierinvoiceaccruals",
    "summary": "Create a supplier invoice accrual",
    "description": "Create a supplier invoice accrual",
    "tags": [
      "fortnox_SupplierInvoiceAccruals"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create supplier invoice accrual",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceAccrualSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "SupplierInvoiceAccrual"
      ],
      "properties": {
        "SupplierInvoiceAccrual": {
          "reference": "fortnox_Lf_SupplierInvoiceAccrualSinglePayloadItem",
          "type": "object",
          "required": [
            "AccrualAccount",
            "CostAccount",
            "EndDate",
            "Period",
            "StartDate",
            "SupplierInvoiceAccrualRows",
            "SupplierInvoiceNumber",
            "Times",
            "Total"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceAccrualController_doDelete",
    "method": "DELETE",
    "path": "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}",
    "summary": "Remove a supplier invoice accrual",
    "description": "Delete a supplier invoice accrual",
    "tags": [
      "fortnox_SupplierInvoiceAccruals"
    ],
    "pathParameters": [
      {
        "name": "SupplierInvoiceNumber",
        "required": true,
        "description": "Supplier invoice number of supplier invoice accrual to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceAccrualController_doIndex",
    "method": "GET",
    "path": "/3/supplierinvoiceaccruals",
    "summary": "Retrieve a list of supplier invoice accruals",
    "description": "The supplier invoice accruals register can return a list of records or a single record. By specifying a SupplierInvoiceNumber in the URL, a single record will be returned. Not specifying a SupplierInvoiceNumber will return a list of records.",
    "tags": [
      "fortnox_SupplierInvoiceAccruals"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceAccrualController_doShow",
    "method": "GET",
    "path": "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}",
    "summary": "Retrieve a single supplier invoice accrual",
    "description": "Retrieve a supplier invoice accrual",
    "tags": [
      "fortnox_SupplierInvoiceAccruals"
    ],
    "pathParameters": [
      {
        "name": "SupplierInvoiceNumber",
        "required": true,
        "description": "Supplier invoice number of supplier invoice accrual to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceAccrualController_doUpdate",
    "method": "PUT",
    "path": "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}",
    "summary": "Update a supplier invoice accrual",
    "description": "Update a supplier invoice accrual",
    "tags": [
      "fortnox_SupplierInvoiceAccruals"
    ],
    "pathParameters": [
      {
        "name": "SupplierInvoiceNumber",
        "required": true,
        "description": "Supplier invoice number of supplier invoice accrual to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice accrual",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceAccrualSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "SupplierInvoiceAccrual"
      ],
      "properties": {
        "SupplierInvoiceAccrual": {
          "reference": "fortnox_Lf_SupplierInvoiceAccrualSinglePayloadItem",
          "type": "object",
          "required": [
            "AccrualAccount",
            "CostAccount",
            "EndDate",
            "Period",
            "StartDate",
            "SupplierInvoiceAccrualRows",
            "SupplierInvoiceNumber",
            "Times",
            "Total"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doCreate",
    "method": "POST",
    "path": "/3/supplierinvoices",
    "summary": "Create a supplier invoice",
    "description": "Create a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create supplier invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoice": {
          "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "SupplierNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doCreateComment",
    "method": "POST",
    "path": "/3/supplierinvoices/{GivenNumber}/commentlog",
    "summary": "Add a comment to a supplier invoice",
    "description": "Add a comment to a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for creating a comment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceCommentLogPayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoiceCommentLog": {
          "reference": "fortnox_Lf_SupplierInvoiceCommentLogPayloadItem",
          "type": "object",
          "required": [
            "Comment"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doDeleteComment",
    "method": "DELETE",
    "path": "/3/supplierinvoices/{GivenNumber}/commentlog/{Id}",
    "summary": "Delete a comment from a supplier invoice",
    "description": "Delete a comment from a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      },
      {
        "name": "Id",
        "required": true,
        "description": "identifies the comment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doIndex",
    "method": "GET",
    "path": "/3/supplierinvoices",
    "summary": "Retrieve a list of supplier invoices",
    "description": "Get supplier invoices",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "tofinalpaydate",
        "required": false,
        "description": "Filter supplier invoices by final to pay date"
      },
      {
        "name": "fromfinalpaydate",
        "required": false,
        "description": "Filter supplier invoices by final from pay date"
      },
      {
        "name": "filter",
        "required": false,
        "description": "Filter supplier invoices by status"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "Filter supplier invoices by last modified date"
      },
      {
        "name": "suppliernumber",
        "required": false,
        "description": "Filter supplier invoices by supplier number"
      },
      {
        "name": "suppliername",
        "required": false,
        "description": "Filter supplier invoices by supplier name"
      },
      {
        "name": "ocr",
        "required": false,
        "description": "Filter supplier invoices by ocr number"
      },
      {
        "name": "invoicenumber",
        "required": false,
        "description": "Filter supplier invoices by invoice number"
      },
      {
        "name": "serialnumber",
        "required": false,
        "description": "Filter supplier invoices by serial number"
      },
      {
        "name": "costcenter",
        "required": false,
        "description": "Filter supplier invoices by cost center"
      },
      {
        "name": "project",
        "required": false,
        "description": "Filter supplier invoices by project"
      },
      {
        "name": "ourreference",
        "required": false,
        "description": "Filter supplier invoices by our reference"
      },
      {
        "name": "yourreference",
        "required": false,
        "description": "Filter supplier invoices by your reference"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "Filter supplier invoices by from date"
      },
      {
        "name": "todate",
        "required": false,
        "description": "Filter supplier invoices by to date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doIndexComments",
    "method": "GET",
    "path": "/3/supplierinvoices/{GivenNumber}/commentlog",
    "summary": "Retrieve all comments for a supplier invoice",
    "description": "Retrieve comments for a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doShow",
    "method": "GET",
    "path": "/3/supplierinvoices/{GivenNumber}",
    "summary": "Retrieve a single supplier invoice",
    "description": "Retrieve a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doUpdate",
    "method": "PUT",
    "path": "/3/supplierinvoices/{GivenNumber}",
    "summary": "Update a supplier invoice",
    "description": "Update a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoice": {
          "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "SupplierNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doUpdateAndApprovalBookkeep",
    "method": "PUT",
    "path": "/3/supplierinvoices/{GivenNumber}/approvalbookkeep",
    "summary": "Approval of bookkeep of given supplier invoice",
    "description": "Update a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoice": {
          "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "SupplierNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doUpdateAndApprovalPayment",
    "method": "PUT",
    "path": "/3/supplierinvoices/{GivenNumber}/approvalpayment",
    "summary": "Approval of payment of given supplier invoice",
    "description": "Update a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoice": {
          "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "SupplierNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doUpdateAndBookkeep",
    "method": "PUT",
    "path": "/3/supplierinvoices/{GivenNumber}/bookkeep",
    "summary": "Bookkeep given supplier invoice",
    "description": "Update a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoice": {
          "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "SupplierNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doUpdateAndCancel",
    "method": "PUT",
    "path": "/3/supplierinvoices/{GivenNumber}/cancel",
    "summary": "Cancels given supplier invoice",
    "description": "Update a supplier invoice",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoice": {
          "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "SupplierNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceController_doUpdateAndCredit",
    "method": "PUT",
    "path": "/3/supplierinvoices/{GivenNumber}/credit",
    "summary": "Credit given supplier invoice",
    "description": "The created credit invoice will be referenced in the property CreditReference.",
    "tags": [
      "fortnox_SupplierInvoices"
    ],
    "pathParameters": [
      {
        "name": "GivenNumber",
        "required": true,
        "description": "identifies the invoice"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoice": {
          "reference": "fortnox_Lf_SupplierInvoiceSinglePayloadItem",
          "type": "object",
          "required": [
            "SupplierNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceFileConnectionController_doCreate",
    "method": "POST",
    "path": "/3/supplierinvoicefileconnections",
    "summary": "Create an supplier invoice file connection",
    "description": "Create a supplier invoice file connection",
    "tags": [
      "fortnox_SupplierInvoiceFileConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create supplier invoice file connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Da_SupplierInvoiceFileConnectionSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoiceFileConnection": {
          "reference": "fortnox_Da_SupplierInvoiceFileConnectionSinglePayloadItem",
          "type": "object"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceFileConnectionController_doDelete",
    "method": "DELETE",
    "path": "/3/supplierinvoicefileconnections/{FileId}",
    "summary": "Remove an supplier invoice file connection",
    "description": "Delete a supplier invoice file connection",
    "tags": [
      "fortnox_SupplierInvoiceFileConnections"
    ],
    "pathParameters": [
      {
        "name": "FileId",
        "required": true,
        "description": "identifies the supplier invoice file connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceFileConnectionController_doIndex",
    "method": "GET",
    "path": "/3/supplierinvoicefileconnections",
    "summary": "Retrieve a list of supplier invoice file connections",
    "description": "The supplier invoice file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.",
    "tags": [
      "fortnox_SupplierInvoiceFileConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "supplierinvoicenumber",
        "required": false,
        "description": "Filter file connections by supplier invoice number"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoiceFileConnectionController_doShow",
    "method": "GET",
    "path": "/3/supplierinvoicefileconnections/{FileId}",
    "summary": "Retrieve a single supplier invoice file connection",
    "description": "Retrieve a supplier invoice file connection",
    "tags": [
      "fortnox_SupplierInvoiceFileConnections"
    ],
    "pathParameters": [
      {
        "name": "FileId",
        "required": true,
        "description": "identifies the file connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoicePaymentController_doCreate",
    "method": "POST",
    "path": "/3/supplierinvoicepayments",
    "summary": "Create a supplier invoice payment",
    "description": "Create a supplier invoice payment",
    "tags": [
      "fortnox_SupplierInvoicePayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create supplier invoice payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoicePaymentSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoicePayment": {
          "reference": "fortnox_Lf_SupplierInvoicePaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "InvoiceNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoicePaymentController_doDelete",
    "method": "DELETE",
    "path": "/3/supplierinvoicepayments/{Number}",
    "summary": "Remove a supplier invoice payment",
    "description": "Delete a supplier invoice payment",
    "tags": [
      "fortnox_SupplierInvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the supplier invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoicePaymentController_doIndex",
    "method": "GET",
    "path": "/3/supplierinvoicepayments",
    "summary": "Retrieve a list of supplier invoice payments",
    "description": "Get supplier invoice payments",
    "tags": [
      "fortnox_SupplierInvoicePayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "invoicenumber",
        "required": false,
        "description": "Filter payments by invoice number"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "Filter payments by last modified date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoicePaymentController_doShow",
    "method": "GET",
    "path": "/3/supplierinvoicepayments/{Number}",
    "summary": "Retrieve a single supplier invoice payment",
    "description": "Retrieve a supplier invoice payment",
    "tags": [
      "fortnox_SupplierInvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the supplier invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoicePaymentController_doUpdate",
    "method": "PUT",
    "path": "/3/supplierinvoicepayments/{Number}",
    "summary": "Update a supplier invoice payment",
    "description": "Update a supplier invoice payment",
    "tags": [
      "fortnox_SupplierInvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the supplier invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoicePaymentSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoicePayment": {
          "reference": "fortnox_Lf_SupplierInvoicePaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "InvoiceNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "SupplierInvoicePaymentController_doUpdateAndBookkeep",
    "method": "PUT",
    "path": "/3/supplierinvoicepayments/{Number}/bookkeep",
    "summary": "Bookkeep a supplier invoice payment",
    "description": "Update a supplier invoice payment",
    "tags": [
      "fortnox_SupplierInvoicePayments"
    ],
    "pathParameters": [
      {
        "name": "Number",
        "required": true,
        "description": "identifies the supplier invoice payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update supplier invoice payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Lf_SupplierInvoicePaymentSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "SupplierInvoicePayment": {
          "reference": "fortnox_Lf_SupplierInvoicePaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "InvoiceNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TaxReductionController_doCreate",
    "method": "POST",
    "path": "/3/taxreductions",
    "summary": "Create a Tax Reduction",
    "description": "Note that different types of tax reduction, i.e. ROT, RUT, or Green Technology, applications work differently.\n When creating an application for Green Technology, the field <em>TaxReductionAmounts</em> becomes mandatory as\n it is used to determine how much of the asked amount is intended for which type of work. Similarly, the <em>AskedAmount</em>\n field of the <em>TaxReduction</em> becomes optional, as it will always be considered to be equal to the sum of the <em>TaxReductionAmounts</em>.\n\n For the other types, ROT and RUT, this field is not required and should be omitted.\n\n Unlike earlier iterations of this endpoint, specifying the type of reduction for the provided <em>TaxReduction</em> (e.g. ROT, RUT, or Green)\n is not necessary as this value will always be equal to the type set on the provided document instead.\n\n This endpoint can raise a variety of validation errors, some of which are only relevant for Green Technology applications.\n Those errors will always return an HTTP Code of 400 and include, but are not limited to, those shown below:\n\n <table>\n     <caption>Errors that can be raised by this endpoint.</caption>\n     <tr>\n         <th>Error Code</th>\n         <th>Types</th>\n         <th>Description</th>\n         <th>Solution</th>\n     </tr>\n     <tr>\n         <td>2000600</td>\n         <td>ROT, RUT, GREEN</td>\n         <td>The provided Social Security Number is already in use for this document.</td>\n         <td>Verify that the Social Security Number is different from any other applicants already added.</td>\n     </tr>\n     <tr>\n         <td>2004217, 2004218</td>\n         <td>ROT, RUT, GREEN</td>\n         <td>The total asked amount of the application is either in an invalid format or is negative.</td>\n         <td>Verify that the <em>AskedAmount</em>-field is a positive number (0 is valid for Green Technology) and that it is an integer.</td>\n     </tr>\n     <tr>\n         <td>2004209</td>\n         <td>GREEN</td>\n         <td>The <em>WorkType</em>-field contains a work type that is not valid for the given type of reduction.</td>\n         <td>Ensure that the <em>WorkType</em> contains a valid type of work for Green Technology.</td>\n     </tr>\n     <tr>\n         <td>2004263</td>\n         <td>GREEN</td>\n         <td>The <em>TaxReductionAmounts</em>-field is missing for a Green Technology application.</td>\n         <td>Ensure that the field is included, that it is an array, and that each contained object denotes a specific type's asked amount.</td>\n     </tr>\n     <tr>\n         <td>2004262</td>\n         <td>GREEN</td>\n         <td>There are more than one object denoting the asked amount for the same type in the <em>TaxReductionAmounts</em>-field.</td>\n         <td>Ensure that there is only one object denoting the asked amount per type contained in the array.</td>\n     </tr>\n </table>",
    "tags": [
      "fortnox_TaxReductions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create tax reduction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_TaxReductionCreatePayload_Wrap",
      "type": "object",
      "required": [
        "TaxReduction"
      ],
      "properties": {
        "TaxReduction": {
          "reference": "fortnox_TaxReductionCreatePayload",
          "type": "object",
          "required": [
            "AskedAmount",
            "CustomerName",
            "ReferenceDocumentType",
            "ReferenceNumber",
            "SocialSecurityNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TaxReductionController_doDelete",
    "method": "DELETE",
    "path": "/3/taxreductions/{Id}",
    "summary": "Remove a tax reduction",
    "description": "Delete a tax reduction",
    "tags": [
      "fortnox_TaxReductions"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the tax reduction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TaxReductionController_doIndex",
    "method": "GET",
    "path": "/3/taxreductions",
    "summary": "Retrieve a list of tax reductions",
    "description": "Get tax reductions",
    "tags": [
      "fortnox_TaxReductions"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "filter",
        "required": false,
        "description": "possibility to filter tax reductions"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TaxReductionController_doShow",
    "method": "GET",
    "path": "/3/taxreductions/{Id}",
    "summary": "Retrieve a single tax reduction",
    "description": "Retrieve a tax reduction",
    "tags": [
      "fortnox_TaxReductions"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the tax reduction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TaxReductionController_doUpdate",
    "method": "PUT",
    "path": "/3/taxreductions/{Id}",
    "summary": "Update a tax reduction",
    "description": "Update a tax reduction",
    "tags": [
      "fortnox_TaxReductions"
    ],
    "pathParameters": [
      {
        "name": "Id",
        "required": true,
        "description": "identifies the tax reduction"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update tax reduction",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_TaxReductionUpdatePayload_Wrap",
      "type": "object",
      "required": [
        "TaxReduction"
      ],
      "properties": {
        "TaxReduction": {
          "reference": "fortnox_TaxReductionUpdatePayload",
          "type": "object",
          "required": [
            "AskedAmount",
            "CustomerName",
            "ReferenceDocumentType",
            "ReferenceNumber",
            "SocialSecurityNumber"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfDeliveryController_doCreate",
    "method": "POST",
    "path": "/3/termsofdeliveries",
    "summary": "Create a terms of delivery",
    "description": "Create a terms of delivery",
    "tags": [
      "fortnox_TermsOfDeliveries"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create terms of delivery",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_TermsOfDeliverySinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "TermsOfDelivery"
      ],
      "properties": {
        "TermsOfDelivery": {
          "reference": "fortnox_Kf_TermsOfDeliverySinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfDeliveryController_doIndex",
    "method": "GET",
    "path": "/3/termsofdeliveries",
    "summary": "Retrieve a list of terms of deliveries",
    "description": "The terms of deliveries register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_TermsOfDeliveries"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfDeliveryController_doShow",
    "method": "GET",
    "path": "/3/termsofdeliveries/{Code}",
    "summary": "Retrieve a single terms of delivery",
    "description": "Retrieve a terms of delivery",
    "tags": [
      "fortnox_TermsOfDeliveries"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the terms of delivery"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfDeliveryController_doUpdate",
    "method": "PUT",
    "path": "/3/termsofdeliveries/{Code}",
    "summary": "Update a terms of delivery",
    "description": "Update a terms of delivery",
    "tags": [
      "fortnox_TermsOfDeliveries"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the terms of delivery"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update terms of delivery",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Kf_TermsOfDeliverySinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "TermsOfDelivery"
      ],
      "properties": {
        "TermsOfDelivery": {
          "reference": "fortnox_Kf_TermsOfDeliverySinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfPaymentController_doCreate",
    "method": "POST",
    "path": "/3/termsofpayments",
    "summary": "Create a term of payment",
    "description": "Create a terms of payment",
    "tags": [
      "fortnox_TermsOfPayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create terms of payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_TermsOfPaymentSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "TermsOfPayment"
      ],
      "properties": {
        "TermsOfPayment": {
          "reference": "fortnox_TermsOfPaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfPaymentController_doDelete",
    "method": "DELETE",
    "path": "/3/termsofpayments/{Code}",
    "summary": "Remove a term of payment",
    "description": "Delete a terms of payment",
    "tags": [
      "fortnox_TermsOfPayments"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the terms of payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfPaymentController_doIndex",
    "method": "GET",
    "path": "/3/termsofpayments",
    "summary": "Retrieve a list of all terms of payments",
    "description": "Get terms of payments",
    "tags": [
      "fortnox_TermsOfPayments"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfPaymentController_doShow",
    "method": "GET",
    "path": "/3/termsofpayments/{Code}",
    "summary": "Retrieve a single terms of payment",
    "description": "Retrieve a terms of payment",
    "tags": [
      "fortnox_TermsOfPayments"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the terms of payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "TermsOfPaymentController_doUpdate",
    "method": "PUT",
    "path": "/3/termsofpayments/{Code}",
    "summary": "Update a term of payment",
    "description": "Update a terms of payment",
    "tags": [
      "fortnox_TermsOfPayments"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the term of payment"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update terms of payment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_TermsOfPaymentSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "TermsOfPayment"
      ],
      "properties": {
        "TermsOfPayment": {
          "reference": "fortnox_TermsOfPaymentSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "UnitController_doCreate",
    "method": "POST",
    "path": "/3/units",
    "summary": "Create a unit",
    "description": "Create an unit",
    "tags": [
      "fortnox_Units"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create unit",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_UnitSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "Unit"
      ],
      "properties": {
        "Unit": {
          "reference": "fortnox_UnitSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "UnitController_doDelete",
    "method": "DELETE",
    "path": "/3/units/{Code}",
    "summary": "Remove a unit",
    "description": "Delete an unit",
    "tags": [
      "fortnox_Units"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the unit"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "UnitController_doIndex",
    "method": "GET",
    "path": "/3/units",
    "summary": "Retrieve a list of units",
    "description": "The units register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_Units"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "UnitController_doShow",
    "method": "GET",
    "path": "/3/units/{Code}",
    "summary": "Retrieve a single unit",
    "description": "Retrieve an unit",
    "tags": [
      "fortnox_Units"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the unit"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "UnitController_doUpdate",
    "method": "PUT",
    "path": "/3/units/{Code}",
    "summary": "Update a unit",
    "description": "Update an unit",
    "tags": [
      "fortnox_Units"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "identifies the unit"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update unit",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_UnitSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "Unit"
      ],
      "properties": {
        "Unit": {
          "reference": "fortnox_UnitSinglePayloadItem",
          "type": "object",
          "required": [
            "Code",
            "Description"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "update",
    "method": "PUT",
    "path": "/api/warehouse/deliveries-v1/inbounddeliveries/{id}",
    "summary": "Update manual inbound document",
    "description": "",
    "tags": [
      "warehouse_ManualInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Inbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Manual Inbound document",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ManualInboundDocument",
      "type": "object",
      "required": [
        "currency",
        "currencyRate",
        "date",
        "rows"
      ],
      "properties": {
        "currency": {
          "type": "string"
        },
        "currencyRate": {
          "type": "number"
        },
        "currencyUnit": {
          "type": "integer",
          "format": "int32"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_ManualInboundDocumentRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "stockPointName": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "update_1",
    "method": "PUT",
    "path": "/api/warehouse/deliveries-v1/outbounddeliveries/{id}",
    "summary": "Update manual outbound document",
    "description": "<p>\n HTTP code 400 cannot_modify_released_document\n HTTP code 400 document_is_voided Document is voided.\n HTTP code 404 not found",
    "tags": [
      "warehouse_ManualOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Outbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Manual Outbound document.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ManualOutboundDocument",
      "type": "object",
      "required": [
        "date",
        "rows"
      ],
      "properties": {
        "date": {
          "type": "string",
          "format": "date"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_ManualOutboundDocumentRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "stockPointName": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "update_2",
    "method": "PUT",
    "path": "/api/warehouse/stocktaking-v1/{id}",
    "summary": "Update a stock taking",
    "description": "<p>\n Updates can only be done when state is <code>planning</code> or <code>started</code>.\n <p>\n All updatable fields (<code>date</code>, <code>name</code>, <code>responsible</code>,\n <code>state</code>, <code>sortingId</code>, <code>costCenterCode</code>, <code>projectId</code>)\n in the document head are set to supplied values.\n <p>\n You cannot set <code>state</code> to <code>completed</code> or <code>voided</code>. Use endpoints\n release or void for this.\n <p>\n The <code>date</code>-field is mandatory for documents in state <code>started</code>.\n <p>\n When state is <code>started</code> you use this endpoint for setting the stock taken quantity.\n Only existing rows can be updated - no new rows will be created (use the addRows endpoint for this).\n Only the supplied rows will be updated. I.e. you don't have to send in <strong>all</strong>\n document rows - just supply the rows you want to set stockTakenQuantity for. Just make sure\n to always include all the fields from the document head as mentioned above.\n <p>\n The mandatory fields on the (optionally supplied) rows are: <code>itemId</code>,\n <code>stockPointId</code>, <code>stockLocationId</code>.\n Fields <code>countedBy</code> and <code>stockTakenQuantity</code> are technically\n not mandatory, but will be set to null if you don't supply them.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "stock taking",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_StockTaking",
      "type": "object",
      "required": [
        "name",
        "responsible",
        "state"
      ],
      "properties": {
        "costCenterCode": {
          "type": "string"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "responsible": {
          "type": "string"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_StockTakingRow"
          }
        },
        "sortParams": {
          "reference": "warehouse_StockTakingSortParams",
          "type": "object"
        },
        "sortingId": {
          "type": "integer",
          "format": "int32"
        },
        "state": {
          "type": "string"
        },
        "usingStockPoints": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "update_3",
    "method": "PUT",
    "path": "/api/warehouse/stockpoints-v1/{id}",
    "summary": "Update stock point",
    "description": "<p>\n Remember to supply the complete representation of stock point including stock locations.",
    "tags": [
      "warehouse_StockPoint"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "complete representation of stock point including stock locations.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_StockPoint",
      "type": "object",
      "required": [
        "code",
        "name"
      ],
      "properties": {
        "active": {
          "type": "boolean"
        },
        "code": {
          "type": "string"
        },
        "deliveryAddress": {
          "type": "string"
        },
        "deliveryAddress2": {
          "type": "string"
        },
        "deliveryCity": {
          "type": "string"
        },
        "deliveryCountryCode": {
          "type": "string"
        },
        "deliveryName": {
          "type": "string"
        },
        "deliveryPhone": {
          "type": "string"
        },
        "deliveryZipCode": {
          "type": "string"
        },
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "name": {
          "type": "string"
        },
        "stockLocations": {
          "type": "array",
          "items": {
            "reference": "warehouse_StockLocation"
          }
        },
        "usingCompanyAddress": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "update_4",
    "method": "PUT",
    "path": "/api/warehouse/stocktransfer-v1/{id}",
    "summary": "Update a stock transfer document",
    "description": "",
    "tags": [
      "warehouse_StockTransfer"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Transfer document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The <code>StockTransferDocument</code> document.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_StockTransferDocument",
      "type": "object",
      "required": [
        "rows"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "note": {
          "type": "string"
        },
        "released": {
          "type": "boolean"
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_StockTransferRow"
          }
        },
        "transferDate": {
          "type": "string",
          "format": "date"
        },
        "version": {
          "type": "integer",
          "format": "int64"
        },
        "voided": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "update_5",
    "method": "PUT",
    "path": "/api/warehouse/productionorders-v1/{id}",
    "summary": "Update a production order",
    "description": "<p>\n Note that you must submit the full Production Order document\n when updating.",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Production Order document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "the production order data see <code>ProductionOrder</code>",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ProductionOrder",
      "type": "object",
      "required": [
        "productionState",
        "quantity",
        "startDate"
      ],
      "properties": {
        "batch": {
          "type": "string"
        },
        "costCenterCode": {
          "type": "string"
        },
        "documentState": {
          "type": "string",
          "enum": [
            "completed",
            "voided"
          ]
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "inboundStockLocationId": {
          "type": "string",
          "format": "uuid"
        },
        "inboundStockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "itemDescription": {
          "type": "string"
        },
        "itemId": {
          "type": "string"
        },
        "itemUnit": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "outboundStockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "packageItems": {
          "type": "array",
          "items": {
            "reference": "warehouse_PackageItem"
          }
        },
        "productionDate": {
          "type": "string",
          "format": "date"
        },
        "productionState": {
          "type": "string",
          "enum": [
            "registered",
            "reserved",
            "ongoing"
          ]
        },
        "projectId": {
          "type": "string"
        },
        "quantity": {
          "type": "number"
        },
        "startDate": {
          "type": "string",
          "format": "date"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "update_6",
    "method": "PUT",
    "path": "/api/warehouse/purchaseorders-v1/{id}",
    "summary": "Update Purchase Order",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The <code>PurchaseOrder</code> document.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_PurchaseOrder",
      "type": "object",
      "required": [
        "currencyCode",
        "currencyRate",
        "deliveryAddress",
        "deliveryCity",
        "deliveryName",
        "deliveryZipCode",
        "orderDate",
        "paymentTermsCode",
        "supplierNumber"
      ],
      "properties": {
        "confirmationEmail": {
          "type": "string"
        },
        "costCenterCode": {
          "type": "string"
        },
        "currencyCode": {
          "type": "string"
        },
        "currencyRate": {
          "type": "number"
        },
        "currencyUnit": {
          "type": "integer",
          "format": "int32"
        },
        "customerId": {
          "type": "string"
        },
        "customerName": {
          "type": "string"
        },
        "customerNumber": {
          "type": "string"
        },
        "deliveryAddress": {
          "type": "string"
        },
        "deliveryAddress2": {
          "type": "string"
        },
        "deliveryCity": {
          "type": "string"
        },
        "deliveryCountryCode": {
          "type": "string"
        },
        "deliveryDate": {
          "type": "string",
          "format": "date"
        },
        "deliveryName": {
          "type": "string"
        },
        "deliveryZipCode": {
          "type": "string"
        },
        "dropship": {
          "type": "boolean"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "internalReference": {
          "type": "string"
        },
        "languageCode": {
          "type": "string"
        },
        "manuallyCompleted": {
          "type": "boolean"
        },
        "messageToSupplier": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "orderDate": {
          "type": "string",
          "format": "date"
        },
        "orderValue": {
          "type": "number"
        },
        "orderValueInSEK": {
          "type": "number"
        },
        "ourReference": {
          "type": "string"
        },
        "outboundDocumentReference": {
          "reference": "warehouse_DocumentReference",
          "type": "object"
        },
        "paymentTermsCode": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "purchaseOrderState": {
          "type": "string",
          "enum": [
            "NOT_SENT",
            "SENT",
            "SENT_NOT_REJECTED",
            "DELAYED",
            "RECEIVED",
            "VOIDED",
            "CURRENT",
            "ALL"
          ]
        },
        "purchaseType": {
          "type": "string",
          "enum": [
            "WAREHOUSE",
            "DROPSHIP"
          ]
        },
        "responseState": {
          "type": "string",
          "enum": [
            "NOT_SENT",
            "SENT",
            "ACCEPTED_WITH_REQ_DLV_DATE",
            "ACCEPTED_WITH_CHANGED_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE",
            "REJECTED"
          ]
        },
        "rows": {
          "type": "array",
          "items": {
            "reference": "warehouse_PurchaseOrderRow"
          }
        },
        "stockPointCode": {
          "type": "string"
        },
        "stockPointId": {
          "type": "string",
          "format": "uuid"
        },
        "supplier": {
          "type": "string"
        },
        "supplierAddress": {
          "type": "string"
        },
        "supplierAddress2": {
          "type": "string"
        },
        "supplierCity": {
          "type": "string"
        },
        "supplierCountryCode": {
          "type": "string"
        },
        "supplierEmail": {
          "type": "string"
        },
        "supplierName": {
          "type": "string"
        },
        "supplierNumber": {
          "type": "string"
        },
        "supplierPostCode": {
          "type": "string"
        },
        "totalReceivedQuantity": {
          "type": "number"
        },
        "translatedResponseState": {
          "type": "string"
        },
        "voided": {
          "type": "boolean"
        },
        "yourReference": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updateAttachment",
    "method": "PUT",
    "path": "/api/fileattachments/attachments-v1/{attachmentId}",
    "summary": "Update attachment",
    "description": "",
    "tags": [
      "fileattachments_Attachment"
    ],
    "pathParameters": [
      {
        "name": "attachmentId",
        "required": true,
        "description": "id of the attachment to be updated"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "an attachment",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fileattachments_Attachment",
      "type": "object",
      "properties": {
        "entityId": {
          "type": "integer",
          "format": "int64"
        },
        "entityType": {
          "type": "string",
          "enum": [
            "OF",
            "O",
            "F",
            "C",
            "LGR_IO",
            "LGR_IG"
          ]
        },
        "fileId": {
          "type": "string"
        },
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "includeOnSend": {
          "type": "boolean"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updateNote",
    "method": "PATCH",
    "path": "/api/warehouse/deliveries-v1/inbounddeliveries/{id}",
    "summary": "Update note on manual inbound document",
    "description": "<p>\n When a Manual Inbound has been released, it is locked.\n The <code>note</code> field can still be updated using this endpoint.",
    "tags": [
      "warehouse_ManualInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Inbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Note.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ManualInboundDocumentPatch",
      "type": "object",
      "properties": {
        "note": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "updateNote_1",
    "method": "PATCH",
    "path": "/api/warehouse/deliveries-v1/outbounddeliveries/{id}",
    "summary": "Update note on manual outbound document",
    "description": "<p>\n When a Manual Outbound has been released, it is locked.\n The <code>note</code> field can still be updated using this endpoint.",
    "tags": [
      "warehouse_ManualOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Outbound document id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Note.",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ManualOutboundDocumentPatch",
      "type": "object",
      "properties": {
        "note": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "updateNote_2",
    "method": "PATCH",
    "path": "/api/warehouse/productionorders-v1/{id}",
    "summary": "Update the note of a production order",
    "description": "<p>\n When a Production Order has been released it is locked.\n However, the <code>note</code> field can still be updated using this endpoint.",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Production Order document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "contains data to be patched onto the production order",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ProductionOrderPatch",
      "type": "object",
      "properties": {
        "note": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updateOrder",
    "method": "PATCH",
    "path": "/api/bank-process-orders/v1/{order_id}",
    "summary": "Modify an order",
    "description": "Modify an order",
    "tags": [
      "Company-Order-Bank-Process-API_CompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": true,
    "requestBodyDescription": "Update order payload",
    "requestContentTypes": [
      "application/json-patch+json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Company-Order-Bank-Process-API_UpdateOrderRequest",
      "type": "object",
      "required": [
        "status"
      ],
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "DENIED"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updatePartial",
    "method": "PATCH",
    "path": "/api/warehouse/purchaseorders-v1/{id}/partial",
    "summary": "Partial update Purchase Order",
    "description": "<p>\n Perform a partial update of a purchase order, see <code>PartialPurchaseOrder</code> for possible\n fields that are updateable.",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "the changes for the purchase order, see <code>PartialPurchaseOrder</code>",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_PartialPurchaseOrder",
      "type": "object",
      "properties": {
        "deliveryDate": {
          "type": "string",
          "format": "date"
        },
        "internalReference": {
          "type": "string"
        },
        "messageToSupplier": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "supplierName": {
          "type": "string"
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updateRecurring",
    "method": "PUT",
    "path": "/api/recurring-billing/recurrings-v1/{recurring-id}",
    "summary": "Update a Recurring by ID",
    "description": "Replaces the editable fields of an existing recurring with the supplied representation. The `If-Match` (ETag) header is mandatory for optimistic concurrency control: requests without it are rejected with `428`, and requests whose ETag no longer matches the current recurring are rejected with `412`. The current ETag is returned by GET and by every successful mutation. The optional `If-Unmodified-Since` header may be supplied as an additional check.",
    "tags": [
      "Recurring-API_Recurrings"
    ],
    "pathParameters": [
      {
        "name": "recurring-id",
        "required": true,
        "description": "The unique identifier of the recurring contract to update."
      }
    ],
    "headerParameters": [
      {
        "name": "If-Match",
        "required": true,
        "description": "Required strong ETag for optimistic concurrency control; standard comma-separated If-Match lists are also accepted. Requests without this header are rejected with 428."
      },
      {
        "name": "If-Unmodified-Since",
        "required": false,
        "description": "Optional expected Last-Modified value for optimistic concurrency control, formatted as an RFC 1123 date in GMT. Evaluated only after If-Match succeeds."
      }
    ],
    "queryParameters": [],
    "requestBodyRequired": true,
    "requestBodyDescription": "",
    "requestContentTypes": [
      "application/json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Recurring-API_UpdateRecurring",
      "description": "Full representation of the recurring object. All fields must be supplied. Data not sent is deleted.",
      "allOf": [
        {
          "reference": "Recurring-API_BaseRecurring",
          "type": "object"
        },
        {
          "type": "object",
          "required": [
            "status",
            "dates",
            "amount_per_invoicing",
            "invoice_handling",
            "customer",
            "tax_reduction_category"
          ],
          "properties": {
            "accrual": {
              "reference": "Recurring-API_UpdateAccrual"
            },
            "dates": {
              "reference": "Recurring-API_UpdateRecurringDates"
            },
            "rows": {
              "type": "array",
              "description": "The line items of the recurring. Replaces the existing rows."
            },
            "tax_reductions": {
              "type": "array",
              "description": "Tax reduction records for the recurring, one per applicant. Replaces the existing set."
            }
          }
        }
      ]
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updateResponseState",
    "method": "PUT",
    "path": "/api/warehouse/purchaseorders-v1/{id}/response",
    "summary": "Update response state",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "The new response state.",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "warehouse_ResponseStateChange",
      "type": "object",
      "properties": {
        "responseState": {
          "type": "string",
          "enum": [
            "NOT_SENT",
            "SENT",
            "ACCEPTED_WITH_REQ_DLV_DATE",
            "ACCEPTED_WITH_CHANGED_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_REQ_DLV_DATE",
            "PARTLY_ACCEPTED_WITH_CHANGED_DLV_DATE",
            "REJECTED"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updateStartOrder",
    "method": "PATCH",
    "path": "/api/bank-process-start-orders/v1/{order_id}",
    "summary": "Modify an order",
    "description": "Modify an order",
    "tags": [
      "Company-Order-Bank-Process-API_StartCompanyOrderBankProcess"
    ],
    "pathParameters": [
      {
        "name": "order_id",
        "required": true,
        "description": "ID of order to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": true,
    "requestBodyDescription": "Update order payload",
    "requestContentTypes": [
      "application/json-patch+json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Company-Order-Bank-Process-API_UpdateStartOrderRequest",
      "type": "object",
      "properties": {
        "share_capital_received_date": {
          "type": "string",
          "format": "date",
          "description": "The date when the share capital was received."
        },
        "status": {
          "type": "string",
          "enum": [
            "DENIED",
            "CANCELLED"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "updateWebhook",
    "method": "PATCH",
    "path": "/api/bank-process-webhooks/v1/{webhook_id}",
    "summary": "Updates a webhook",
    "description": "Updates fields on a previously registered webhook. Use this endpoint to rotate the shared secret.",
    "tags": [
      "Company-Order-Bank-Process-Webhook-API_BankProcessWebhook"
    ],
    "pathParameters": [
      {
        "name": "webhook_id",
        "required": true,
        "description": "ID of the webhook to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": true,
    "requestBodyDescription": "Fields to update on the webhook. At least one field must be supplied.",
    "requestContentTypes": [
      "application/json",
      "application/json-patch+json"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "Company-Order-Bank-Process-Webhook-API_UpdateWebhook",
      "allOf": [
        {
          "reference": "Company-Order-Bank-Process-Webhook-API_WebhookFields",
          "type": "object"
        },
        {
          "type": "object"
        }
      ]
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VacationDebtBasisController_doShow",
    "method": "GET",
    "path": "/3/vacationdebtbasis/{Year}/{Month}",
    "summary": "Retrieve a specific vacation debt basis for a posted voucher",
    "description": "Retrieve a vacation debt basis",
    "tags": [
      "fortnox_VacationDebtBasis"
    ],
    "pathParameters": [
      {
        "name": "Year",
        "required": true,
        "description": "Id of vacation debt basis to show"
      },
      {
        "name": "Month",
        "required": true,
        "description": "Month of vacation debt basis to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "validateIncludedOnSend",
    "method": "POST",
    "path": "/api/fileattachments/attachments-v1/validateincludedonsend",
    "summary": "Validates a list of attachments that will be included on send",
    "description": "",
    "tags": [
      "fileattachments_Attachment"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "a list of Attachments",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "type": "array",
      "items": {
        "reference": "fileattachments_Attachment",
        "type": "object",
        "properties": {
          "entityId": {
            "type": "integer",
            "format": "int64"
          },
          "entityType": {
            "type": "string",
            "enum": [
              "OF",
              "O",
              "F",
              "C",
              "LGR_IO",
              "LGR_IG"
            ]
          },
          "fileId": {
            "type": "string"
          },
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "includeOnSend": {
            "type": "boolean"
          }
        }
      }
    },
    "responseContentTypes": []
  },
  {
    "operationId": "voidDocument",
    "method": "PUT",
    "path": "/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void",
    "summary": "Void manual inbound document",
    "description": "<p>\n A released manual inbound document might have connected outbounds, and can only be force voided.\n Note that a force void operation might cause a negative stock.\n <p>\n The following error codes might be thrown:\n  <dl>\n  <dt>void_linked_outbound</dt>\n    <dd>If this document has any outbounds transactions connected to it.</dd>\n  </dl>",
    "tags": [
      "warehouse_ManualInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Inbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "force",
        "required": false,
        "description": "true if we should force void, defaults to false"
      },
      {
        "name": "customVoidDate",
        "required": false,
        "description": "date the void operation should be bookkeept on"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidDocument_1",
    "method": "PUT",
    "path": "/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void",
    "summary": "Void manual outbound document",
    "description": "",
    "tags": [
      "warehouse_ManualOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Manual Outbound document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "customVoidDate",
        "required": false,
        "description": "if provided this date will be used as the voided date instead of the document date"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidDocument_2",
    "method": "PUT",
    "path": "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void",
    "summary": "Void custom inbound document",
    "description": "Voiding a document will undo the possible stock changes that the document had made,\n note that the document and the transactions created are not deleted. Some limitations apply, see below.",
    "tags": [
      "warehouse_CustomInboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "document type"
      },
      {
        "name": "id",
        "required": true,
        "description": "document id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "force",
        "required": false,
        "description": "true if the document should be voided even if the document has connected outbounds, defaults to false."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidDocument_3",
    "method": "PUT",
    "path": "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void",
    "summary": "Void custom outbound document",
    "description": "",
    "tags": [
      "warehouse_CustomOutboundDocument"
    ],
    "pathParameters": [
      {
        "name": "type",
        "required": true,
        "description": "document type"
      },
      {
        "name": "id",
        "required": true,
        "description": "document id"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "force",
        "required": false,
        "description": "true if the document should be voided even if the document has connected outbounds, defaults to false."
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidDocument_4",
    "method": "PUT",
    "path": "/api/warehouse/incominggoods-v1/{id}/void",
    "summary": "Void Incoming Goods document",
    "description": "Void a document.\n If an Incoming Goods document has been Completed, or matched against\n Supplier Invoice, it cannot be voided.",
    "tags": [
      "warehouse_IncomingGoods"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Incoming goods document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidDocument_5",
    "method": "PUT",
    "path": "/api/warehouse/purchaseorders-v1/{id}/void",
    "summary": "Void Purchase Order",
    "description": "",
    "tags": [
      "warehouse_PurchaseOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Purchase order id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidProductionOrder",
    "method": "PUT",
    "path": "/api/warehouse/productionorders-v1/void/{id}",
    "summary": "Void a production order",
    "description": "<p>\n A released production order might have connected outbounds, and can only be force voided.\n Note that a force void operation might cause a negative stock.",
    "tags": [
      "warehouse_ProductionOrder"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Production Order document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "force",
        "required": false,
        "description": "true to force void a released document, default false"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidStockTaking",
    "method": "PUT",
    "path": "/api/warehouse/stocktaking-v1/{id}/void",
    "summary": "Void Stock Taking document",
    "description": "<p>\n Sets the Stock Taking document state to <code>voided</code>.\n <p>\n Only documents in state <code>planning</code> and <code>started</code>\n can be voided. A <code>completed</code> document may not be voided.",
    "tags": [
      "warehouse_StockTaking"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Taking document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "voidStockTransfer",
    "method": "PUT",
    "path": "/api/warehouse/stocktransfer-v1/{id}/void",
    "summary": "Void a stock transfer document",
    "description": "<p>\n Voiding a released stock transfer document is not allowed, and\n will return <code>cannot_modify_released_document</code>",
    "tags": [
      "warehouse_StockTransfer"
    ],
    "pathParameters": [
      {
        "name": "id",
        "required": true,
        "description": "Stock Transfer document id."
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "force",
        "required": false,
        "description": ""
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": []
  },
  {
    "operationId": "VoucherController_doCreate",
    "method": "POST",
    "path": "/3/vouchers",
    "summary": "Create a voucher",
    "description": "The created voucher will be returned if everything succeeded, if there were any problems an error will be returned.\n If no query param is used the voucher will be created in the preselected financial year. Go to the financialyears endpoint to read on how to retreive the Financial year id.",
    "tags": [
      "fortnox_Vouchers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "financialyear",
        "required": false,
        "description": "Financial year id, used to determine which financial year the voucher is created in"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create voucher",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Bf_VoucherSinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "Voucher": {
          "reference": "fortnox_Bf_VoucherSinglePayloadItem",
          "type": "object",
          "required": [
            "Description",
            "TransactionDate",
            "VoucherSeries",
            "Year"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherController_doIndex",
    "method": "GET",
    "path": "/3/vouchers",
    "summary": "Retrieve all vouchers",
    "description": "Note that vouchers have two keys, one for voucher series and one for voucher number. The financial year is also specified for each voucher, this is due to the same voucher series and number is used each year.\n To get a unique voucher you need the voucher series, the voucher number and the financial year. These properties will always be returned where ever vouchers is used.",
    "tags": [
      "fortnox_Vouchers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "costcenter",
        "required": false,
        "description": "filter on cost center"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter on last modified date"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter on from date"
      },
      {
        "name": "todate",
        "required": false,
        "description": "filter on to date"
      },
      {
        "name": "voucherseries",
        "required": false,
        "description": "filter on voucher series"
      },
      {
        "name": "financialyear",
        "required": false,
        "description": "filter on financial year"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherController_doShow",
    "method": "GET",
    "path": "/3/vouchers/{VoucherSeries}/{VoucherNumber}",
    "summary": "Retrieve a specific voucher",
    "description": "Retrieve a voucher",
    "tags": [
      "fortnox_Vouchers"
    ],
    "pathParameters": [
      {
        "name": "VoucherSeries",
        "required": true,
        "description": "identifies the voucher series"
      },
      {
        "name": "VoucherNumber",
        "required": true,
        "description": "identifies the voucher number"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "financialyear",
        "required": false,
        "description": "filter on financial year"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherController_doSubList",
    "method": "GET",
    "path": "/3/vouchers/sublist",
    "summary": "Retrieve all vouchers for the current financial year",
    "description": "Get vouchers",
    "tags": [
      "fortnox_Vouchers"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "costcenter",
        "required": false,
        "description": "filter on cost center"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter on last modified date"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter on from date"
      },
      {
        "name": "todate",
        "required": false,
        "description": "filter on to date"
      },
      {
        "name": "voucherseries",
        "required": false,
        "description": "filter on voucher series"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherController_doSublistWithParam",
    "method": "GET",
    "path": "/3/vouchers/sublist/{VoucherSeries}",
    "summary": "Retrieve a list of vouchers for a specific series",
    "description": "Get vouchers",
    "tags": [
      "fortnox_Vouchers"
    ],
    "pathParameters": [
      {
        "name": "VoucherSeries",
        "required": true,
        "description": "Voucher series of vouchers to list"
      }
    ],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "costcenter",
        "required": false,
        "description": "filter on cost center"
      },
      {
        "name": "lastmodified",
        "required": false,
        "description": "filter on last modified date"
      },
      {
        "name": "fromdate",
        "required": false,
        "description": "filter on from date"
      },
      {
        "name": "todate",
        "required": false,
        "description": "filter on to date"
      },
      {
        "name": "financialyear",
        "required": false,
        "description": "filter on financial year"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherFileConnectionController_doCreate",
    "method": "POST",
    "path": "/3/voucherfileconnections",
    "summary": "Create a voucher file connection",
    "description": "Create a voucher file connection",
    "tags": [
      "fortnox_VoucherFileConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create voucher file connection",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Da_VoucherFileConnectionSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "VoucherFileConnection"
      ],
      "properties": {
        "VoucherFileConnection": {
          "reference": "fortnox_Da_VoucherFileConnectionSinglePayloadItem",
          "type": "object",
          "required": [
            "FileId",
            "VoucherNumber",
            "VoucherSeries"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherFileConnectionController_doDelete",
    "method": "DELETE",
    "path": "/3/voucherfileconnections/{FileId}",
    "summary": "Remove a voucher file connection",
    "description": "Delete a voucher file connection",
    "tags": [
      "fortnox_VoucherFileConnections"
    ],
    "pathParameters": [
      {
        "name": "FileId",
        "required": true,
        "description": "identifies the voucher file connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherFileConnectionController_doIndex",
    "method": "GET",
    "path": "/3/voucherfileconnections",
    "summary": "Retrieve a list of voucher file connections",
    "description": "The voucher file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.",
    "tags": [
      "fortnox_VoucherFileConnections"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [
      {
        "name": "voucheryear",
        "required": false,
        "description": "Voucheryear of voucher file connections to list"
      },
      {
        "name": "voucherdescription",
        "required": false,
        "description": "Voucherdescription of voucher file connections to list"
      },
      {
        "name": "vouchernumber",
        "required": false,
        "description": "Vouchernumber of voucher file connections to list"
      },
      {
        "name": "voucherseries",
        "required": false,
        "description": "Voucherseries of voucher file connections to list"
      }
    ],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherFileConnectionController_doShow",
    "method": "GET",
    "path": "/3/voucherfileconnections/{FileId}",
    "summary": "Retrieve a single voucher file connection",
    "description": "Retrieve a voucher file connection",
    "tags": [
      "fortnox_VoucherFileConnections"
    ],
    "pathParameters": [
      {
        "name": "FileId",
        "required": true,
        "description": "identifies the voucher file connection"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherSeriesController_doCreate",
    "method": "POST",
    "path": "/3/voucherseries",
    "summary": "Create a voucher series",
    "description": "Create a voucher series",
    "tags": [
      "fortnox_VoucherSeries"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create voucher series",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Bf_VoucherSeriesSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "VoucherSeries"
      ],
      "properties": {
        "VoucherSeries": {
          "reference": "fortnox_Bf_VoucherSeriesSinglePayloadItem",
          "type": "object",
          "required": [
            "Code"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherSeriesController_doIndex",
    "method": "GET",
    "path": "/3/voucherseries",
    "summary": "Retrieve a list of voucher series",
    "description": "The voucher series register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_VoucherSeries"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherSeriesController_doShow",
    "method": "GET",
    "path": "/3/voucherseries/{Code}",
    "summary": "Retrieve a single voucher series",
    "description": "Retrieve a voucher series",
    "tags": [
      "fortnox_VoucherSeries"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of voucher series to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "VoucherSeriesController_doUpdate",
    "method": "PUT",
    "path": "/3/voucherseries/{Code}",
    "summary": "Update a voucher series",
    "description": "Update a voucher series",
    "tags": [
      "fortnox_VoucherSeries"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of voucher series to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update voucher series",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_Bf_VoucherSeriesSinglePayloadItem_Wrap",
      "type": "object",
      "required": [
        "VoucherSeries"
      ],
      "properties": {
        "VoucherSeries": {
          "reference": "fortnox_Bf_VoucherSeriesSinglePayloadItem",
          "type": "object",
          "required": [
            "Code"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "WayOfDeliveryController_doCreate",
    "method": "POST",
    "path": "/3/wayofdeliveries",
    "summary": "Create a way of delivery",
    "description": "Create a way of delivery",
    "tags": [
      "fortnox_WayOfDeliveries"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for create way of delivery",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_WayOfDeliverySinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "WayOfDelivery": {
          "reference": "fortnox_WayOfDeliverySinglePayloadItem",
          "type": "object",
          "required": [
            "Code"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "WayOfDeliveryController_doDelete",
    "method": "DELETE",
    "path": "/3/wayofdeliveries/{Code}",
    "summary": "Remove a way of delivery",
    "description": "Delete a way of delivery",
    "tags": [
      "fortnox_WayOfDeliveries"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of way of delivery to delete"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "WayOfDeliveryController_doIndex",
    "method": "GET",
    "path": "/3/wayofdeliveries",
    "summary": "Retrieve a list of way of deliveries",
    "description": "The way of delivery register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.",
    "tags": [
      "fortnox_WayOfDeliveries"
    ],
    "pathParameters": [],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "WayOfDeliveryController_doShow",
    "method": "GET",
    "path": "/3/wayofdeliveries/{Code}",
    "summary": "Retrieve a single way of delivery",
    "description": "Retrieve a way of delivery",
    "tags": [
      "fortnox_WayOfDeliveries"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of way of delivery to show"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "",
    "requestContentTypes": [],
    "requestEncoding": {},
    "responseContentTypes": [
      "application/json"
    ]
  },
  {
    "operationId": "WayOfDeliveryController_doUpdate",
    "method": "PUT",
    "path": "/3/wayofdeliveries/{Code}",
    "summary": "Update a way of delivery",
    "description": "Update a way of delivery",
    "tags": [
      "fortnox_WayOfDeliveries"
    ],
    "pathParameters": [
      {
        "name": "Code",
        "required": true,
        "description": "Code of way of delivery to update"
      }
    ],
    "headerParameters": [],
    "queryParameters": [],
    "requestBodyRequired": false,
    "requestBodyDescription": "Request body for update way of delivery",
    "requestContentTypes": [
      "*/*"
    ],
    "requestEncoding": {},
    "requestBodySchema": {
      "reference": "fortnox_WayOfDeliverySinglePayloadItem_Wrap",
      "type": "object",
      "properties": {
        "WayOfDelivery": {
          "reference": "fortnox_WayOfDeliverySinglePayloadItem",
          "type": "object",
          "required": [
            "Code"
          ]
        }
      }
    },
    "responseContentTypes": [
      "application/json"
    ]
  }
] as const;
