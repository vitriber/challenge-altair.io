import express from 'express';
import { GetGridUseCase } from './use-cases/get-grid-use-case';

export const routes = express.Router();

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