const indentString = require("..");
describe("indent-string cjs", () => {
  test("should be defined", () => {
    expect(indentString).toBeDefined();
    expect(indentString.default).toBeInstanceOf(Function);
  });
});
