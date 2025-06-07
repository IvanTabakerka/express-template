import { Request, Response } from 'express';
import { GeneralError } from '../utils/errors.js';
import { ValidationError } from 'sequelize';

export const errorHandler = (err: any, _: Request, res: Response) => {
  if (err instanceof ValidationError) {
    const messages = err.errors.map((e: any) => (e.message ? e.message : 'Неизвестная ошибка'));
    res.status(400).json({
      message: messages.join(', '),
    });
  }

  if (err instanceof GeneralError) {
    res.status(err.getCode()).json({
      message: err.message,
    });
  }

  console.error('UNCAUGHT ERROR:', err);

  res.status(500).json({
    message: err && err.message ? err.message : 'Internal Server Error',
    error: process.env.NODE_ENV !== 'production' ? err : undefined,
  });
};
