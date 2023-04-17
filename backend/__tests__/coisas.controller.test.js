// __tests__/coisas.controller.test.js
const request = require('supertest');
const app = require('../server');
const { db } = require('../db/index');


console.log('Testing environment: ', process.env.NODE_ENV);

beforeAll(async () => {
  // Create the enum type and a test table with test data
  await db.query(`
    CREATE TEMPORARY TABLE items_test AS
    SELECT * FROM items;
    CREATE TEMPORARY TYPE Cidade_test AS ENUM ('Lisboa', 'Porto', 'Braga', 'Aveiro', 'Coimbra', 'Faro', 'Leiria', 'Viseu', 'Vila_Real', 'Guarda');
    INSERT INTO items_test (nome, origem, quantidade, destino)
    VALUES ('Test Item', 'Lisboa'::Cidade_test, 5, 'Porto'::Cidade_test);
  `);
});

afterAll(async () => {
  // Clean up the test table and enum type
  await db.query(`
    DROP TABLE items_test;
    DROP TYPE Cidade_test;
  `);
});

describe('coisas.controller', () => {
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
