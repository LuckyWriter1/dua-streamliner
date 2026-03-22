// Sends events to Azure Application Insights via ApiClients
export class Logger {
  static info(message: string, data?: object): void {
    // TODO: Send to Azure Application Insights
    console.info(`[INFO] ${message}`, data);
  }
  static error(message: string, error?: Error): void {
    // TODO: Send to Azure Application Insights
    console.error(`[ERROR] ${message}`, error);
  }
  static warn(message: string, data?: object): void {
    console.warn(`[WARN] ${message}`, data);
  }
}
