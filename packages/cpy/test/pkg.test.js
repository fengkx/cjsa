const cpy = require("..");
describe("cpy cjs", () => {
  test("should be defined", () => {
    expect(cpy).toBeDefined();
    expect(cpy.default).toBeInstanceOf(Function);
  });
});
