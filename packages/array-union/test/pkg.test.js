const arrayUnion = require("..");

describe("array-union cjs", () => {
  test("should be defined", () => {
    expect(arrayUnion).toBeDefined();
    expect(arrayUnion.default).toBeInstanceOf(Function);
  });
});
