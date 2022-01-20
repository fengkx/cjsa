const pLimit = require("..");

describe("pLimit cjs", () => {
  test("should be defined", () => {
    expect(pLimit).toBeDefined();
    expect(pLimit.default).toBeInstanceOf(Function);
  });
});
