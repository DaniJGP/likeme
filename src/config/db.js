require('dotenv').config();
const { Pool } = require('pg');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const DB = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true,
});

// Check the database connection
const getDate = async () => {
    const result = await DB.query('SELECT NOW()');
    console.log(result.rows[0]); // Should show the current UTC time
};
getDate();

module.exports = DB;
