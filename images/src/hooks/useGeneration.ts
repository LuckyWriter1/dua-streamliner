import { DuaGenerationService } from '../services/DuaGenerationService';
import { useAsyncOperation } from './useAsyncOperation';

export function useGeneration(formData: FormData) {
  const svc = new DuaGenerationService();
  return useAsyncOperation(() => svc.startGeneration(formData));
}
