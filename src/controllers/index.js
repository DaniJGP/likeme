const Posts = require('../models/Posts');

const handleGetPosts = async (req, res, next) => {
    try {
        const posts = await Posts.getAll();
        res.json(posts);
    } catch (err) {
        next(err);
    }
};

const handleAgregarPost = async (req, res, next) => {
    try {
        const { titulo, url, img, descripcion } = req.body;
        const post = await Posts.add(titulo, url || img, descripcion);
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};

const handleLike = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Posts.like(id);
        res.json({ message: 'Like realizado' });
    } catch (err) {
        next(err);
    }
};

const handleEliminarPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Posts.remove(id);
        res.json({ message: 'Post eliminado correctamente' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    handleGetPosts,
    handleAgregarPost,
    handleLike,
    handleEliminarPost,
};
