export type JobStage = 'idle' | 'ingestion' | 'extraction' | 'matching' | 'drafting' | 'completed' | 'failed';

export interface JobStatus {
  jobId: string;
  stage: JobStage;
  progress: number;
  warnings: string[];
  error?: string;
}
