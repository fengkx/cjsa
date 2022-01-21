const dotProp = require("..");
describe("dot-prop cjs", () => {
  test("should be defined", () => {
    expect(dotProp).toBeDefined();
    expect(dotProp.getProperty).toBeInstanceOf(Function);
    expect(dotProp.deleteProperty).toBeInstanceOf(Function);
    expect(dotProp.hasProperty).toBeInstanceOf(Function);
    expect(dotProp.setProperty).toBeInstanceOf(Function);
  });
});
