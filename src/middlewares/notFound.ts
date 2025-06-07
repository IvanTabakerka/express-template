import { Request, Response, NextFunction } from 'express';
import { NotFound } from '../utils/errors.js';

export const notFound = (_: Request, __: Response, next: NextFunction) => {
  next(new NotFound('Not Found'));
};
