const express = require('express');
const cors = require('cors');
const APIRouter = require('./routes');

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Router
app.use('/', APIRouter);

module.exports = app;
