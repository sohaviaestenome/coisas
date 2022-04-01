const { Client, Pool } = require('pg');


// const client = new Client ({
//     user: "postgres",
//     password: "postgres",
//     host:
//     port: 5432,
//     database: 
// })
const pool = new Pool();

module.exports = {
    query: (text,params,callback) => {
        return pool.query(text, params, callback)
    },
}