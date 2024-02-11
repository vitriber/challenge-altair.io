import express from 'express';

export const routes = express.Router();

routes.get('/grade', async (req, res) => {
    function generateRandomAlphabetMatrix(): string[][] {
        const matrix: string[][] = [];
        
        for (let i = 0; i < 10; i++) {
            const row: string[] = [];
            for (let j = 0; j < 10; j++) {
                const randomCharCode = Math.floor(Math.random() * 26) + 97; // Random char code from 'a' to 'z'
                const randomLetter = String.fromCharCode(randomCharCode);
                row.push(randomLetter);
            }
            matrix.push(row);
        }
        
        return matrix;
    }

    const randomAlphabetMatrix: string[][] = generateRandomAlphabetMatrix();
    return res.status(201).send(randomAlphabetMatrix);
})