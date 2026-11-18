import assert from "node:assert/strict";
import test from "node:test";
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
