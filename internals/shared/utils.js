require("zx/globals");
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
