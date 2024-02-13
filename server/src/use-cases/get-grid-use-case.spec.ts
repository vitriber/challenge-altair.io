import { GetGridUseCase } from "./get-grid-use-case"

const getGrid = new GetGridUseCase()

const matrixMock = [
    [
        "f",
        "z",
        "z",
        "x",
        "h",
        "u",
        "c",
        "h",
        "u",
        "q"
    ],
    [
        "q",
        "j",
        "z",
        "b",
        "x",
        "m",
        "b",
        "z",
        "z",
        "o"
    ],
    [
        "i",
        "q",
        "x",
        "i",
        "c",
        "d",
        "f",
        "t",
        "k",
        "v"
    ],
    [
        "s",
        "x",
        "y",
        "v",
        "i",
        "i",
        "g",
        "f",
        "d",
        "q"
    ],
    [
        "x",
        "g",
        "z",
        "w",
        "g",
        "g",
        "t",
        "s",
        "r",
        "z"
    ],
    [
        "z",
        "z",
        "p",
        "c",
        "o",
        "z",
        "p",
        "z",
        "u",
        "j"
    ],
    [
        "n",
        "o",
        "s",
        "q",
        "r",
        "o",
        "x",
        "y",
        "z",
        "q"
    ],
    [
        "z",
        "n",
        "v",
        "s",
        "e",
        "f",
        "z",
        "z",
        "z",
        "x"
    ],
    [
        "x",
        "z",
        "k",
        "z",
        "r",
        "z",
        "r",
        "g",
        "z",
        "x"
    ],
    [
        "z",
        "x",
        "m",
        "l",
        "g",
        "i",
        "z",
        "e",
        "u",
        "u"
    ]
]
describe('Get Grid', () => {
    it('should be able generate a matrix 10 x 10', async () => {

        const result = getGrid.generateRandomAlphabetMatrix();
        await expect(result.length).toBe(10)

    })

    it('should count correct the letter occurrences in a matrix ', async () => {

        const result = getGrid.countLetterInMatrix('z', matrixMock);
        await expect(result).toBe(22);
    })

    it('should be generate de code correctly ', async () => {

        const result = getGrid.getCode(matrixMock);
        await expect(typeof result).toBe('string')
    })


    it('should return a matrix and a code', async () => {
        getGrid.generateRandomAlphabetMatrix = jest.fn();
        jest.spyOn(getGrid, 'generateRandomAlphabetMatrix').mockReturnValue(matrixMock);
        const result = await getGrid.execute({});
        await expect(result.data).toBe(matrixMock);
        await expect(typeof result.code).toBe('string')
    })
})