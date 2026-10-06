# Sawala Learning Project

Project pembelajaran untuk kegiatan PKL Sawala yang berisi latihan JavaScript, asynchronous programming, TypeScript, dan Node.js.

## Tujuan

Project ini digunakan untuk mempelajari dasar-dasar pemrograman JavaScript hingga pengembangan backend menggunakan Node.js dan Express.js.

Pembelajaran dilakukan secara bertahap melalui latihan, module system, npm, REST API, dan mini project.

## Materi yang Dipelajari

### 01 - JavaScript Fundamentals

- Variabel dengan `let` dan `const`
- Tipe data
- `if`, `else if`, dan `else`
- Function
- Parameter, argument, dan `return`
- Operator perbandingan
- Array
- Object
- Array of Object
- `console.log()`
- Looping dengan `for`
- `forEach()`
- `map()`
- `filter()`
- `find()`
- `reduce()`
- Destructuring
- Spread operator
- ES Modules

### 02 - Async, API, dan TypeScript

Materi pembelajaran asynchronous programming, penggunaan API, dan TypeScript.

### 03 - Node.js Fundamentals

Materi pembelajaran backend menggunakan Node.js.

- Node.js
- Module System
- ES Modules
- CommonJS
- npm
- `package.json`
- Express.js
- Routing
- Middleware
- REST API
- CRUD
- Environment Variable dengan `.env`

## Mini Project REST API

Mini project berupa REST API artikel menggunakan Node.js dan Express.js.

### Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/articles` | Menampilkan semua artikel |
| GET | `/articles/:id` | Menampilkan artikel berdasarkan ID |
| POST | `/articles` | Membuat artikel baru |
| PUT | `/articles/:id` | Mengubah artikel |
| DELETE | `/articles/:id` | Menghapus artikel |

## Struktur Project

```text
sawala-learning-project-can/
│
├── 01-javascript-fundamentals/
│
├── 02-async-api-typescript/
│
├── 03-nodejs-fundamentals/
│   │
│   ├── 01-module-system/
│   │   ├── commonjs/
│   │   │   ├── index.cjs
│   │   │   └── math.cjs
│   │   │
│   │   ├── index.js
│   │   └── math.js
│   │
│   ├── 02-npm-package-json/
│   │   └── package.json
│   │
│   └── mini-project-rest-api/
│       ├── src/
│       │   ├── controllers/
│       │   │   └── articles.controller.js
│       │   │
│       │   ├── middlewares/
│       │   │   └── logger.middleware.js
│       │   │
│       │   ├── routes/
│       │   │   └── articles.route.js
│       │   │
│       │   └── server.js
│       │
│       ├── .env
│       ├── package.json
│       └── package-lock.json
│
├── README.md
└── package.json