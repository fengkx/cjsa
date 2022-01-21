const globby = require("..");

describe("globby cjs", () => {
  test("should be defined", () => {
    expect(globby).toBeDefined();
    expect(globby.globby).toBeInstanceOf(Function);
    expect(globby.generateGlobTasks).toBeInstanceOf(Function);
    expect(globby.globbyStream).toBeInstanceOf(Function);
    expect(globby.globbySync).toBeInstanceOf(Function);
    expect(globby.isDynamicPattern).toBeInstanceOf(Function);
    expect(globby.isGitIgnored).toBeInstanceOf(Function);
    expect(globby.isGitIgnoredSync).toBeInstanceOf(Function);
  });
});
