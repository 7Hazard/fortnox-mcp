/**
 * Backwards compatibility layer for auth
 *
 * This file maintains the old API while delegating to the new auth system.
 * New code should use src/auth/index.ts instead.
 *
 * @deprecated Use getTokenProvider() from "../auth/index.js" instead
 */

import {
  EnvVarTokenProvider,
  getTokenProvider,
  initializeTokenProvider,
} from "../auth/index.js";
import type { ITokenProvider } from "../auth/types.js";
import {
  getFortnoxCredentials,
  FORTNOX_SCOPES,
  hasRequiredFortnoxScopes,
} from "../auth/credentials.js";
import {
  CompanyIdentity,
  DEFAULT_ACCOUNT,
  getTokenFile,
  listPersistedAccounts,
  persistTokens,
  readPersistedTokens,
} from "../auth/fileTokenStore.js";
import { FORTNOX_API_BASE_URL, FORTNOX_OAUTH_URL } from "../constants.js";
import axios from "axios";
import { createServer } from "http";
import { randomUUID } from "crypto";
import { spawn } from "child_process";

interface OAuthTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope?: string;
}

interface PendingAuthCode {
  code: string;
  redirectUri: string;
}

const LOCAL_OAUTH_CALLBACK_PORT = parseInt(
  process.env.FORTNOX_OAUTH_CALLBACK_PORT || "8888",
  10,
);

/**
 * Compatibility wrapper that provides the old FortnoxAuth interface
 * while using the new token provider system internally
 */
export class FortnoxAuth {
  private provider: ITokenProvider;

  constructor(provider?: ITokenProvider) {
    // Ensure the token provider is initialized with EnvVarTokenProvider for local mode
    const localProvider = provider || new EnvVarTokenProvider();
    initializeTokenProvider(localProvider);
    this.provider = localProvider;
  }

  async getAccessToken(): Promise<string> {
    return this.provider.getAccessToken();
  }

  isAuthenticated(): boolean {
    return this.provider.isAuthenticated();
  }

  getTokenInfo(): { expiresAt: Date; scope: string } | null {
    const info = this.provider.getTokenInfo();
    if (!info) return null;
    return {
      expiresAt: new Date(info.expiresAt),
      scope: info.scope,
    };
  }
}

// Singleton instance for backwards compatibility
let authInstance: FortnoxAuth | null = null;
let localAuthPromise: Promise<FortnoxAuth> | null = null;
let authorizationQueue: Promise<void> = Promise.resolve();

async function withLocalAuthorization<T>(action: () => Promise<T>): Promise<T> {
  const previous = authorizationQueue;
  let release!: () => void;
  authorizationQueue = new Promise<void>((resolve) => {
    release = resolve;
  });
  await previous;
  try {
    return await action();
  } finally {
    release();
  }
}

async function verifyCompanyIdentity(
  accessToken: string,
  account: string,
): Promise<CompanyIdentity> {
  const response = await axios.get(
    `${FORTNOX_API_BASE_URL}/3/companyinformation`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      timeout: 30000,
    },
  );
  const details = response.data?.CompanyInformation;
  const company: CompanyIdentity = {
    name: String(details?.CompanyName ?? "").trim(),
    organizationNumber: String(details?.OrganizationNumber ?? "").trim(),
    databaseNumber: String(details?.DatabaseNumber ?? "").trim(),
  };
  if (
    !company.name ||
    (!company.organizationNumber && !company.databaseNumber)
  ) {
    throw new Error("Could not verify the authorized company identity.");
  }
  const previousCompany = readPersistedTokens(account)?.company;
  if (
    previousCompany &&
    ((previousCompany.organizationNumber &&
      company.organizationNumber !== previousCompany.organizationNumber) ||
      (previousCompany.databaseNumber &&
        company.databaseNumber !== previousCompany.databaseNumber))
  ) {
    throw new Error(
      `The authorized company does not match '${account}'. Existing credentials were not replaced.`,
    );
  }
  return company;
}

export async function authorizeLocalAccount(
  account: string,
  reconnect = false,
): Promise<{ provider: EnvVarTokenProvider; company: CompanyIdentity }> {
  getTokenFile(account);
  return withLocalAuthorization(async () => {
    const configured =
      account === (process.env.FORTNOX_ACCOUNT ?? DEFAULT_ACCOUNT);
    if (
      !reconnect &&
      (listPersistedAccounts().includes(account) ||
        (configured && getTokenProvider().isAuthenticated()))
    ) {
      throw new Error(
        `Account '${account}' already exists. Set reconnect to true to reauthorize it.`,
      );
    }
    const provider = new EnvVarTokenProvider(account, false);
    const { clientId } = getFortnoxCredentials();
    const authCode = await waitForAuthorizationCode(clientId);
    let company: CompanyIdentity | undefined;
    await provider.exchangeAuthorizationCode(
      authCode.code,
      authCode.redirectUri,
      async (accessToken) => {
        company = await verifyCompanyIdentity(accessToken, account);
        return company;
      },
    );
    if (configured) {
      authInstance = new FortnoxAuth(provider);
    }
    return { provider, company: company! };
  });
}

function openBrowser(url: string): void {
  try {
    if (process.platform === "win32") {
      spawn("rundll32", ["url.dll,FileProtocolHandler", url], {
        detached: true,
        stdio: "ignore",
      }).unref();
      return;
    }

    if (process.platform === "darwin") {
      spawn("open", [url], { detached: true, stdio: "ignore" }).unref();
      return;
    }

    spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).unref();
  } catch {
    // Best-effort only. The URL is also printed for manual opening.
  }
}

async function waitForAuthorizationCode(
  clientId: string,
): Promise<PendingAuthCode> {
  return new Promise((resolve, reject) => {
    const state = randomUUID();
    const timeoutMs = 10 * 60 * 1000;
    const redirectUri = `http://localhost:${LOCAL_OAUTH_CALLBACK_PORT}/callback`;
    let settled = false;

    const fail = (error: Error): void => {
      if (settled) return;
      settled = true;
      reject(error);
    };

    const server = createServer((req, res) => {
      try {
        const requestUrl = new URL(req.url || "/", "http://127.0.0.1");
        if (requestUrl.pathname !== "/callback") {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
          return;
        }

        const error = requestUrl.searchParams.get("error");
        const errorDescription =
          requestUrl.searchParams.get("error_description");
        const code = requestUrl.searchParams.get("code");
        const callbackState = requestUrl.searchParams.get("state");

        if (error) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Fortnox authorization failed.");
          const details = errorDescription
            ? `${error} (${errorDescription})`
            : error;
          fail(new Error(`Authorization failed: ${details}`));
          server.close();
          return;
        }

        if (!code) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Missing authorization code.");
          return;
        }

        if (callbackState !== state) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Invalid OAuth state.");
          fail(new Error("Invalid OAuth state"));
          server.close();
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
          "<html><body><h2>Fortnox authorization complete.</h2><p>You can close this window.</p></body></html>",
        );

        resolve({ code, redirectUri });
        server.close();
      } catch (error) {
        fail(error instanceof Error ? error : new Error(String(error)));
        server.close();
      }
    });

    const timeout = setTimeout(() => {
      fail(new Error("Timed out waiting for Fortnox OAuth callback."));
      server.close();
    }, timeoutMs);

    server.on("close", () => clearTimeout(timeout));
    server.on("error", (error: NodeJS.ErrnoException) => {
      clearTimeout(timeout);
      if (error.code === "EADDRINUSE") {
        fail(
          new Error(
            `Port ${LOCAL_OAUTH_CALLBACK_PORT} is already in use. ` +
              `Close the process using it or set FORTNOX_OAUTH_CALLBACK_PORT.`,
          ),
        );
        return;
      }
      fail(error);
    });

    server.listen(LOCAL_OAUTH_CALLBACK_PORT, "127.0.0.1", () => {
      const authUrl = new URL(`${FORTNOX_OAUTH_URL}/auth`);
      authUrl.searchParams.set("client_id", clientId);
      authUrl.searchParams.set("redirect_uri", redirectUri);
      authUrl.searchParams.set("scope", FORTNOX_SCOPES.join(" "));
      authUrl.searchParams.set("response_type", "code");
      authUrl.searchParams.set("access_type", "offline");
      authUrl.searchParams.set("state", state);

      const authUrlString = authUrl.toString();
      console.error(
        "[FortnoxMCP] No usable refresh token found. Starting Fortnox authorization with the configured client credentials.",
      );
      console.error("[FortnoxMCP] Opening browser for authorization.");
      console.error(
        `[FortnoxMCP] If browser does not open, visit: ${authUrlString}`,
      );
      openBrowser(authUrlString);
    });
  });
}

async function exchangeAuthorizationCode(
  code: string,
  redirectUri: string,
): Promise<OAuthTokenResponse> {
  const { clientId, clientSecret } = getFortnoxCredentials();
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${FORTNOX_OAUTH_URL}/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Token exchange failed: ${response.status} ${body}`);
  }

  return response.json() as Promise<OAuthTokenResponse>;
}

async function bootstrapLocalTokenIfNeeded(): Promise<void> {
  const provider = new EnvVarTokenProvider();
  if (provider.isAuthenticated()) {
    return;
  }

  const { clientId } = getFortnoxCredentials();
  const authCode = await waitForAuthorizationCode(clientId);
  const tokens = await exchangeAuthorizationCode(
    authCode.code,
    authCode.redirectUri,
  );

  const scope = tokens.scope || "";
  if (!hasRequiredFortnoxScopes(scope)) {
    throw new Error("Fortnox authorization returned insufficient scopes.");
  }
  const account = process.env.FORTNOX_ACCOUNT ?? DEFAULT_ACCOUNT;
  const company = await verifyCompanyIdentity(tokens.access_token, account);
  const expiresAt = Date.now() + tokens.expires_in * 1000;
  persistTokens(
    tokens.refresh_token,
    tokens.access_token,
    expiresAt,
    scope,
    account,
    company,
  );

  process.env.FORTNOX_REFRESH_TOKEN = tokens.refresh_token;
  process.env.FORTNOX_ACCESS_TOKEN = tokens.access_token;
  process.env.FORTNOX_SCOPE = scope;
}

export function ensureLocalAuth(): Promise<FortnoxAuth> {
  if (authInstance?.isAuthenticated()) {
    return Promise.resolve(authInstance);
  }

  if (!localAuthPromise) {
    localAuthPromise = (async () => {
      await withLocalAuthorization(bootstrapLocalTokenIfNeeded);

      const provider = new EnvVarTokenProvider();
      initializeTokenProvider(provider);
      authInstance = new FortnoxAuth(provider);

      if (!authInstance.isAuthenticated()) {
        throw new Error(
          "Unable to authenticate with Fortnox. Refresh token is still missing.",
        );
      }

      return authInstance;
    })().finally(() => {
      localAuthPromise = null;
    });
  }

  return localAuthPromise;
}
