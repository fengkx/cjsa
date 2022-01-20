const yoctoQueue = require("..");

describe("yoctoQueue cjs", () => {
  test("should be defined", () => {
    expect(yoctoQueue).toBeDefined();
    expect(yoctoQueue.default).toBeInstanceOf(Function);
  });
});
