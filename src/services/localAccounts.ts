import { EnvVarTokenProvider, getTokenProvider } from "../auth/index.js";
import {
  DEFAULT_ACCOUNT,
  getTokenFile,
  listPersistedAccounts,
} from "../auth/fileTokenStore.js";
import { authorizeLocalAccount } from "./auth.js";

const providers = new Map<string, EnvVarTokenProvider>();

export function configuredLocalAccount(): string {
  return process.env.FORTNOX_ACCOUNT ?? DEFAULT_ACCOUNT;
}

export function listLocalAccounts(): string[] {
  const accounts = new Set(listPersistedAccounts());
  const provider = getTokenProvider();
  if (provider instanceof EnvVarTokenProvider && provider.isAuthenticated()) {
    accounts.add(configuredLocalAccount());
  }
  return [...accounts].sort();
}

export function resolveLocalAccount(account?: string): string {
  const accounts = listLocalAccounts();
  if (account !== undefined) {
    getTokenFile(account);
    if (
      !accounts.includes(account) &&
      !(accounts.length === 0 && account === configuredLocalAccount())
    ) {
      throw new Error(
        `Unknown company '${account}'. Use fortnox_list_companies or fortnox_connect_company.`,
      );
    }
    return account;
  }
  if (accounts.length > 1) {
    throw new Error(
      "Multiple companies are connected. Specify the company using the account parameter; use fortnox_list_companies to see the available names.",
    );
  }
  return accounts[0] ?? configuredLocalAccount();
}

export function getLocalAccountProvider(account: string): EnvVarTokenProvider {
  if (account === configuredLocalAccount()) {
    const provider = getTokenProvider();
    if (!(provider instanceof EnvVarTokenProvider))
      throw new Error("Local account provider unavailable.");
    return provider;
  }
  let provider = providers.get(account);
  if (!provider) {
    provider = new EnvVarTokenProvider(account, false);
    providers.set(account, provider);
  }
  return provider;
}

export async function connectLocalAccount(account: string, reconnect: boolean) {
  const { provider, company } = await authorizeLocalAccount(account, reconnect);
  if (account !== configuredLocalAccount()) providers.set(account, provider);
  return company;
}
