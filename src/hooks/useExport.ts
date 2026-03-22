import { DuaGenerationService } from '../services/DuaGenerationService';
import { useAsyncOperation } from './useAsyncOperation';

export function useExport(jobId: string) {
  const svc = new DuaGenerationService();
  return useAsyncOperation(() => svc.getResult(jobId));
}
