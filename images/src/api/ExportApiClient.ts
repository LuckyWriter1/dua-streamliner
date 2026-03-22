// Pattern: Adapter
import { GenerationResult } from '../models/GenerationResult';
export class ExportApiClient {
  async getResult(jobId: string): Promise<GenerationResult> {
    // TODO: GET result and export URL from backend
    return {} as GenerationResult;
  }
}
