const { Router } = require('express');
const { handleGetPosts, handleAgregarPost, handleLike, handleEliminarPost } = require('../controllers');

const APIRouter = Router();

APIRouter.get('/posts', handleGetPosts);
APIRouter.post('/posts', handleAgregarPost);
APIRouter.put('/posts/like/:id', handleLike);
APIRouter.delete('/posts/:id', handleEliminarPost);

module.exports = APIRouter;
