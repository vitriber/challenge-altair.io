import express from 'express';

export const routes = express.Router();

routes.get('/grade', async (req, res) => {
    function generateRandomAlphabetMatrix(letter?: string): string[][] {
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

        if (letter) {
            // Count total elements and calculate 20% of it
            const totalElements = matrix.length * matrix[0].length;
            const twentyPercent = Math.floor(totalElements * 0.2);
    
            // Randomly select 20% of the matrix and replace with the provided letter
            let count = 0;
            while (count < twentyPercent) {
                const randomRowIndex = Math.floor(Math.random() * matrix.length);
                const randomColIndex = Math.floor(Math.random() * matrix[0].length);
                if (matrix[randomRowIndex][randomColIndex] !== letter) {
                    matrix[randomRowIndex][randomColIndex] = letter;
                    count++;
                }
            }
        }
    
        return matrix;
    }

    function countLetterInMatrix(letter: string, matrix: string[][]): number {
        let count = 0;
        
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === letter) {
                    count++;
                }
            }
        }
        
        return count;
    }

    function getCode(matrix: string[][]): string {
        const date = new Date();
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        const digits = seconds.toString().split('');
        const coordinate = digits.map(Number);
       
        const firstCharacter = matrix[coordinate[0]][coordinate[1]];
        const secondCharacter = matrix[coordinate[1]][coordinate[0]];

        const occurrencesFirstChar = countLetterInMatrix(firstCharacter, matrix);
        const occurrencesSecondChar = countLetterInMatrix(secondCharacter, matrix);

        return occurrencesFirstChar.toString() + occurrencesSecondChar.toString();
    }


    const { character } = req.query;
    const randomAlphabetMatrix: string[][] = generateRandomAlphabetMatrix(character as string);
    const code = getCode(randomAlphabetMatrix)

    return res.status(201).send({
        data: randomAlphabetMatrix,
        code,
    });
})