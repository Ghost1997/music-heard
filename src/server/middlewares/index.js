import { errorHandler } from './errorHandler';
import { responseHandler } from './responseHandler';
import { methodNotAllowedHandler } from './methodNotAllowedHandler';
import { pageNotFoundHandler } from './pageNotFoundHandler';
import { initResLocalsHandler } from './initResLocalsHandler';
import { authMiddleware, checkAdmin } from './auth';

export {
  errorHandler,
  responseHandler,
  methodNotAllowedHandler,
  pageNotFoundHandler,
  initResLocalsHandler,
  authMiddleware,
  checkAdmin
};
