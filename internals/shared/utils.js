const { fs, path } = require("zx");
const { absPackagesDir } = require("./const");

exports.getAllPackages = async () => {
  const files = await await fs.readdir(absPackagesDir, { withFileTypes: true });
  const packages = files
    .filter((f) => {
      const isDir = f.isDirectory();
      const hasPackageJson = fs.existsSync(
        path.join(absPackagesDir, f.name, "package.json")
      );
      return isDir && hasPackageJson;
    })
    .map((d) => d.name);
  return packages;
};

exports.stripCjsaPatchSuffix = (version) => {
  return version.replace(/-cjsa.*/g, "").replace(/cjsa.*/g, "");
};

exports.isEqualOriginalVersion = (v1, v2) => {
  if (v1 === v2) {
    return true;
  }
  if (exports.stripCjsaPatchSuffix(v1) === exports.stripCjsaPatchSuffix(v2)) {
    return true;
  }
  return false;
};
