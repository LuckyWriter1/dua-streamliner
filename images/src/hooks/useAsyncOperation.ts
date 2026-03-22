// Pattern: Template Method
// Base skeleton: loading → execute → success/error
import { useState } from 'react';

export function useAsyncOperation<T>(operation: () => Promise<T>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = async () => {
    setLoading(true); setError(null);
    try { setData(await operation()); }
    catch (e: any) { setError(e.message); }
    finally { setLoading(false); }
  };

  return { execute, loading, error, data };
}
