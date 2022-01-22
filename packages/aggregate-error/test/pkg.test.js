const aggregateError = require("..");
describe("aggregate-error cjs", () => {
  test("should be defined", () => {
    expect(aggregateError).toBeDefined();
    expect(aggregateError.default).toBeInstanceOf(Function);
  });
});
