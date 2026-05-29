const request = require('supertest');
const app = require('../app'); 

describe('Productivity Tracker Pipeline Testing Suite', () => {

    // Test 1: Verify the /health monitoring endpoint responds correctly
    it('GET /health should respond with a 200 HTTP status and status UP', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe('UP');
    });

    // Test 2: Verify the login endpoint renders or responds
    it('GET /login should load the login template successfully', async () => {
        const res = await request(app).get('/login');
        expect(res.statusCode).toEqual(200);
    });
});