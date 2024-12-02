# Like Me

A simple back-end application for a social networking platform built with Node.js. It supports basic CRUD operations on a PostgreSQL database using the pg module and provides API routes for client interactions via the Express.js framework.

## Installing

In order to get the app running, a postgresql database must be created using the following commands:

```sql
CREATE DATABASE likeme;
CREATE TABLE posts (
    id SERIAL,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);
```

The app also needs a .env file in the root folder with the appropiate variables:

```txt
PORT=3000
DB_HOST=localhost
DB_USER=[your user]
DB_PASSWORD=[your password]
DB_DATABASE=likeme
```

## Running

Run either 'npm run dev' or 'npm start' to start the server

## Use

At the moment the following API Routes are available:

`GET /posts`

Returns an array of objects corresponding to the posts created

`POST /posts`

Adds a new post and expects a request body in the form of:

```js
{ 
    titulo: "title",
    url: "image-url",
    descripcion: "description"
}
```