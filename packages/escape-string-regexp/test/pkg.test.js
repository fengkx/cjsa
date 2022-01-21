const escapeStringRegexp = require("..");

describe("escape-string-regexp cjs", () => {
  test("should be defined", () => {
    expect(escapeStringRegexp).toBeDefined();
    expect(escapeStringRegexp.default).toBeInstanceOf(Function);
  });
});
