1. Cтруктура директорий проекта:

    1) src - основная директория проекта
    2) src/api - DAL уровень для запросов на сервер через axios
    3) src/component - переиспользуемые компоненты, а также просто компоненты с небольшой логикой:
    1. вывод ошибок (верхняя красная панель) src/component/errorsFromServer
    2. header с логотипом и пользователем src/component/header
    3. переиспользуемый прелоадер src/component/preloader
    4. Sidebar - меню слева src/component/sidebar
    4) src/fonts - папка со шрифтами
    5) src/hoc - папка с единственным HOC для редикта при авторизации
    6) src/images - картинки для SPA
    7) src/pages - основные страницы приложения.
    1. src/pages/home - домашняя страница с выбором таблиц и возможностью создания заявки
    2. src/pages/login - страницы логина (кастомная и дефолтная)
    3. src/pages/request - страницы для создания заявки, номер после request - шаг создания заявки
    4. src/pages/tables - таблицы для отрисовки заявок
    8) src/redux - стейт приложения
    9) src/utilities - дополнительный функционал приложения (фалидация, контроль форм)

2. Конфигурация приложения и дефолтные значения:
    1) git clone git@git.repo.services.lenvendo.ru:digift-group/b2b_platforma/app_web.git
    2) cd app_web
    3) npm install
    4) npm start
    5) Команда для сборки проекта: npm run build

3. Тестирование:

4. Неочевидные моменты: