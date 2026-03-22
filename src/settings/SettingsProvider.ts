// Pattern: Proxy
// Lazily fetches secrets from Azure Key Vault and caches them until expiration
export class SettingsProvider {
  private static instance: SettingsProvider;
  private cache: Map<string, string> = new Map();
  private constructor() {}

  static getInstance(): SettingsProvider {
    if (!SettingsProvider.instance) SettingsProvider.instance = new SettingsProvider();
    return SettingsProvider.instance;
  }

  async get(key: string): Promise<string> {
    if (this.cache.has(key)) return this.cache.get(key)!;
    // TODO: Fetch from Azure Key Vault
    const value = '';
    this.cache.set(key, value);
    return value;
  }
}
