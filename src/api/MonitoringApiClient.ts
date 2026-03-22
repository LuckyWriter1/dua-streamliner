// Pattern: Adapter
import { JobStatus } from '../models/JobStatus';
export class MonitoringApiClient {
  async getStatus(jobId: string): Promise<JobStatus> {
    // TODO: GET job status from backend
    return {} as JobStatus;
  }
}
