const Posts = require('../models/Posts');

const handleGetPosts = async (req, res) => {
    const posts = await Posts.getAll();
    res.json(posts);
};

const handleAgregarPost = async (req,res) => {
    const {titulo, url, img, descripcion} = req.body;
    const post = await Posts.add(titulo, url || img, descripcion);
    res.json(post);
}

const handleLike = async (req, res) => {
    const {id} = req.params;
    await Posts.like(id);
    res.send('Like realizado');
}

const handleEliminarPost = async (req, res) => {
    const {id} = req.params;
    await Posts.remove(id);
    res.send('Post eliminado');
}

module.exports = {
    handleGetPosts,
    handleAgregarPost,
    handleLike,
    handleEliminarPost,
}