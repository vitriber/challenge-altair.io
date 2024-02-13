import express from 'express';
import { GetGridUseCase } from './use-cases/get-grid-use-case';

export const routes = express.Router();

export interface Payment {
    name?: string;
    amount?: number;
    code?: string;
    grid?: string[][];
}

const payments: Payment[] = [];

routes.get('/grid', async (req, res) => {
    const { character } = req.query;

    const getGridUseCase = new GetGridUseCase();
    
    const {data, code} = await getGridUseCase.execute({
        character: character?.toString(),
    })

    return res.status(201).send({
        data,
        code
    });
})


routes.get('/payments', async (req, res) => {
    return res.status(201).send(payments);
})

routes.post('/payments', (req, res) => {
    const { name, amount, code, grid } = req.body; 
    const payment = { name, amount, code,  grid};
    payments.push(payment);
  
    return res.status(201).send(payments);
  });