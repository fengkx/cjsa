const arrify = require("..");
describe("arrify cjs", () => {
  test("should be defined", () => {
    expect(arrify).toBeDefined();
    expect(arrify.default).toBeInstanceOf(Function);
  });
});
