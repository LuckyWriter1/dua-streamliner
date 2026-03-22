// Pattern: Template Method
// Skeleton: loading → execute → success/error
import { useState } from 'react';
import { AuthService } from '../AuthService';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const auth = AuthService.getInstance();

  const login = async () => {
    setLoading(true); setError(null);
    try { await auth.login(); }
    catch (e: any) { setError(e.message); }
    finally { setLoading(false); }
  };

  const logout = async () => {
    setLoading(true);
    try { await auth.logout(); }
    finally { setLoading(false); }
  };

  return { login, logout, loading, error, isAuthenticated: auth.isAuthenticated() };
}
