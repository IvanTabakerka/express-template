# Express Template

> Модульный шаблон для старта backend-проекта на Node.js + Express + TypeScript

## Возможности

* Express.js (REST API)
* TypeScript (src/, сборка через tsc)
* Архитектура MVC (+ слои сервисов и middleware)
* ESLint + Prettier (стили и авто-правка кода)
* Jest (юнит-тесты)
* Nodemon (авто-ребут при разработке)
* .env и .env.example для переменных окружения
* Папка jobs для крон-задач
* Генерируемая документация API через Swagger

---

## Быстрый старт

1. **Установи зависимости**

   ```bash
   pnpm install
   # или npm install
   ```

2. **Скопируй переменные окружения**

   ```bash
   cp .env.example .env
   # Заполни .env своими параметрами
   ```

3. **Запусти проект в dev-режиме**

   ```bash
   pnpm dev
   # или npm run dev
   ```

4. **Собрать и запустить в production**

   ```bash
   pnpm build
   pnpm start
   # или npm run build && npm start
   ```

5. **Запустить тесты**

   ```bash
   pnpm test
   # или npm test
   ```

---

## Cтруктура проекта

```
src/
    index.ts             # Точка входа
    controllers/         # Контроллеры (обработка запросов)
    routes/              # Определение маршрутов (Express Router)
    models/              # Модели данных
    service/             # Бизнес-логика
    middlewares/         # Middleware (авторизация, ошибки)
    utils/               # Вспомогательные утилиты
    jobs/                # Крон/планировщик задач
    migrations/          # Миграции БД (если используются)
```

Остальные файлы:

* `.env`, `.env.example` — переменные окружения
* `nodemon.json` — hot-reload при dev
* `jest.config.js` — конфиг для тестов
* `.eslintrc.json`, `.prettierrc.json` — стили и форматирование
* `tsconfig.json` — TypeScript конфиг

---

## Переменные окружения

Смотри `.env.example` и используй его как шаблон.

---

## Скрипты package.json

* `dev` — запуск с nodemon (разработка)
* `build` — сборка в dist/
* `start` — запуск собранного проекта
* `test` — запуск юнит-тестов (Jest)
* `lint` — проверка и авто-исправление кода

## Документация API (Swagger)

В шаблоне интегрирован Swagger UI для автоматической генерации и просмотра документации REST API.
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

### Как открыть документацию

После запуска приложения документация доступна по адресу: 

http://localhost:3000/api-docs


### Описание

Документация генерируется автоматически на основе JSDoc-аннотаций прямо в исходном коде (роутах).  
Можно просматривать, тестировать и отправлять запросы к API прямо из веб-интерфейса.

### Пример аннотации эндпоинта

```ts
/**
 * @openapi
 * /news:
 *   get:
 *     summary: Получить список новостей
 *     responses:
 *       200:
 *         description: Успешно
 */

