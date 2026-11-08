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

test("local authorization discards tokens missing a required scope", () => {
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
  assert.equal(existsSync(tokenFile), false);
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

test(
  "local startup attempts authorization without blocking MCP initialization",
  { timeout: 5000 },
  async () => {
    const environment = {
      ...process.env,
      AUTH_MODE: "local",
      TRANSPORT: "stdio",
    };
    delete environment.FORTNOX_CLIENT_ID;
    delete environment.FORTNOX_CLIENT_SECRET;
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
      server.kill();
      output.close();
      errors.close();
      await once(server, "close");
    }
  },
);
