import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

describe('app test', () => {
    it('GET /not_found', async () => {
        const res = await request(app).get('/not_found').expect(404);
        expect(res.body.message).to.equal('Not Found');
    });
});
