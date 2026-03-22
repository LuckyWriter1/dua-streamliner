import { DuaGenerationService } from '../services/DuaGenerationService';
import { useAsyncOperation } from './useAsyncOperation';

export function useMonitoring(jobId: string) {
  const svc = new DuaGenerationService();
  return useAsyncOperation(() => svc.pollStatus(jobId));
}
