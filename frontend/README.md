# Frontend

## Angular CLI

Установка Angular CLI

`npm install -g @angular/cli`

Генерация нового проекта

`ng new frontend --routing=true --skipGit=true --style=scss`

Переход в папку нового проекта

`cd frontend`

Добавление Angular PWA

`ng add @angular/pwa`

## Angular PWA

Так как мы будем создавать PWA приложение, нужно знать что `ng serve` не поддерживает **Service Worker**.

По этой причине, нам следует настроить http-сервер, например можно установить **http-server**:

`npm install -g http-server`

Давайте теперь проверим работоспособность приложения.

Для начала соберём проект:

`ng build --prod`
