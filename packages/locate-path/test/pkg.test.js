const locatePath = require("..");

describe("locate-path cjs", () => {
  test("should be defined", () => {
    expect(locatePath).toBeDefined();
    expect(locatePath.locatePath).toBeDefined();
    expect(locatePath.locatePathSync).toBeDefined();
  });
});
