const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const databaseName = 'testBudget';
const Budget = require('../models/budget.model');
const Transaction = require('../models/transaction.model');

describe('Budget Tests', () => {
    var objectIdString;

    beforeAll(async () => {
        const url = `${process.env.MONGODB_URI}/${databaseName}`
        await mongoose.connect(url, { useNewUrlParser: true });
    })

    it('saves budget item to db', async () => {
        const res = await request(app)
            .post(`/budget`)
            .send({
                name: 'Mexico Trip',
                amount: 1000,
                startDate: new Date(2005, 15, 5),
                endDate: new Date(2005, 15, 20)
            });
    
        expect(res.statusCode).toEqual(200);
    })

    it('gets budget items from db', async () => {
        const res = await request(app)
            .get(`/budget`);
    
        expect(res.body.length).toEqual(1);
        expect(res.body[0].name).toEqual("Mexico Trip");
        expect(res.body[0].amount).toEqual(1000);
        expect(res.body[0].transactions.length).toEqual(0);
    })

    it('updates budget item in db', async () => {
        const res = await request(app)
            .put(`/budget/${objectIdString}`)
            .send({
                name: 'Mexico Trip2',
                amount: 1500,
                startDate: new Date(2005, 15, 5),
                endDate: new Date(2005, 15, 20)
            });
    
        expect(res.statusCode).toEqual(200);
    })

    it('adds transaction item to budget in db', async () => {
        const res = await request(app)
            .post(`/budget/${objectIdString}/addtransaction`)
            .send({
                name: 'Lunch',
                amount: 60,
            });
    
        expect(res.statusCode).toEqual(200);
    })

    it('deletes budget item from db', async () => {
        const res = await request(app)
            .delete(`/budget/${objectIdString}`);

        expect(res.statusCode).toEqual(200);
    })
})


