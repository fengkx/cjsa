const cleanStack = require("..");

describe("clean-stack cjs", () => {
  test("should be defined", () => {
    expect(cleanStack).toBeDefined();
    expect(cleanStack.default).toBeInstanceOf(Function);
  });
});
