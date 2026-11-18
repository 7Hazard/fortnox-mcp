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

test("generic archive download preserves binary PDF bytes", async () => {
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
    const result = await tools.get("fortnox_call_api_operation").handler({
      operation_id: "ArchiveController_doShow",
      path_parameters: { id: "file-id" },
    });
    assert.equal(responseType, "arraybuffer");
    assert.equal(result.structuredContent.data.content_type, "application/pdf");
    assert.deepEqual(
      Buffer.from(result.structuredContent.data.data, "base64"),
      pdf,
    );
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
