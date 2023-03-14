const { Pool } = require('pg');
require('dotenv').config({path: './db/.env'});

describe('testing postgres', () => {

    let pgPool;
    const isProduction = process.env.NODE_ENV === 'production';
    
    const connectionString = `postgresql://${process.env.DB_USER}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

    beforeAll(() => {
        pgPool = new Pool({
            connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
            ssl: isProduction,
        });
    });

    afterAll(async () => {
        await pgPool.end();
    });

    test('pg connection', async () => {
        const client = await pgPool.connect();
        
        try {
            await client.query('BEGIN');

            const { rows } = await client.query('SELECT nome FROM items');
            console.log(rows);
            expect(rows[0]["nome"]).toBe('phones');

            await client.query('ROLLBACK');
        } catch(err) {
          throw err;
        } finally {
            client.release();
        }

    })

});