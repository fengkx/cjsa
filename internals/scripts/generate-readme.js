const { $, fs, path, cd } = require("zx");
const { absPackagesDir } = require("@cjsa/internals-shared/const");
const {
  getAllPackages,
  stripCjsaPatchSuffix,
} = require("@cjsa/internals-shared/utils");

async function main() {
  try {
    const packages = await getAllPackages();
    await Promise.all(packages.map((pkg) => generateReadme(pkg)));
    cd(absPackagesDir);
    await $`pnpx prettier -w **/*.md`;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function generateReadme(pkg) {
  const targetPath = path.join(absPackagesDir, pkg, "README.md");
  const pkgJson = await fs.readJson(
    path.join(absPackagesDir, pkg, "package.json")
  );
  const content = `
# ${pkgJson.name}@${stripCjsaPatchSuffix(pkgJson.version)}
Source Code: https://github.com/fengkx/cjsa/tree/master/packages/${pkg}

You can find usage(exports) in [unit test](https://github.com/fengkx/cjsa/tree/master/packages/${pkg}/test/pkg.test.js)

-----
Created by [cjsa](https://github.com/fengkx/cjsa/)

Original package: https://www.npmjs.com/package/${pkg}/v/${stripCjsaPatchSuffix(
    pkgJson.version
  )}
License: ${pkgJson.license}
    `;
  return await fs.writeFile(targetPath, content);
}

exports.generateReadme = generateReadme;
exports.main = main;
if (require.main === module) {
  main();
}
