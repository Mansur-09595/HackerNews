# Hacker News API

[Ссылка на проект](https://newshackersabout.netlify.app/).

## Функционал

### Главная страница

-   Показывает последние 100 новостей в виде списка, отсортированного по дате, самые важные сверху.
-   Каждая новость содержит:
    -   название
    -   рейтинг
    -   ник автора
    -   дату публикации
    -   счётчик количества комментариев
-   По клику на новость происходит переход на страницу новости
-   Список новостей автоматически обновляется раз в минуту без участия пользователя
-   На странице есть кнопка для принудительного обновления списка новостей

### Страница новости

-   Содержит:
    -   ссылку на новость
    -   заголовок новости
    -   автора
    -   дату
    -   автора
    -   счётчик количества комментариев
    -   список комментариев в виде дерева
-   Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
-   Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
-   На странице есть кнопка для принудительного обновления списка комментариев
-   На странице есть кнопка для возврата к списку новостей

### Технический стек

-   Приложение разработано с использованием React и Redux Toolkit 
-   Использование TypeScript
-   Использован [официальный API Hacker News](https://github.com/HackerNews/API). Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда
-   Роутинг выполнен с использованием React Router v6
-   Приложение должно запускаться по адресу localhost:3000
-   Использование Фреймворка MUI. (https://mui.com/)
-   При переходах по ссылкам страница не перезагружается

## Запуск проекта

Клонировать проект:

```bash
$ git clone https://github.com/Mansur-09595/HackerNews
```

Перейти в директорию проекта и установить зависимости

```bash
$ cd HackerNews && npm install
```

Запустить приложение

```bash
 npm run start
```
