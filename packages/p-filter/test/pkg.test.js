const pFilter = require("..");
describe("p-filter cjs", () => {
  test("should be defined", () => {
    expect(pFilter).toBeDefined();
    expect(pFilter.default).toBeInstanceOf(Function);
  });
});
