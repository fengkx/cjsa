const pLocate = require('..');

describe('pLocate cjs', () => {
    test('should be defined', () => {
        expect(pLocate).toBeDefined();
        expect(pLocate.default).toBeInstanceOf(Function)
    })
})