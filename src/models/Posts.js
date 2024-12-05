const DB = require('../config/db');

const getAll = async () => {
    const text = 'SELECT * FROM posts';
    const response = await DB.query(text);
    return response.rows;
};

const add = async (titulo, url, desc) => {
    const text =
        'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *';
    const values = [titulo, url, desc];
    const response = await DB.query(text, values);
    console.log(response.rowCount, response.command, response.rows[0]);
    return response.rows[0];
};

const like = async (id) => {
    const query =
        'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *';
    const values = [id];
    const response = await DB.query(query, values);

    if (response.rowCount === 0) {
        const err = new Error();
        err.code = 404
        throw err;
    }

    console.log(response.rowCount, response.command, response.rows[0]);
    return response.rows[0];
};

const remove = async (id) => {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
    const values = [id];
    const response = await DB.query(query, values);

    if (response.rowCount === 0) {
        const err = new Error();
        err.code = 404
        throw err;
    }

    console.log(response.rowCount, response.command, response.rows[0]);
    return response.rows[0];
};

module.exports = {
    getAll,
    add,
    like,
    remove,
};
