// Pattern: Singleton
// Manages Azure Entra ID authentication lifecycle (SSO + MFA)
export class AuthService {
  private static instance: AuthService;
  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) AuthService.instance = new AuthService();
    return AuthService.instance;
  }

  async login(): Promise<void> {
    // TODO: Redirect to Azure Entra ID SSO
  }

  async logout(): Promise<void> {
    // TODO: Clear session and redirect to /login
  }

  isAuthenticated(): boolean {
    // TODO: Validate active token
    return false;
  }
}
