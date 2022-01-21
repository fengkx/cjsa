const lowercaseKey = require("..");

describe("lowercase-keys cjs", () => {
  test("should be defined", () => {
    expect(lowercaseKey).toBeDefined();
    expect(lowercaseKey.default).toBeInstanceOf(Function);
  });
});
