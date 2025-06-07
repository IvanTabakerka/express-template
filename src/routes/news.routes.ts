import { Router } from 'express';
import {
  getAllNewsController,
  getNewsByIdController,
  createNewsController,
  updateNewsController,
  deleteNewsController,
} from '../controllers/news.controller.js';

const router = Router();

router.get('/', getAllNewsController);
router.get('/:id', getNewsByIdController);
router.post('/', createNewsController);
router.patch('/:id', updateNewsController);
router.delete('/:id', deleteNewsController);

export default router;
