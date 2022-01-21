const escapeGoat = require("..");

describe("escape-goat cjs", () => {
  test("should be defined", () => {
    expect(escapeGoat).toBeDefined();
    expect(escapeGoat.htmlEscape).toBeInstanceOf(Function);
    expect(escapeGoat.htmlUnescape).toBeInstanceOf(Function);
  });
});
