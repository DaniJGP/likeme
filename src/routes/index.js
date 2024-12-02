const { Router } = require('express');
const { handleGetPosts, handleAgregarPost } = require('../controllers');

const APIRouter = Router();

APIRouter.get('/posts', handleGetPosts);
APIRouter.post('/posts', handleAgregarPost);

module.exports = APIRouter;
