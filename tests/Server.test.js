/**
 * @jest-environment node
 */

const request = require('supertest');

describe('Basic express loading', () => {
  let server;

  beforeEach(() => {
    server = require('../index');
  });

  afterEach(() => {
    server.close();
  });

  test('responds to /html/:url', (done) => {
    request(server).get('/html/https%3A%2F%2Fgoogle.com').expect(200, done);
  });

  test('404 everything else', (done) => {
    request(server).get('/').expect(404, done);
  });
});
