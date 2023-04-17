// __tests__/coisas.controller.test.js
const request = require('supertest');
const app = require('../server');
const { db } = require('../db/index');

beforeAll(async () => {
  // Create the enum type and a test table with test data if they don't already exist
  await db.query(`
  DO $$
  BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'cidade') THEN
          CREATE TYPE Cidade AS ENUM ('Lisboa', 'Porto', 'Braga', 'Aveiro', 'Coimbra', 'Faro', 'Leiria', 'Viseu', 'Vila_Real', 'Guarda');
      END IF;
  END$$;
  
  DO $$
  BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'items') THEN
          CREATE TABLE items (
              id SERIAL PRIMARY KEY,
              nome VARCHAR(255) NOT NULL,
              origem Cidade NOT NULL,
              quantidade INTEGER NOT NULL,
              destino Cidade NOT NULL
          );
          ALTER TABLE items ADD CONSTRAINT unique_item UNIQUE (nome);
          INSERT INTO items (nome, origem, quantidade, destino)
          VALUES ('Test Item', 'Lisboa'::Cidade, 5, 'Porto'::Cidade)
          ON CONFLICT (nome) DO NOTHING;
      END IF;
  END$$;
  `);
});

describe('coisas.controller', () => {
  test('get all coisas', async () => {
    const response = await request(app).get('/coisas');
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });
  test('get coisa by id', async () => {
    const { rows } = await db.query('SELECT id FROM items LIMIT 1');
    const id = rows[0].id;
    const response = await request(app).get(`/coisas?id=${id}`);
    expect(response.status).toBe(200);
    expect(response.body.data[0].id).toBe(id);
  });
  
  
});
