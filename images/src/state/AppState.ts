// Pattern: Facade + Observer
// Unified API over global state; components subscribe to slices
import { User } from '../models/User';
import { JobStatus } from '../models/JobStatus';
import { GenerationResult } from '../models/GenerationResult';

export interface AppState {
  user: User | null;
  jobStatus: JobStatus | null;
  result: GenerationResult | null;
}

type Listener = (state: AppState) => void;

export class StateManager {
  private static instance: StateManager;
  private state: AppState = { user: null, jobStatus: null, result: null };
  private listeners: Listener[] = [];
  private constructor() {}

  static getInstance(): StateManager {
    if (!StateManager.instance) StateManager.instance = new StateManager();
    return StateManager.instance;
  }

  getState(): AppState { return this.state; }

  setState(partial: Partial<AppState>): void {
    this.state = { ...this.state, ...partial };
    this.listeners.forEach(l => l(this.state));
  }

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => { this.listeners = this.listeners.filter(l => l !== listener); };
  }
}
