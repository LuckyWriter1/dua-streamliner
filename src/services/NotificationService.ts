// Pattern: Observer
// Consumers register callbacks; service dispatches async events
export type NotificationEvent = 'job:completed' | 'job:failed' | 'job:warning' | 'session:expired';
type Callback = (payload?: any) => void;

export class NotificationService {
  private static instance: NotificationService;
  private subscribers: Map<NotificationEvent, Callback[]> = new Map();
  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) NotificationService.instance = new NotificationService();
    return NotificationService.instance;
  }

  on(event: NotificationEvent, cb: Callback): void {
    this.subscribers.set(event, [...(this.subscribers.get(event) ?? []), cb]);
  }

  off(event: NotificationEvent, cb: Callback): void {
    this.subscribers.set(event, (this.subscribers.get(event) ?? []).filter(f => f !== cb));
  }

  emit(event: NotificationEvent, payload?: any): void {
    (this.subscribers.get(event) ?? []).forEach(cb => cb(payload));
  }
}
