
# Express.js + TypeScript Backend Template

Готовый шаблон для быстрого старта REST API-проекта на базе Express.js и TypeScript.  
Включает автогенерируемую документацию через Swagger, строгую архитектуру с разделением по слоям, ESLint, Prettier и Jest для стабильной разработки.

---

## Быстрый старт

```bash
# Клонируйте репозиторий
git clone https://github.com/IvanTabakerka/express-template.git
cd express-template

# Установите зависимости
pnpm install      # или npm install / yarn install

# Скопируйте переменные окружения
cp .env.example .env

# Запустите в режиме разработки
pnpm dev          # или npm run dev

# Документация Swagger будет доступна на:
http://localhost:3000/api-docs
```

---

## Структура проекта

```
src/
  index.ts                    # Точка входа, инициализация Express и Swagger
  controllers/
    news.controller.ts        # Контроллеры для обработки запросов
  jobs/
    everyDay.jobs.ts          # Примеры фоновых задач (cron-like)
    everyHour.jobs.ts
    everyMinute.jobs.ts
    index.ts
  middlewares/
    errorHandler.ts           # Глобальная обработка ошибок
    notFound.ts               # Обработка несуществующих маршрутов (404)
  models/
    news.model.ts             # Sequelize-модель для сущности "новости"
    index.ts                  # Экспорт моделей и инстанс подключения к БД
  routes/
    news.routes.ts            # Определение маршрутов для news
  service/
    news.service.ts           # Бизнес-логика для news
  utils/
    errors.ts                 # Классы и функции ошибок
```

---

## Основные возможности

- **TypeScript** — строгая типизация, автосборка и проверка кода
- **Express.js** — популярный и гибкий фреймворк для REST API
- **Swagger (OpenAPI)** — автогенерируемая и удобная документация API  
  → Swagger UI доступен по `/api-docs`  
  → JSDoc-аннотации в роутах/контроллерах
- **Sequelize** — ORM для работы с БД
- **ESLint + Prettier** — автоматическое форматирование и проверка качества кода
- **Jest** — готовый юнит-тестовый фреймворк
- **nodemon** — hot reload при разработке
- **Гибкая архитектура** — раздельные контроллеры, сервисы, модели, роуты, middlewares, utils
- **Примеры фоновых задач (jobs)** — можно быстро добавить крон-джобы

---

## Скрипты

```bash
pnpm dev      # Запуск в режиме разработки (ts-node + nodemon)
pnpm build    # Сборка production-кода (в папку dist)
pnpm start    # Запуск production-кода (node dist/index.js)
pnpm test     # Запуск unit-тестов (Jest)
pnpm lint     # Линтинг кода (ESLint)
```

---

## Документация API (Swagger)

В шаблоне уже подключён Swagger UI — он автоматически собирает документацию по JSDoc-аннотациям в коде.

- Открывайте в браузере:  
  [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- Для новых маршрутов описывайте эндпоинты через JSDoc-аннотации.  
  Swagger обновит документацию после перезапуска сервера.

**Пример аннотации:**
```ts
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
 */
```

---

## Как расширять шаблон

**Добавление новой сущности:**
1. Создайте модель в `models/`
2. Создайте сервис в `service/`
3. Создайте контроллер в `controllers/`
4. Опишите роуты в `routes/`
5. Зарегистрируйте роуты в `src/index.ts`
6. Добавьте JSDoc-аннотации для генерации Swagger-документации
---

## Важно знать

- **Переменные окружения:**  
  Всегда копируйте и заполняйте свой `.env` на основе `.env.example`.
- **Сборка:**  
  Исходники (`src/`) компилируются в папку `dist/`.
- **Swagger:**  
  Для генерации документации используйте JSDoc в роутах или контроллерах, путь до файлов указывается в конфиге swagger-jsdoc.
