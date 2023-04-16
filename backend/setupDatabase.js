const { NODE_ENV } = require('./config');
const { DB } = require('./config')[NODE_ENV];
const { Client } = require('pg');

(async () => {
  const cidadeEnumStmt = `
    DO $$ BEGIN
      CREATE TYPE Cidade AS ENUM ('Cidade1', 'Cidade2', 'Cidade3', 'Cidade4', 'Cidade5');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;
  `;

  const itemsTableStmt = `
    CREATE TABLE IF NOT EXISTS items (
      id SERIAL PRIMARY KEY,
      nome TEXT NOT NULL,
      origem Cidade NOT NULL,
      destino Cidade NOT NULL,
      quantidade INTEGER DEFAULT 1 NOT NULL
    );
  `;

  try {
    const db = new Client({
      user: DB.DB_USER,
      host: process.env.NODE_ENV === 'docker' ? 'db' : process.env.DB_HOST,
      database: DB.DB_DATABASE,
      password: DB.DB_PASSWORD,
      port: DB.DB_PORT,
    });

    db.connect();

    // Create Cidade enum type
    await db.query(cidadeEnumStmt);

    // Create tables on database
    await db.query(itemsTableStmt);

    db.end();

  } catch (err) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
  }
})();
