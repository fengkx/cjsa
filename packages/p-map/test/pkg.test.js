const pMap = require("..");
describe("p-map cjs", () => {
  test("should be defined", () => {
    expect(pMap).toBeDefined();
    expect(pMap.default).toBeInstanceOf(Function);
    expect(typeof pMap.pMapSkip).toBe("symbol");
  });
});
