import { AppError } from './app-error';

// Hacemos que extienda de appError porque
// NotFoundError es más específico.
export class NotFoundError extends AppError {

}