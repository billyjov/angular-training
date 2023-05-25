# TODO Advanced Project

## Description

This project is a simple TODO application that uses a REST API to store the TODOs.

## Technologies

- Angular 16+
- NodeJS
- Express
- MySQL

## Requirements

- NodeJS + NPM
- MySQL
- Angular CLI

## Installation

### Client 

SEE [client](./client/) folder

```bash
    cd client
    npm install
    npm run start
```

Then open your browser and go to http://localhost:4200

### Server

SEE [server](./server/) folder

You need a running mysql server with a database named `tasks` and a user `root` with an empty password.

All parameters can be changed in the [server/ormconfig.json](./server/ormconfig.json) file.

🎈 TIP: You can use [XAMPP](https://www.apachefriends.org/index.html) to run a MySQL server locally.


```bash
    cd server
    npm install
    npm run dev
```

Supported Rest API Methods:

- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id



Built with all the love ❤️ in the world by [**@billyjov_**](https://twitter.com/billyjov_)
