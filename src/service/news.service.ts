import { News } from '../models/index.js';
import { NotFound } from '../utils/errors.js';

export const getAllNews = async () => {
  return News.findAll();
};

export const getNewsById = async (id: number) => {
  const news = await News.findByPk(id);
  if (!news) throw new NotFound('Новость не найдена');
  return news;
};

export const createNews = async (data: { title: string; body?: string }) => {
  return News.create(data);
};

export const updateNews = async (id: number, data: { title?: string; body?: string }) => {
  const news = await News.findByPk(id);
  if (!news) throw new NotFound('Новость не найдена');
  await news.update(data);
  return news;
};

export const deleteNews = async (id: number) => {
  const news = await News.findByPk(id);
  if (!news) throw new NotFound('Новость не найдена');
  await news.destroy();
};
