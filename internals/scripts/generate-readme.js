const { $, fs, path, cd } = require("zx");
const {
  absPackagesDir,
} = require("@tocjs/internals-shared/const");

async function main() {
  try {
    const files = await (await fs.readdir(absPackagesDir, {withFileTypes: true}));
    const packages = files.filter(f => f.isDirectory()).map(d => d.name);
    await Promise.all(packages.map((pkg) => generateReadme(pkg)))
    cd(absPackagesDir);
    await $`pnpx prettier -w **/*.md`
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function generateReadme(pkg) {
    const targetPath = path.join(absPackagesDir, pkg, 'README.md');
    const pkgJson = await fs.readJson(path.join(absPackagesDir, pkg, 'package.json'));
    const content =`
# ${pkgJson.name}@${pkgJson.version}
Source Code: https://github.com/fengkx/tocjs/tree/master/packages/${pkg}

You can find usage(exports) in [unit test](https://github.com/fengkx/tocjs/tree/master/packages/${pkg}/test/pkg.test.js)

-----
Created by [tocjs](https://github.com/fengkx/tocjs/)

Original package: https://www.npmjs.com/package/${pkg}/v/${pkgJson.version}
License: ${pkgJson.license}
    `
    return await fs.writeFile(targetPath, content);
}

exports.generateReadme = generateReadme;
exports.main = main;
if (require.main === module) {
  main();
}
