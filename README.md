# Recipe-hub

## use-case diagram

<img src="docs/use-case-diagram.png" alt="Use-case diagram" width="700">

## ER-диаграмма

![ER-диаграмма базы данных](docs/db-er-diagram.png)

## Интерфейс приложения

| Главная страница         | Модальное окно рецепта                 |
| ------------------------ | -------------------------------------- |
| ![recipe](docs/main.png) | ![modal-recipe](docs/modal-recipe.png) |

| Конвертер                        | Избранное                        |
| -------------------------------- | -------------------------------- |
| ![converter](docs/converter.png) | ![favorites](docs/favorites.png) |

| Мобильная версия                         | Модальное окно входа                |
| ---------------------------------------- | ----------------------------------- |
| ![mobile-tabs](docs/mobile-adeptive.png) | ![login-modal](docs/auth-modal.png) |

## Инструкция по запуску

> **Важно:** Все команды по установке и запуску необходимо выполнять строго **из
> корневой папки** проекта (`/recipe-hub`). Не нужно переходить в другие
> подпапки.

```bash
# Установка всех зависимостей
npm install

# Запуск фронтенда (Vite)
npm run dev

# Запуск бэкенд-сервера
npm run server
```

### Скрипт базы данных и SQL-запросы

Структура БД и тестовые данные находятся в файле **`init.sql`** в корне
репозитория.

В скрипте проверены все **5 обязательных типов запросов**:

1. **SELECT с WHERE** — поиск рецептов по категории.
2. **INSERT** — добавление рецепта (совместимо с автоинкрементом бэкенда).
3. **UPDATE** — изменение заголовка рецепта по `id`.
4. **DELETE** — удаление записи по `id`.
5. **SELECT с JOIN** — связывание рецепта с автором (`users`) для вывода имени
   создателя.

<details>
<summary><b>Скрины выполнения sql запросов</b></summary>

#### 1. SELECT с условием WHERE

![SELECT WHERE](docs/db-results/1-select-where.png)

#### 2. INSERT нового рецепта

![INSERT](docs/db-results/2-insert.png)

#### 3. UPDATE заголовка

![UPDATE](docs/db-results/3-update.png)

#### 4. DELETE записи

![DELETE](docs/db-results/4-delete.png)

#### 5. SELECT с JOIN

![SELECT JOIN](docs/db-results/5-select-join.png)

</details>
