const { stripCjsaPatchSuffix, isEqualOriginalVersion } = require("../utils");

describe("cjs package suffix", () => {
  test("should valid", () => {
    expect(stripCjsaPatchSuffix("1.0.0-cjsa")).toBe("1.0.0");
    expect(stripCjsaPatchSuffix("1.0.0-cjsa.0")).toBe("1.0.0");
    expect(stripCjsaPatchSuffix("1.0.0-cjsa.1")).toBe("1.0.0");
    expect(stripCjsaPatchSuffix("1.2.0")).toBe("1.2.0");
    expect(stripCjsaPatchSuffix("1.2.0-beta.0-cjsa.0")).toBe("1.2.0-beta.0");
  });
  test("should compare with original version", () => {
    expect(isEqualOriginalVersion("1.0.0-cjsa.0", "1.0.0")).toBe(true);
    expect(isEqualOriginalVersion("1.0.0-cjsa.1", "1.0.0")).toBe(true);
    expect(isEqualOriginalVersion("1.2.0-cjsa.1", "1.0.0")).toBe(false);
    expect(isEqualOriginalVersion("1.0.0-cjsa.1", "1.2.0")).toBe(false);
  });
});
