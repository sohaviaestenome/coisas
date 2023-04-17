// index.test.js
process.env.NODE_ENV = 'testing';
const { Pool } = require('pg');
const { NODE_ENV } = require('../config');
const { DB } = require('../config')[NODE_ENV];

describe('testing postgres', () => {

    let pgPool;
    const isProduction = process.env.NODE_ENV === 'production';
    
    const connectionString = DB.DB_PASSWORD ? `postgresql://${DB.DB_USER}:${DB.DB_PASSWORD}@${DB.DB_HOST}:${DB.DB_PORT}/${DB.DB_DATABASE}`: `postgresql://${DB.DB_USER}@${DB.DB_HOST}:${DB.DB_PORT}/${DB.DB_DATABASE}`;
    console.log(connectionString, 'connection string test');

    beforeAll(async () => {
        pgPool = new Pool({
            connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
            ssl: isProduction,
        });
    
        // Create the necessary tables before running the tests
        const client = await pgPool.connect();
        try {
            await client.query(`
                CREATE TABLE IF NOT EXISTS items_test (
                    id SERIAL PRIMARY KEY,
                    nome VARCHAR(255) NOT NULL,
                    origem VARCHAR(255) NOT NULL,
                    quantidade INTEGER NOT NULL,
                    destino VARCHAR(255) NOT NULL
                );
            `);
    
            // Insert a row with the expected value of 'phones'
            await client.query(`
                INSERT INTO items_test (nome, origem, quantidade, destino)
                VALUES ('phones', 'Lisboa', 10, 'Porto');
            `);
        } catch (err) {
            console.error('Error creating tables:', err);
        } finally {
            client.release();
        }
    });

    afterAll(async () => {
        await pgPool.end();
    });

    test('pg connection', async () => {
        const client = await pgPool.connect();
        const expectedValue = 'phones';

        try {
            const { rows } = await client.query('SELECT nome FROM items WHERE nome = $1', [expectedValue]);
            console.log(rows);
            expect(rows[0]["nome"]).toBe(expectedValue);
        } catch(err) {
          throw err;
        } finally {
            client.release();
        }
    });
});
