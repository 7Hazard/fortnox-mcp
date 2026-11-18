import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  unlinkSync,
  readdirSync,
} from "fs";
import { join } from "path";
import { homedir } from "os";

export interface CompanyIdentity {
  name: string;
  organizationNumber: string;
  databaseNumber: string;
}

interface PersistedTokens {
  refreshToken: string;
  accessToken?: string;
  expiresAt?: number;
  scope?: string;
  company?: CompanyIdentity;
  updatedAt: number;
}

const TOKEN_DIR = join(homedir(), ".fortnox-mcp");
export const DEFAULT_ACCOUNT = "__default__";

export function getTokenFile(
  account = process.env.FORTNOX_ACCOUNT ?? DEFAULT_ACCOUNT,
): string {
  if (account === DEFAULT_ACCOUNT) return join(TOKEN_DIR, "tokens.json");
  if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(account)) {
    throw new Error(
      "Account must be 1-64 lowercase letters, numbers, underscores, or hyphens, starting with a letter or number.",
    );
  }
  return join(TOKEN_DIR, `tokens-${account}.json`);
}

export function listPersistedAccounts(): string[] {
  if (!existsSync(TOKEN_DIR)) return [];
  return readdirSync(TOKEN_DIR)
    .flatMap((file) => {
      if (file === "tokens.json") return [DEFAULT_ACCOUNT];
      const match = /^tokens-([a-z0-9][a-z0-9_-]{0,63})\.json$/.exec(file);
      return match ? [match[1]] : [];
    })
    .sort();
}

function ensureDir(): void {
  if (!existsSync(TOKEN_DIR)) {
    mkdirSync(TOKEN_DIR, { mode: 0o700, recursive: true });
  }
}

export function readPersistedTokens(account?: string): PersistedTokens | null {
  const TOKEN_FILE = getTokenFile(account);
  try {
    if (!existsSync(TOKEN_FILE)) {
      return null;
    }
    const data = readFileSync(TOKEN_FILE, "utf-8");
    return JSON.parse(data) as PersistedTokens;
  } catch {
    return null;
  }
}

export function clearPersistedTokens(account?: string): void {
  const TOKEN_FILE = getTokenFile(account);
  try {
    if (existsSync(TOKEN_FILE)) {
      unlinkSync(TOKEN_FILE);
    }
  } catch (error) {
    console.error(
      `[FortnoxAuth] Warning: Could not clear persisted tokens at ${TOKEN_FILE}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

export function persistTokens(
  refreshToken: string,
  accessToken: string,
  expiresAt: number,
  scope: string,
  account?: string,
  company?: CompanyIdentity,
): void {
  const TOKEN_FILE = getTokenFile(account);
  try {
    ensureDir();
    const data: PersistedTokens = {
      refreshToken,
      accessToken,
      expiresAt,
      scope,
      company: company ?? readPersistedTokens(account)?.company,
      updatedAt: Date.now(),
    };
    writeFileSync(TOKEN_FILE, JSON.stringify(data, null, 2), {
      mode: 0o600,
    });
  } catch (error) {
    throw new Error(
      `Could not persist refresh token to ${TOKEN_FILE}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
