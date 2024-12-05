const DB = require('../config/db');

const getAll = async () => {
    const text = 'SELECT * FROM posts';
    const res = await DB.query(text);
    return res.rows;
};

const add = async (titulo, url, desc) => {
    const text =
        'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *';
    const values = [titulo, url, desc];
    const res = await DB.query(text, values);
    console.log(res.rowCount, res.command, res.rows[0]);
    return res.rows[0];
};

const like = async (id) => {
    const query = 'UPDATE posts SET likes = likes + 1 WHERE id = $1';
    const values = [id];
    const res = await DB.query(query, values);
    console.log(`${res.rowCount} ${res.command}: ${res.rows[0]}`);
    return res.rows[0];
};

const remove = async (id) => {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
    const values = [id];
    const res = await DB.query(query, values);
    console.log(res.rowCount, res.command, res.rows[0]);
    return res.rows[0];
};

module.exports = {
    getAll,
    add,
    like,
    remove,
};
