// Pattern: Adapter
import { User } from '../models/User';
export class AuthApiClient {
  async getProfile(): Promise<User> {
    // TODO: Call Azure Entra ID and adapt response
    return {} as User;
  }
}
