const DB = require('../config/db');

const getAll = async () => {
    const text = 'SELECT * FROM posts';
    const response = await DB.query(text);
    return response.rows;
};

const add = async (titulo, url, desc) => {
    const text = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *'
    const values = [titulo, url, desc];
    const response = await DB.query(text, values);
    console.log(response.command, response.rowCount, response.rows);
    return 1 
}

module.exports = {
    getAll,
    add
};
