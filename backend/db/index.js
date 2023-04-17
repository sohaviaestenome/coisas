//index.js
const { NODE_ENV } = require('../config');
const { DB } = require('../config')[NODE_ENV];

const { Pool } = require('pg');
const isProduction = NODE_ENV === 'production';

const connectionString = DB.DB_PASSWORD ? `postgresql://${DB.DB_USER}:${DB.DB_PASSWORD}@${DB.DB_HOST}:${DB.DB_PORT}/${DB.DB_DATABASE}`: `postgresql://${DB.DB_USER}@${DB.DB_HOST}:${DB.DB_PORT}/${DB.DB_DATABASE}`;
console.log('Connected to database with config: ', connectionString);

const db = new Pool({
  connectionString: isProduction ? DB.DATABASE_URL : connectionString,
  ssl: isProduction,
});

module.exports = { db }
