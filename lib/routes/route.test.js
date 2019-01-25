const request = require('supertest');
const expect = require('expect');

const httpServer = require('../../index');

describe('GET /', () => {
	it('should return html and 200 code', done => {
		request(httpServer)
      .get('/')
      .expect('Content-Type', /html/)
			.expect(200)
			.end(done);
	});
});

describe('GET /addnote', () => {
	it('should return html and 200 code', done => {
		request(httpServer)
      .get('/addnote')
      .expect('Content-Type', /html/)
			.expect(200)
			.end(done);
	});
});

describe('GET /todo', () => {
	it('should return html and 200 code', done => {
		request(httpServer)
      .get('/todo')
      .expect('Content-Type', /html/)
			.expect(200)
			.end(done);
	});
});

describe('GET /error', () => {
	it('should return html and 200 code', done => {
		request(httpServer)
      .get('/error')
			.expect(404)
			.end(done);
	});
});