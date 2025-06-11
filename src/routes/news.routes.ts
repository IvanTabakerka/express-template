import { Router } from 'express';
import {
  getAllNewsController,
  getNewsByIdController,
  createNewsController,
  updateNewsController,
  deleteNewsController,
} from '../controllers/news.controller.js';

const router = Router();

/**
 * @openapi
 * /news:
 *   get:
 *     summary: Получить список новостей
 *     responses:
 *       200:
 *         description: Список новостей
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 *   post:
 *     summary: Создать новость
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       201:
 *         description: Новость создана
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *
 * /news/{id}:
 *   get:
 *     summary: Получить новость по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Новость найдена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: Новость не найдена
 *   patch:
 *     summary: Обновить новость по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: Новость обновлена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: Новость не найдена
 *   delete:
 *     summary: Удалить новость по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Новость удалена
 *       404:
 *         description: Новость не найдена
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID новости
 *           example: 1
 *         title:
 *           type: string
 *           description: Заголовок новости
 *           example: "Новая функция в шаблоне"
 *         body:
 *           type: string
 *           nullable: true
 *           description: Текст новости
 *           example: "Описание новой функции..."
 *       required:
 *         - title
 */

router.get('/', getAllNewsController);
router.get('/:id', getNewsByIdController);
router.post('/', createNewsController);
router.patch('/:id', updateNewsController);
router.delete('/:id', deleteNewsController);

export default router;
