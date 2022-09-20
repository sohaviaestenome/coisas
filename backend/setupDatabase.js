const { NODE_ENV } = require('./config');
const { DB } = require('./config')[NODE_ENV];
const {Client} = require('pg');

(async () => {

  const itemsTableStmt = `CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY ,
    nome TEXT NOT NULL,
    origem TEXT NOT NULL,
    destino TEXT NOT NULL,
    quantidade INTEGER DEFAULT 1 NOT NULL
  );`
  

  try {
    const db = new Client({
      user: DB.DB_USER,
      host: DB.DB_HOST,
      database: DB.DB_DATABASE,
      password: DB.DB_PASSWORD,
      port: DB.DB_PORT,
    });

    db.connect();

    // Create tables on database
    await db.query(itemsTableStmt);

    db.end();

  } catch(err) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
  } 
})();