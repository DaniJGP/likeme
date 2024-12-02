const Posts = require('../models/Posts');

const handleGetPosts = async (req, res) => {
    const posts = await Posts.getAll();
    res.status(200).json(posts);
};

const handleAgregarPost = async (req,res) => {
    const {titulo, url, descripcion} = req.body;
    await Posts.add(titulo, url, descripcion);
    res.status(201).send('Post agregado correctamente');
}

module.exports = {
    handleGetPosts,
    handleAgregarPost
}