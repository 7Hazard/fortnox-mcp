/**
 * Backwards compatibility layer for auth
 *
 * This file maintains the old API while delegating to the new auth system.
 * New code should use src/auth/index.ts instead.
 *
 * @deprecated Use getTokenProvider() from "../auth/index.js" instead
 */

import { EnvVarTokenProvider, initializeTokenProvider } from "../auth/index.js";
import type { ITokenProvider } from "../auth/types.js";
import { getFortnoxCredentials, FORTNOX_SCOPES } from "../auth/credentials.js";
import { persistTokens } from "../auth/fileTokenStore.js";
import { FORTNOX_OAUTH_URL } from "../constants.js";
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
          reject(new Error(`Authorization failed: ${details}`));
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
          reject(new Error("Invalid OAuth state"));
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
        reject(error instanceof Error ? error : new Error(String(error)));
        server.close();
      }
    });

    const timeout = setTimeout(() => {
      server.close();
      reject(new Error("Timed out waiting for Fortnox OAuth callback."));
    }, timeoutMs);

    server.on("close", () => clearTimeout(timeout));
    server.on("error", (error: NodeJS.ErrnoException) => {
      clearTimeout(timeout);
      if (error.code === "EADDRINUSE") {
        reject(
          new Error(
            `Port ${LOCAL_OAUTH_CALLBACK_PORT} is already in use. ` +
              `Close the process using it or set FORTNOX_OAUTH_CALLBACK_PORT.`,
          ),
        );
        return;
      }
      reject(error);
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
        "[FortnoxMCP] No refresh token found. Starting one-time OAuth bootstrap.",
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
  const expiresAt = Date.now() + tokens.expires_in * 1000;
  persistTokens(tokens.refresh_token, tokens.access_token, expiresAt, scope);

  process.env.FORTNOX_REFRESH_TOKEN = tokens.refresh_token;
  process.env.FORTNOX_ACCESS_TOKEN = tokens.access_token;
  process.env.FORTNOX_SCOPE = scope;
}

export async function ensureLocalAuth(): Promise<FortnoxAuth> {
  if (authInstance?.isAuthenticated()) {
    return authInstance;
  }

  await bootstrapLocalTokenIfNeeded();

  const provider = new EnvVarTokenProvider();
  initializeTokenProvider(provider);
  authInstance = new FortnoxAuth(provider);

  if (!authInstance.isAuthenticated()) {
    throw new Error(
      "Unable to authenticate with Fortnox. Refresh token is still missing.",
    );
  }

  return authInstance;
}
