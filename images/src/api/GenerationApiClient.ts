// Pattern: Adapter
import { JobStatus } from '../models/JobStatus';
export class GenerationApiClient {
  async startJob(formData: FormData): Promise<JobStatus> {
    // TODO: POST to backend generation endpoint
    return {} as JobStatus;
  }
}
