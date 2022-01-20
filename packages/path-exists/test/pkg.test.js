const pathExists = require('..');

describe('pathExists cjs', () => {
    test('should be defined', () => {
        expect(pathExists).toBeDefined();
        expect(pathExists.pathExists).toBeInstanceOf(Function);
        expect(pathExists.pathExistsSync).toBeInstanceOf(Function)
    })
})