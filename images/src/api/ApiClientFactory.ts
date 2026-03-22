// Pattern: Factory Method
// Instantiates the correct API client based on context
import { AuthApiClient } from './AuthApiClient';
import { GenerationApiClient } from './GenerationApiClient';
import { MonitoringApiClient } from './MonitoringApiClient';
import { ExportApiClient } from './ExportApiClient';

export type ApiClientType = 'auth' | 'generation' | 'monitoring' | 'export';

export class ApiClientFactory {
  static create(type: ApiClientType) {
    switch (type) {
      case 'auth':       return new AuthApiClient();
      case 'generation': return new GenerationApiClient();
      case 'monitoring': return new MonitoringApiClient();
      case 'export':     return new ExportApiClient();
    }
  }
}
