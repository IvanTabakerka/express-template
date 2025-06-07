import cron from 'node-cron';
import { everyMinute } from './everyMinute.jobs.js';
import { everyHour } from './everyHour.jobs.js';
import { everyNight, everyEvening } from './everyDay.jobs.js';

/**
 * Регистрирует все задачи cron'а.
 * Вызываются из корневого index.ts при старте приложения.
 */
export const runJobs = () => {
  // Каждую минуту
  cron.schedule('* * * * *', () => everyMinute());

  // Каждый час
  cron.schedule('0 * * * *', () => everyHour());

  // Каждый день ночью
  cron.schedule('0 3 * * *', () => everyNight());

  // Каждый день вечером
  cron.schedule('0 18 * * *', () => everyEvening());
};
