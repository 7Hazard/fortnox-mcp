export interface TokenInfo {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope: string;
}

// Abstraction for local/remote token retrieval
export interface ITokenProvider {
  getAccessToken(userId?: string): Promise<string>;
  isAuthenticated(userId?: string): boolean;
  getTokenInfo(userId?: string): TokenInfo | null;
}

export interface RequestContext {
  userId?: string;
  sessionId?: string;
}

export class AuthRequiredError extends Error {
  constructor(
    public userId?: string,
    message?: string,
  ) {
    super(
      message ||
        (userId
          ? `Authentication required for user ${userId}`
          : "Fortnox authorization required. Starting authorization with the configured client credentials."),
    );
    this.name = "AuthRequiredError";
  }
}
