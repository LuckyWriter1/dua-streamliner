import { DUA } from './DUA';

export interface GenerationResult {
  jobId: string;
  dua: DUA;
  exportUrl?: string;
}
