const dotenv = require('dotenv');
dotenv.config();
const {Pool} = require('pg')

const pool = new Pool ({
    connectionString: process.env.DBConfigLink,
    ssl: {
        rejectUnauthorized: false
    }
})


module.exports = {
    query: (text, params) => pool.query(text, params),
}