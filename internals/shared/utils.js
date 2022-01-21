const { fs } = require("zx");
const { absPackagesDir } = require("./const");

exports.getAllPackages = async () => {
  const files = await await fs.readdir(absPackagesDir, { withFileTypes: true });
  const packages = files.filter((f) => f.isDirectory()).map((d) => d.name);
  return packages;
};
