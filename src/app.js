const express = require('express');
const cors = require('cors');
const APIRouter = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Router
app.use('/', APIRouter);

// Custom error handler
app.use(errorMiddleware);

module.exports = app;
