const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("return an array", () => {
        let shuffledArray = shuffleArray([1,2,3,4,5])
        expect(shuffledArray[0]).not.toBe(undefined)
    })
    test("have the same length as the argument", () => {
        let shuffledArray = shuffleArray([1,2,3,4,5])
        expect(shuffledArray[4]).not.toBe(undefined)
    })
})