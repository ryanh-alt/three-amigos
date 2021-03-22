/**
 * @jest-environment node
 */

const request = require('supertest');

describe('Basic express loading', () => {
  let server;

  beforeEach(() => {
    server = require('../server');
  });

  afterEach(() => {
    server.close();
  });

  test('responds to /html?url=', (done) => {
    request(server).get('/html?url=https://google.com').expect(200, done);
    request(server).get('/html?url=yahoo.com').expect(200, done);
  });

  test('404 everything else', (done) => {
    request(server).get('/').expect(404, done);
  });
});
