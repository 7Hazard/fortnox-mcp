import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import {
  mkdtempSync,
  mkdirSync,
  existsSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { createInterface } from "node:readline";
import test from "node:test";
import axios from "axios";
import * as jose from "jose";

const originalEnvironment = { ...process.env };
const temporaryHome = mkdtempSync(join(tmpdir(), "fortnox-scopes-"));
process.env.HOME = temporaryHome;
process.env.USERPROFILE = temporaryHome;
process.env.FORTNOX_CLIENT_ID = "test-client";
process.env.FORTNOX_CLIENT_SECRET = "test-secret";
delete process.env.FORTNOX_REFRESH_TOKEN;
delete process.env.FORTNOX_ACCESS_TOKEN;
delete process.env.FORTNOX_SCOPE;

const { FORTNOX_SCOPES, hasRequiredFortnoxScopes } =
  await import("../dist/auth/credentials.js");
const { EnvVarTokenProvider } = await import("../dist/auth/envVarProvider.js");
const { FortnoxProxyOAuthProvider } =
  await import("../dist/auth/oauthProvider.js");
const { MemoryTokenStorage } = await import("../dist/auth/storage/memory.js");
const { createRemoteServer } = await import("../dist/server/remote.js");

test.after(() => {
  for (const name of [
    "HOME",
    "USERPROFILE",
    "FORTNOX_CLIENT_ID",
    "FORTNOX_CLIENT_SECRET",
    "FORTNOX_REFRESH_TOKEN",
    "FORTNOX_ACCESS_TOKEN",
    "FORTNOX_SCOPE",
  ]) {
    if (originalEnvironment[name] === undefined) delete process.env[name];
    else process.env[name] = originalEnvironment[name];
  }
  rmSync(temporaryHome, { recursive: true, force: true });
});

test("local authorization rejects tokens missing a required scope without deleting them", () => {
  assert.equal(homedir(), temporaryHome);
  for (const scope of [
    "archive",
    "article",
    "assets",
    "bookkeeping",
    "companyinformation",
    "connectfile",
    "costcenter",
    "currency",
    "customer",
    "developerapi",
    "inbox",
    "invoice",
    "noxfinansinvoice",
    "offer",
    "order",
    "payment",
    "price",
    "print",
    "profile",
    "project",
    "salary",
    "settings",
    "supplier",
    "supplierinvoice",
    "timereporting",
    "warehouse",
    "warehousecustomdocument",
  ]) {
    assert.equal(FORTNOX_SCOPES.includes(scope), true, scope);
  }
  const tokenDirectory = join(temporaryHome, ".fortnox-mcp");
  const tokenFile = join(tokenDirectory, "tokens.json");
  mkdirSync(tokenDirectory);
  const tokens = {
    accessToken: "access",
    refreshToken: "refresh",
    expiresAt: Date.now() + 3600000,
    scope: FORTNOX_SCOPES.join(" "),
    updatedAt: Date.now(),
  };
  writeFileSync(tokenFile, JSON.stringify(tokens));
  assert.equal(new EnvVarTokenProvider().isAuthenticated(), true);
  assert.equal(JSON.parse(readFileSync(tokenFile, "utf8")).scope, tokens.scope);

  tokens.scope = FORTNOX_SCOPES.filter((scope) => scope !== "archive").join(
    " ",
  );
  assert.equal(hasRequiredFortnoxScopes(tokens.scope), false);
  writeFileSync(tokenFile, JSON.stringify(tokens));
  assert.equal(new EnvVarTokenProvider().isAuthenticated(), false);
  assert.equal(existsSync(tokenFile), true);
  assert.deepEqual(JSON.parse(readFileSync(tokenFile, "utf8")), tokens);
});

test("remote authorization rejects stale access and refresh tokens", async () => {
  const storage = new MemoryTokenStorage();
  const secret = "test-jwt-secret";
  const issuer = "https://example.test";
  const provider = new FortnoxProxyOAuthProvider(secret, issuer, storage);
  const userId = "test-user";
  const clientId = "test-client";
  const signToken = (type) =>
    new jose.SignJWT({ userId, clientId, scopes: [], type })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuer(issuer)
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(secret));
  const accessToken = await signToken("access");
  const refreshToken = await signToken("refresh");
  const tokens = {
    accessToken: "access",
    refreshToken: "refresh",
    expiresAt: Date.now() + 3600000,
    scope: FORTNOX_SCOPES.join(" "),
  };

  await storage.set(userId, tokens);
  assert.equal(
    (await provider.verifyAccessToken(accessToken)).clientId,
    clientId,
  );
  assert.equal(
    (await provider.exchangeRefreshToken({ client_id: clientId }, refreshToken))
      .token_type,
    "Bearer",
  );

  tokens.scope = FORTNOX_SCOPES.filter((scope) => scope !== "inbox").join(" ");
  await storage.set(userId, tokens);
  await assert.rejects(provider.verifyAccessToken(accessToken), {
    errorCode: "invalid_token",
  });
  assert.equal(await storage.get(userId), null);
  await storage.set(userId, tokens);
  await assert.rejects(
    provider.exchangeRefreshToken({ client_id: clientId }, refreshToken),
    { errorCode: "invalid_grant" },
  );
  assert.equal(await storage.get(userId), null);
});

test("remote MCP accepts large authenticated uploads after authorization", async () => {
  const storage = new MemoryTokenStorage();
  const secret = "test-jwt-secret";
  const issuer = "https://example.test";
  const userId = "test-user";
  await storage.set(userId, {
    accessToken: "access",
    refreshToken: "refresh",
    expiresAt: Date.now() + 3600000,
    scope: FORTNOX_SCOPES.join(" "),
  });
  const token = await new jose.SignJWT({
    userId,
    clientId: "test-client",
    scopes: [],
    type: "access",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(issuer)
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(secret));
  const app = createRemoteServer({
    serverUrl: issuer,
    jwtSecret: secret,
    tokenStorage: storage,
  });
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const url = `http://127.0.0.1:${server.address().port}/mcp/`;
  const originalAdapter = axios.defaults.adapter;
  let uploadedFile;
  axios.defaults.adapter = async (config) => {
    uploadedFile = config.data.get("file");
    return {
      data: { ok: true },
      status: 200,
      statusText: "OK",
      headers: {},
      config,
    };
  };
  try {
    const unauthorized = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "x".repeat(200000),
    });
    assert.equal(unauthorized.status, 401);
    await unauthorized.arrayBuffer();

    const fileBytes = Buffer.alloc(5 * 1024 * 1024 + 1, 0xab);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: "fortnox_call_api_operation",
          arguments: {
            operation_id: "ArchiveController_doCreate",
            body: {
              file: {
                filename: "large.pdf",
                content_base64: fileBytes.toString("base64"),
              },
            },
          },
        },
      }),
    });
    assert.equal(response.status, 200);
    const result = await response.json();
    assert.equal(result.id, 1);
    assert.equal(result.result.isError, undefined);
    assert.deepEqual(Buffer.from(await uploadedFile.arrayBuffer()), fileBytes);
  } finally {
    axios.defaults.adapter = originalAdapter;
    server.closeAllConnections();
    await new Promise((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  }
});

test(
  "local startup attempts authorization without blocking MCP initialization",
  { timeout: 5000 },
  async () => {
    const startupHome = mkdtempSync(join(tmpdir(), "fortnox-startup-"));
    const environment = {
      ...process.env,
      AUTH_MODE: "local",
      TRANSPORT: "stdio",
      HOME: startupHome,
      USERPROFILE: startupHome,
    };
    delete environment.FORTNOX_CLIENT_ID;
    delete environment.FORTNOX_CLIENT_SECRET;
    delete environment.FORTNOX_ACCOUNT;
    const server = spawn(process.execPath, ["dist/index.js"], {
      env: environment,
    });
    const output = createInterface({ input: server.stdout });
    const errors = createInterface({ input: server.stderr });

    try {
      const response = once(output, "line");
      const authorizationError = once(errors, "line");
      server.stdin.write(
        `${JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "initialize",
          params: {
            protocolVersion: "2025-03-26",
            capabilities: {},
            clientInfo: { name: "test", version: "1" },
          },
        })}\n`,
      );

      assert.match(
        (await authorizationError)[0],
        /Authorization failed:.*Missing Fortnox credentials/,
      );
      assert.equal(JSON.parse((await response)[0]).id, 1);
    } finally {
      const closed =
        server.exitCode === null && server.signalCode === null
          ? once(server, "close")
          : Promise.resolve();
      server.kill();
      output.close();
      errors.close();
      await closed;
      rmSync(startupHome, { recursive: true, force: true });
    }
  },
);
