import * as newsService from '../service/news.service.js';
import { Request, Response } from 'express';

// Получить все новости
export const getAllNewsController = async (_: Request, res: Response) => {
  const news = await newsService.getAllNews();
  res.json(news);
};

// Получить новость по id
export const getNewsByIdController = async (req: Request, res: Response) => {
  const news = await newsService.getNewsById(Number(req.params.id));
  res.json(news);
};

// Создать новость
export const createNewsController = async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400).json({ message: 'Заголовок обязателен' });
  }
  const created = await newsService.createNews(req.body);
  res.status(201).json(created);
};

// Обновить новость
export const updateNewsController = async (req: Request, res: Response) => {
  const updated = await newsService.updateNews(Number(req.params.id), req.body);
  res.json(updated);
};

// Удалить новость
export const deleteNewsController = async (req: Request, res: Response) => {
  await newsService.deleteNews(Number(req.params.id));
  res.sendStatus(204);
};
