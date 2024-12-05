const Posts = require('../models/Posts');

const handleGetPosts = async (req, res) => {
    const posts = await Posts.getAll();
    res.status(200).json(posts);
};

const handleAgregarPost = async (req,res) => {
    const {titulo, url, descripcion} = req.body;
    await Posts.add(titulo, url, descripcion);
    res.status(201).send('Post agregado');
}

const handleLike = async (req, res) => {
    const {id} = req.params;
    await Posts.like(id);
    res.status(200).send('Like realizado');
}

const handleEliminarPost = async (req, res) => {
    const {id} = req.params;
    await Posts.remove(id);
    res.status(200).send('Post eliminado');
}

module.exports = {
    handleGetPosts,
    handleAgregarPost,
    handleLike,
    handleEliminarPost,
}