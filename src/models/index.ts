import { Sequelize } from 'sequelize';

export const connection = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: false,
      freezeTableName: true,
    },
    host: process.env.DB_HOST as string,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

// ── Импорт всех моделей
import news from './news.model.js';

export const News = news(connection);
