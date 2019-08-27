import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

describe('echo test', () => {
    it('GET /ehco?msg', async () => {
        const msg = 'message';
        const res = await request(app).get(`/echo?msg=${msg}`).expect(200);
        expect(res.body.msg).to.equal(msg);
    });
});
