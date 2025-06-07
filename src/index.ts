import express from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';

import 'dotenv/config';

import { connection } from './models/index.js';
import { runJobs } from './jobs/index.js';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: '10mb',
  }),
);

app.use(cors({ origin: true, credentials: true }));

// Маршруты
app.get('/', (_, res) => {
  res.send('API V1.0');
});

import newsRoutes from './routes/news.routes.js';

app.use('/news', newsRoutes);

import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';

app.use(errorHandler);
app.use(notFound);

// Запуск сервера
const startServer = async () => {
  // Веб сервер
  if (process.env.NODE_ENV === 'production') {
    const privateKey = fs.readFileSync('./ssl/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('./ssl/fullchain.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate };

    https.createServer(credentials, app).listen(process.env.API_PORT, () => {
      console.info(`API сервер запушен на порте ${process.env.API_PORT}`);
    });
  } else {
    app.listen(process.env.API_PORT, () => {
      console.info(`API сервер запушен [DEV ENV]`);
      console.info(`http://localhost:${process.env.API_PORT}`);
    });
  }

  // База данных
  connection
    .sync({
      force: false,
    })
    .then(async () => {
      console.info('[DATABASE] База данных синхронизирована');
    })
    .catch((err) => {
      console.error('[DATABASE] Ошибка синхронизации базы данных', err.message);
    });

  // Расписание
  runJobs();
};

(async () => {
  await startServer();
})();
