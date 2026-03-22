// Centralized error types — consistent error management across layers
export class AppError extends Error {
  constructor(public readonly code: string, message: string, public readonly cause?: unknown) {
    super(message);
    this.name = 'AppError';
  }
}
export class AuthError extends AppError {
  constructor(message: string) { super('AUTH_ERROR', message); }
}
export class ValidationError extends AppError {
  constructor(message: string) { super('VALIDATION_ERROR', message); }
}
export class ApiError extends AppError {
  constructor(message: string, public readonly statusCode?: number) { super('API_ERROR', message); }
}
