const findup = require("..");

describe("find-up cjs", () => {
  test("should be defined", () => {
    expect(findup).toBeDefined();
    expect(findup.findUp).toBeInstanceOf(Function);
    expect(findup.findUpMultiple).toBeInstanceOf(Function);
    expect(findup.findUpMultipleSync).toBeInstanceOf(Function);
    expect(findup.findUpSync).toBeInstanceOf(Function);
    expect(findup.pathExists).toBeInstanceOf(Function);
    expect(findup.pathExistsSync).toBeInstanceOf(Function);
  });
});
