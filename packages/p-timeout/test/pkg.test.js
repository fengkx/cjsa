const pTimeout = require("..");
describe("p-timeout cjs", () => {
  test("should be defined", () => {
    expect(pTimeout).toBeDefined();
    expect(pTimeout.default).toBeInstanceOf(Function);
    expect(pTimeout.TimeoutError).toBeInstanceOf(Function);
    expect(new pTimeout.TimeoutError().name).toBe("TimeoutError");
  });
});
