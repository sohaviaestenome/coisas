// __tests__/coisas.controller.test.js
const request = require('supertest');
const app = require('../server');
const { db } = require('../db/index');

describe('coisas.controller', () => {
  beforeAll(async () => {
    // Create the Cidade_test ENUM type and the items_test table with test data if they don't already exist
    await db.query(`
      DO $$ BEGIN
        CREATE TYPE Cidade_test AS ENUM ('Lisboa', 'Porto', 'Braga', 'Aveiro', 'Coimbra', 'Faro', 'Leiria', 'Viseu', 'Vila_Real', 'Guarda');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;

      CREATE TABLE IF NOT EXISTS items_test (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        origem Cidade_test NOT NULL,
        destino Cidade_test NOT NULL,
        quantidade INTEGER DEFAULT 1 NOT NULL
      );

      INSERT INTO items_test (nome, origem, quantidade, destino)
      VALUES ('Test Item', 'Lisboa'::Cidade_test, 5, 'Porto'::Cidade_test)
      ON CONFLICT (nome) DO NOTHING;
    `);
  });

  test('get all coisas', async () => {
    const response = await request(app).get('/coisas');
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  test('get coisa by id', async () => {
    const { rows } = await db.query('SELECT id FROM items_test LIMIT 1');
    const id = rows[0].id;
    const response = await request(app).get(`/coisas?id=${id}`);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe(id);
  });

  // Add other tests for your controller here
});
