// Pattern: Facade
// Single entry point: upload, generate, poll, export
import { ApiClientFactory } from '../api/ApiClientFactory';
import { JobStatus } from '../models/JobStatus';
import { GenerationResult } from '../models/GenerationResult';
import { NotificationService } from './NotificationService';

export class DuaGenerationService {
  private generationClient = ApiClientFactory.create('generation');
  private monitoringClient = ApiClientFactory.create('monitoring');
  private exportClient = ApiClientFactory.create('export');
  private notifications = NotificationService.getInstance();

  async startGeneration(formData: FormData): Promise<JobStatus> {
    return this.generationClient.startJob(formData);
  }

  async pollStatus(jobId: string): Promise<JobStatus> {
    return this.monitoringClient.getStatus(jobId);
  }

  async getResult(jobId: string): Promise<GenerationResult> {
    const result = await this.exportClient.getResult(jobId);
    this.notifications.emit('job:completed', result);
    return result;
  }
}
