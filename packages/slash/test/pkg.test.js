const slash = require("..");

describe("slash cjs", () => {
  test("should be defined", () => {
    expect(slash).toBeDefined();
    expect(slash.default).toBeInstanceOf(Function);
  });
});
