import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, mkdir, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import axios from "axios";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { initializeTokenProvider } from "../dist/auth/index.js";
import { registerFortnoxApiTools } from "../dist/tools/api.js";
import { enableLocalCompanyRouting } from "../dist/tools/localCompanies.js";

const tools = new Map();
registerFortnoxApiTools({
  registerTool(name, config, handler) {
    tools.set(name, { config, handler });
  },
});

initializeTokenProvider({
  async getAccessToken() {
    return "test-token";
  },
  isAuthenticated() {
    return true;
  },
  getTokenInfo() {
    return null;
  },
});

test("multipart file paths work locally without directory configuration", async (context) => {
  const temporaryDirectory = await mkdtemp(join(tmpdir(), "fortnox-upload-"));
  const uploadDirectory = join(temporaryDirectory, "uploads");
  const outsideDirectory = join(temporaryDirectory, "uploads-other");
  const originalAdapter = axios.defaults.adapter;
  const localTools = new Map();
  registerFortnoxApiTools(
    {
      registerTool(name, config, handler) {
        localTools.set(name, { config, handler });
      },
    },
    { allowLocalFileUploads: true },
  );
  const call = (file, registeredTools = localTools) =>
    registeredTools.get("fortnox_call_api_operation").handler({
      operation_id: "ArchiveController_doCreate",
      body: { file },
    });
  const requests = [];
  axios.defaults.adapter = async (config) => {
    requests.push(config);
    return {
      data: { ok: true },
      status: 200,
      statusText: "OK",
      headers: {},
      config,
    };
  };
  try {
    await mkdir(uploadDirectory);
    await mkdir(outsideDirectory);
    const filePath = join(uploadDirectory, "receipt.pdf");
    const outsidePath = join(outsideDirectory, "secret.pdf");
    const fileBytes = Buffer.from([0x25, 0x50, 0x44, 0x46, 0xff, 0x80]);
    await writeFile(filePath, fileBytes);
    await writeFile(outsidePath, fileBytes);

    const uploaded = await call({
      file_path: filePath,
      content_type: "application/pdf",
    });
    assert.equal(uploaded.isError, undefined);
    const uploadedFile = requests.at(-1).data.get("file");
    assert.equal(uploadedFile.name, "receipt.pdf");
    assert.equal(uploadedFile.type, "application/pdf");
    assert.deepEqual(Buffer.from(await uploadedFile.arrayBuffer()), fileBytes);

    await call({ file_path: filePath, filename: "renamed.pdf" });
    assert.equal(requests.at(-1).data.get("file").name, "renamed.pdf");
    await call(
      { filename: "base64.pdf", content_base64: fileBytes.toString("base64") },
      tools,
    );
    assert.deepEqual(
      Buffer.from(await requests.at(-1).data.get("file").arrayBuffer()),
      fileBytes,
    );

    const outsideUpload = await call({ file_path: outsidePath });
    assert.equal(outsideUpload.isError, undefined);
    assert.deepEqual(
      Buffer.from(await requests.at(-1).data.get("file").arrayBuffer()),
      fileBytes,
    );

    const beforeRejected = requests.length;
    for (const [file, registeredTools, message] of [
      [{ file_path: filePath }, tools, /only available over stdio/],
      [{ file_path: "relative.pdf" }, localTools, /absolute/],
      [
        { file_path: join(uploadDirectory, "missing.pdf") },
        localTools,
        /ENOENT/,
      ],
      [
        { file_path: filePath, content_base64: "", filename: "both.pdf" },
        localTools,
        /either/,
      ],
      [
        { filename: "bad.pdf", content_base64: "invalid" },
        localTools,
        /valid base64/,
      ],
      [
        { filename: "bad.pdf", content_base64: "AA=A" },
        localTools,
        /valid base64/,
      ],
      [
        { filename: "bad.pdf", content_base64: "====" },
        localTools,
        /valid base64/,
      ],
    ]) {
      const result = await call(file, registeredTools);
      assert.equal(result.isError, true);
      assert.match(result.content[0].text, message);
    }
    const subdirectory = join(uploadDirectory, "nested");
    await mkdir(subdirectory);
    assert.match(
      (await call({ file_path: subdirectory })).content[0].text,
      /regular file/,
    );
    assert.equal(requests.length, beforeRejected);
    const largeFile = join(uploadDirectory, "large.pdf");
    const largeFileBytes = Buffer.alloc(5 * 1024 * 1024 + 1, 0xab);
    await writeFile(largeFile, largeFileBytes);
    assert.equal((await call({ file_path: largeFile })).isError, undefined);
    assert.deepEqual(
      Buffer.from(await requests.at(-1).data.get("file").arrayBuffer()),
      largeFileBytes,
    );
    const largeBase64Upload = await call(
      {
        filename: "large.pdf",
        content_base64: largeFileBytes.toString("base64"),
      },
      tools,
    );
    assert.equal(
      largeBase64Upload.isError,
      undefined,
      largeBase64Upload.content[0].text,
    );
    assert.deepEqual(
      Buffer.from(await requests.at(-1).data.get("file").arrayBuffer()),
      largeFileBytes,
    );

    const symlinkPath = join(uploadDirectory, "link.pdf");
    try {
      await symlink(outsidePath, symlinkPath);
      assert.equal((await call({ file_path: symlinkPath })).isError, undefined);
      assert.deepEqual(
        Buffer.from(await requests.at(-1).data.get("file").arrayBuffer()),
        fileBytes,
      );
    } catch (error) {
      if (error.code !== "EPERM" && error.code !== "EACCES") throw error;
      context.diagnostic("Symlink test unavailable due to OS permissions");
    }
    axios.defaults.adapter = async (config) => {
      throw new axios.AxiosError(
        "Request failed",
        "ERR_BAD_REQUEST",
        config,
        {},
        {
          status: 413,
          data: { message: "Fortnox rejected file" },
        },
      );
    };
    const rejectedUpload = await call({ file_path: largeFile });
    assert.equal(rejectedUpload.isError, true);
    assert.match(rejectedUpload.content[0].text, /Fortnox rejected file/);
  } finally {
    axios.defaults.adapter = originalAdapter;
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
});

test("generic archive and inbox downloads preserve binary PDF bytes", async () => {
  const originalAdapter = axios.defaults.adapter;
  const pdf = Buffer.from([0x25, 0x50, 0x44, 0x46, 0x2d, 0xff, 0x80]);
  let responseType;
  axios.defaults.adapter = async (config) => {
    responseType = config.responseType;
    return {
      data: config.responseType === "arraybuffer" ? pdf : pdf.toString("utf8"),
      status: 200,
      statusText: "OK",
      headers: { "content-type": "application/pdf" },
      config,
    };
  };
  try {
    for (const [operation_id, path_parameters] of [
      ["ArchiveController_doShow", { id: "file-id" }],
      ["InboxController_doShow", { Id: "file-id" }],
    ]) {
      const result = await tools.get("fortnox_call_api_operation").handler({
        operation_id,
        path_parameters,
      });
      assert.equal(responseType, "arraybuffer", operation_id);
      assert.equal(
        result.structuredContent.data.content_type,
        "application/pdf",
      );
      assert.deepEqual(
        Buffer.from(result.structuredContent.data.data, "base64"),
        pdf,
      );
    }
  } finally {
    axios.defaults.adapter = originalAdapter;
  }
});

test("dedicated tools expose permissions and forward documented inputs", async () => {
  const originalAdapter = axios.defaults.adapter;
  const server = new McpServer({ name: "test", version: "1.0.0" });
  const client = new Client({ name: "test-client", version: "1.0.0" });
  registerFortnoxApiTools(server);
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const requests = [];
  const pdf = Buffer.from([0x25, 0x50, 0x44, 0x46, 0x2d, 0xff, 0x80]);
  axios.defaults.adapter = async (config) => {
    requests.push(config);
    let data = { records: [1] };
    let contentType = "application/json; charset=utf-8";
    if (config.url.endsWith("/3/archive/file%2Fid")) {
      data = pdf;
      contentType = "application/pdf";
    } else if (config.responseType === "arraybuffer") {
      data = Buffer.from(JSON.stringify(data));
    }
    return {
      data,
      status: 200,
      statusText: "OK",
      headers: { "content-type": contentType },
      config,
    };
  };
  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    const listed = await client.listTools();
    assert.equal(
      listed.tools.some((tool) => tool.name === "fortnox_call_api_operation"),
      true,
    );
    for (const name of [
      "fortnox_list_voucher_file_connections",
      "fortnox_list_archive",
      "fortnox_get_archive_file",
    ]) {
      assert.equal(
        listed.tools.find((tool) => tool.name === name).annotations
          .readOnlyHint,
        true,
      );
    }

    const connections = await client.callTool({
      name: "fortnox_list_voucher_file_connections",
      arguments: {
        voucher_year: 4,
        voucher_description: "test",
        voucher_number: 0,
        voucher_series: "A",
      },
    });
    assert.deepEqual(requests.at(-1).params, {
      voucheryear: 4,
      voucherdescription: "test",
      vouchernumber: 0,
      voucherseries: "A",
    });
    assert.deepEqual(connections.structuredContent.data, { records: [1] });

    await client.callTool({
      name: "fortnox_list_archive",
      arguments: { path: "receipts" },
    });
    assert.deepEqual(requests.at(-1).params, { path: "receipts" });

    const download = await client.callTool({
      name: "fortnox_get_archive_file",
      arguments: { id: "file/id", path: "receipts", file_id: "linked" },
    });
    assert.deepEqual(requests.at(-1).params, {
      path: "receipts",
      fileid: "linked",
    });
    assert.equal(requests.at(-1).headers.Accept, "*/*");
    assert.deepEqual(
      Buffer.from(download.structuredContent.data.data, "base64"),
      pdf,
    );
    assert.deepEqual(
      JSON.parse(download.content[0].text),
      download.structuredContent,
    );

    const json = await client.callTool({
      name: "fortnox_get_archive_file",
      arguments: { id: "folder" },
    });
    assert.deepEqual(json.structuredContent.data, { records: [1] });
    const invalid = await client.callTool({
      name: "fortnox_get_archive_file",
      arguments: { id: "" },
    });
    assert.equal(invalid.isError, true);
  } finally {
    await client.close();
    await server.close();
    axios.defaults.adapter = originalAdapter;
  }
});

test("dedicated archive and voucher connection actions use documented requests", async () => {
  const temporaryDirectory = await mkdtemp(join(tmpdir(), "fortnox-actions-"));
  const originalAdapter = axios.defaults.adapter;
  const server = new McpServer({ name: "test", version: "1.0.0" });
  const client = new Client({ name: "test-client", version: "1.0.0" });
  registerFortnoxApiTools(server, { allowLocalFileUploads: true });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const requests = [];
  const fileBytes = Buffer.from([0x25, 0x50, 0x44, 0x46, 0xff]);
  const filePath = join(temporaryDirectory, "receipt.pdf");
  axios.defaults.adapter = async (config) => {
    requests.push(config);
    return {
      data: { ok: true },
      status: 200,
      statusText: "OK",
      headers: {},
      config,
    };
  };
  try {
    await writeFile(filePath, fileBytes);
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    const listed = await client.listTools();
    for (const [name, readOnly, destructive] of [
      ["fortnox_get_voucher_file_connection", true, false],
      ["fortnox_create_voucher_file_connection", false, false],
      ["fortnox_delete_voucher_file_connection", false, true],
      ["fortnox_upload_archive_file", false, false],
      ["fortnox_delete_archive_item", false, true],
    ]) {
      const tool = listed.tools.find((item) => item.name === name);
      assert.equal(tool.annotations.readOnlyHint, readOnly);
      assert.equal(tool.annotations.destructiveHint, destructive);
    }

    const call = (name, args) => client.callTool({ name, arguments: args });
    let result = await call("fortnox_create_voucher_file_connection", {
      file_id: "file/id",
      voucher_number: "123",
      voucher_series: "A",
      voucher_year: 4,
      voucher_description: "Receipt",
    });
    assert.equal(result.isError, undefined);
    assert.equal(requests.at(-1).method, "post");
    assert.ok(requests.at(-1).url.endsWith("/3/voucherfileconnections"));
    assert.deepEqual(JSON.parse(requests.at(-1).data), {
      VoucherFileConnection: {
        FileId: "file/id",
        VoucherNumber: "123",
        VoucherSeries: "A",
        VoucherYear: 4,
        VoucherDescription: "Receipt",
      },
    });

    for (const [name, method] of [
      ["fortnox_get_voucher_file_connection", "get"],
      ["fortnox_delete_voucher_file_connection", "delete"],
    ]) {
      result = await call(name, { file_id: "file/id" });
      assert.equal(result.isError, undefined);
      assert.equal(requests.at(-1).method, method);
      assert.ok(
        requests.at(-1).url.endsWith("/3/voucherfileconnections/file%2Fid"),
      );
    }

    result = await call("fortnox_upload_archive_file", {
      file: {
        filename: "receipt.pdf",
        content_base64: fileBytes.toString("base64"),
        content_type: "application/pdf",
      },
      folder_id: "folder",
      path: "receipts",
    });
    assert.equal(result.isError, undefined);
    assert.equal(requests.at(-1).method, "post");
    assert.ok(requests.at(-1).url.endsWith("/3/archive"));
    assert.deepEqual(requests.at(-1).params, {
      folderid: "folder",
      path: "receipts",
    });
    const uploaded = requests.at(-1).data.get("file");
    assert.equal(uploaded.name, "receipt.pdf");
    assert.equal(uploaded.type, "application/pdf");
    assert.deepEqual(Buffer.from(await uploaded.arrayBuffer()), fileBytes);

    result = await call("fortnox_upload_archive_file", {
      file: { file_path: filePath },
    });
    assert.equal(result.isError, undefined);
    assert.deepEqual(
      Buffer.from(await requests.at(-1).data.get("file").arrayBuffer()),
      fileBytes,
    );
    const remoteUpload = await tools
      .get("fortnox_upload_archive_file")
      .handler({ file: { file_path: filePath } });
    assert.equal(remoteUpload.isError, true);
    assert.match(remoteUpload.content[0].text, /only available over stdio/);

    result = await call("fortnox_delete_archive_item", {
      id: "file/id",
      path: "receipts",
    });
    assert.equal(result.isError, undefined);
    assert.equal(requests.at(-1).method, "delete");
    assert.ok(requests.at(-1).url.endsWith("/3/archive/file%2Fid"));
    assert.deepEqual(requests.at(-1).params, { path: "receipts" });

    const count = requests.length;
    assert.equal(
      (
        await call("fortnox_create_voucher_file_connection", {
          file_id: "id",
          voucher_series: "A",
        })
      ).isError,
      true,
    );
    assert.equal(
      (
        await call("fortnox_upload_archive_file", {
          file: {
            file_path: filePath,
            filename: "file.pdf",
            content_base64: "AA==",
          },
        })
      ).isError,
      true,
    );
    assert.equal(
      (await call("fortnox_delete_archive_item", { id: "" })).isError,
      true,
    );
    assert.equal(requests.length, count);
  } finally {
    await client.close();
    await server.close();
    axios.defaults.adapter = originalAdapter;
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
});

test("dedicated connection, inbox, and attachment actions forward documented requests", async () => {
  const temporaryDirectory = await mkdtemp(join(tmpdir(), "fortnox-files-"));
  const filePath = join(temporaryDirectory, "inbox.pdf");
  const fileBytes = Buffer.from([0x25, 0x50, 0x44, 0x46, 0xff, 0x80]);
  const originalAdapter = axios.defaults.adapter;
  const server = new McpServer({ name: "test", version: "1.0.0" });
  const client = new Client({ name: "test-client", version: "1.0.0" });
  registerFortnoxApiTools(server, { allowLocalFileUploads: true });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const requests = [];
  axios.defaults.adapter = async (config) => {
    requests.push(config);
    const pdf = config.url.endsWith("/3/inbox/file%2Fid");
    return {
      data:
        config.responseType === "arraybuffer"
          ? pdf
            ? fileBytes
            : Buffer.from('{"folder":true}')
          : { ok: true },
      status: 200,
      statusText: "OK",
      headers: { "content-type": pdf ? "application/pdf" : "application/json" },
      config,
    };
  };
  try {
    await writeFile(filePath, fileBytes);
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    const listed = await client.listTools();
    const call = (name, args) => client.callTool({ name, arguments: args });
    const check = (method, path) => {
      assert.equal(requests.at(-1).method, method);
      assert.ok(requests.at(-1).url.endsWith(path), requests.at(-1).url);
    };
    for (const [name, resource, filter, query, hasGet] of [
      [
        "supplier_invoice",
        "supplierinvoice",
        "supplier_invoice_number",
        "supplierinvoicenumber",
        true,
      ],
      ["article", "article", "article_number", "articlenumber", true],
      ["asset", "asset", "asset_id", "assetid", false],
    ]) {
      for (const [action, readOnly, destructive] of [
        ["list", true, false],
        ["create", false, false],
        ["delete", false, true],
        ...(hasGet ? [["get", true, false]] : []),
      ]) {
        const plural = action === "list" ? "s" : "";
        const tool = listed.tools.find(
          (item) =>
            item.name === `fortnox_${action}_${name}_file_connection${plural}`,
        );
        assert.ok(tool);
        assert.equal(tool.annotations.readOnlyHint, readOnly);
        assert.equal(tool.annotations.destructiveHint, destructive);
      }
      let result = await call(`fortnox_list_${name}_file_connections`, {
        [filter]: "123",
      });
      assert.equal(result.isError, undefined);
      check("get", `/3/${resource}fileconnections`);
      assert.deepEqual(requests.at(-1).params, { [query]: "123" });
      for (const [action, method] of [
        ...(hasGet ? [["get", "get"]] : []),
        ["delete", "delete"],
      ]) {
        result = await call(`fortnox_${action}_${name}_file_connection`, {
          file_id: "file/id",
        });
        assert.equal(result.isError, undefined);
        check(method, `/3/${resource}fileconnections/file%2Fid`);
      }
    }
    for (const [name, args, expected] of [
      [
        "supplier_invoice",
        {
          file_id: "f",
          supplier_invoice_number: "7",
          name: "Receipt",
          supplier_name: "Supplier",
        },
        {
          SupplierInvoiceFileConnection: {
            FileId: "f",
            SupplierInvoiceNumber: "7",
            Name: "Receipt",
            SupplierName: "Supplier",
          },
        },
      ],
      [
        "article",
        { file_id: "f", article_number: "a" },
        { ArticleFileConnection: { FileId: "f", ArticleNumber: "a" } },
      ],
      [
        "asset",
        { file_id: "f", asset_id: "a", name: "Receipt" },
        { FileId: "f", AssetId: "a", Name: "Receipt" },
      ],
    ]) {
      assert.equal(
        (await call(`fortnox_create_${name}_file_connection`, args)).isError,
        undefined,
      );
      check("post", `/3/${name.replaceAll("_", "")}fileconnections`);
      assert.deepEqual(JSON.parse(requests.at(-1).data), expected);
    }

    for (const [name, readOnly, destructive] of [
      ["fortnox_list_inbox", true, false],
      ["fortnox_get_inbox_item", true, false],
      ["fortnox_upload_inbox_file", false, false],
      ["fortnox_delete_inbox_item", false, true],
      ["fortnox_list_attachments", true, false],
      ["fortnox_count_attachments", true, false],
      ["fortnox_attach_files", false, false],
      ["fortnox_update_attachment", false, false],
      ["fortnox_detach_file", false, true],
      ["fortnox_validate_attachments_on_send", false, false],
    ]) {
      const tool = listed.tools.find((item) => item.name === name);
      assert.ok(tool);
      assert.equal(tool.annotations.readOnlyHint, readOnly);
      assert.equal(tool.annotations.destructiveHint, destructive);
    }
    assert.equal((await call("fortnox_list_inbox", {})).isError, undefined);
    check("get", "/3/inbox");
    const download = await call("fortnox_get_inbox_item", { id: "file/id" });
    check("get", "/3/inbox/file%2Fid");
    assert.equal(requests.at(-1).headers.Accept, "*/*");
    assert.deepEqual(
      Buffer.from(download.structuredContent.data.data, "base64"),
      fileBytes,
    );
    const folder = await call("fortnox_get_inbox_item", { id: "folder" });
    assert.deepEqual(folder.structuredContent.data, { folder: true });
    for (const file of [
      {
        filename: "inbox.pdf",
        content_base64: fileBytes.toString("base64"),
        content_type: "application/pdf",
      },
      { file_path: filePath },
    ]) {
      assert.equal(
        (
          await call("fortnox_upload_inbox_file", {
            file,
            folder_id: "folder",
            path: "receipts",
          })
        ).isError,
        undefined,
      );
      check("post", "/3/inbox");
      assert.deepEqual(requests.at(-1).params, {
        folderId: "folder",
        path: "receipts",
      });
      assert.deepEqual(
        Buffer.from(await requests.at(-1).data.get("file").arrayBuffer()),
        fileBytes,
      );
    }
    assert.equal(
      (
        await tools
          .get("fortnox_upload_inbox_file")
          .handler({ file: { file_path: filePath } })
      ).isError,
      true,
    );
    assert.equal(
      (await call("fortnox_delete_inbox_item", { id: "file/id" })).isError,
      undefined,
    );
    check("delete", "/3/inbox/file%2Fid");

    for (const [name, query, path] of [
      ["list", "entityid", ""],
      ["count", "entityids", "/numberofattachments"],
    ]) {
      assert.equal(
        (
          await call(`fortnox_${name}_attachments`, {
            entity_ids: [1, 2],
            entity_type: "F",
          })
        ).isError,
        undefined,
      );
      check("get", `/api/fileattachments/attachments-v1${path}`);
      assert.equal(
        requests.at(-1).paramsSerializer.serialize(requests.at(-1).params),
        `${query}=1&${query}=2&entitytype=F`,
      );
    }
    const attachmentId = "123e4567-e89b-12d3-a456-426614174000";
    const attachment = {
      entityId: 7,
      entityType: "F",
      fileId: "f",
      id: attachmentId,
      includeOnSend: true,
    };
    for (const [name, path] of [
      ["fortnox_attach_files", ""],
      ["fortnox_validate_attachments_on_send", "/validateincludedonsend"],
    ]) {
      assert.equal(
        (await call(name, { attachments: [attachment] })).isError,
        undefined,
      );
      check("post", `/api/fileattachments/attachments-v1${path}`);
      assert.deepEqual(JSON.parse(requests.at(-1).data), [attachment]);
    }
    assert.equal(
      (
        await call("fortnox_update_attachment", {
          attachment_id: attachmentId,
          attachment,
        })
      ).isError,
      undefined,
    );
    check("put", `/api/fileattachments/attachments-v1/${attachmentId}`);
    assert.deepEqual(JSON.parse(requests.at(-1).data), attachment);
    assert.equal(
      (await call("fortnox_detach_file", { attachment_id: attachmentId }))
        .isError,
      undefined,
    );
    check("delete", `/api/fileattachments/attachments-v1/${attachmentId}`);

    const count = requests.length;
    assert.equal(
      (
        await call("fortnox_list_attachments", {
          entity_ids: [],
          entity_type: "F",
        })
      ).isError,
      true,
    );
    assert.equal(
      (
        await call("fortnox_attach_files", {
          attachments: [{ entityType: "invalid" }],
        })
      ).isError,
      true,
    );
    assert.equal(
      (await call("fortnox_detach_file", { attachment_id: "invalid" })).isError,
      true,
    );
    assert.equal(
      (await call("fortnox_delete_inbox_item", { id: "" })).isError,
      true,
    );
    assert.equal(requests.length, count);
  } finally {
    await client.close();
    await server.close();
    axios.defaults.adapter = originalAdapter;
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
});

test("dedicated actions support local company routing", async () => {
  const server = new McpServer({ name: "test", version: "1.0.0" });
  const client = new Client({ name: "test-client", version: "1.0.0" });
  enableLocalCompanyRouting(server);
  registerFortnoxApiTools(server, { allowLocalFileUploads: true });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    const listed = await client.listTools();
    for (const name of [
      "fortnox_get_voucher_file_connection",
      "fortnox_create_voucher_file_connection",
      "fortnox_delete_voucher_file_connection",
      "fortnox_upload_archive_file",
      "fortnox_delete_archive_item",
      "fortnox_list_supplier_invoice_file_connections",
      "fortnox_get_supplier_invoice_file_connection",
      "fortnox_create_supplier_invoice_file_connection",
      "fortnox_delete_supplier_invoice_file_connection",
      "fortnox_list_article_file_connections",
      "fortnox_get_article_file_connection",
      "fortnox_create_article_file_connection",
      "fortnox_delete_article_file_connection",
      "fortnox_list_asset_file_connections",
      "fortnox_create_asset_file_connection",
      "fortnox_delete_asset_file_connection",
      "fortnox_list_inbox",
      "fortnox_get_inbox_item",
      "fortnox_upload_inbox_file",
      "fortnox_delete_inbox_item",
      "fortnox_list_attachments",
      "fortnox_count_attachments",
      "fortnox_attach_files",
      "fortnox_update_attachment",
      "fortnox_detach_file",
      "fortnox_validate_attachments_on_send",
    ]) {
      const tool = listed.tools.find((item) => item.name === name);
      assert.equal(tool.inputSchema.properties.account.type, "string");
    }
  } finally {
    await client.close();
    await server.close();
  }
});

test("large API responses remain complete in text and structured content", async () => {
  const originalAdapter = axios.defaults.adapter;
  const server = new McpServer({ name: "test", version: "1.0.0" });
  const client = new Client({ name: "test-client", version: "1.0.0" });
  registerFortnoxApiTools(server);
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const file = Buffer.alloc(10 * 1024 * 1024 + 1, 0xff);
  const largeJson = { records: ["x".repeat(26000)] };
  axios.defaults.adapter = async (config) => ({
    data: config.responseType === "arraybuffer" ? file : largeJson,
    status: 200,
    statusText: "OK",
    headers: {
      "content-type":
        config.responseType === "arraybuffer"
          ? "application/pdf"
          : "application/json",
    },
    config,
  });
  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    const catalog = await client.callTool({
      name: "fortnox_list_api_operations",
      arguments: { limit: 50 },
    });
    assert.ok(catalog.content[0].text.length > 25000);
    assert.deepEqual(
      JSON.parse(catalog.content[0].text),
      catalog.structuredContent,
    );
    const list = await client.callTool({
      name: "fortnox_list_voucher_file_connections",
      arguments: {},
    });
    assert.deepEqual(JSON.parse(list.content[0].text).data, largeJson);
    assert.deepEqual(list.structuredContent.data, largeJson);

    const download = await client.callTool({
      name: "fortnox_get_archive_file",
      arguments: { id: "large" },
    });
    assert.equal(download.isError, undefined);
    assert.deepEqual(
      Buffer.from(JSON.parse(download.content[0].text).data.data, "base64"),
      file,
    );
    assert.deepEqual(
      Buffer.from(download.structuredContent.data.data, "base64"),
      file,
    );
  } finally {
    await client.close();
    await server.close();
    axios.defaults.adapter = originalAdapter;
  }
});
