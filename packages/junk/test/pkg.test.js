const junk = require("..");
describe("junk cjs", () => {
  test("should be defined", () => {
    expect(junk).toBeDefined();
    expect(junk.isJunk).toBeInstanceOf(Function);
    expect(junk.isNotJunk).toBeInstanceOf(Function);
    expect(junk.junkRegex).toBeInstanceOf(RegExp);
  });
});
