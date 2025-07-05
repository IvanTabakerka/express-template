import { z } from 'zod';

export const createNewsSchema = z.object({
  title: z.string().min(1, 'Заголовок обязателен'),
  body: z.string().nullable().optional(),
});

export const updateNewsSchema = z.object({
  title: z.string().min(1, 'Заголовок обязателен').optional(),
  body: z.string().nullable().optional(),
});
