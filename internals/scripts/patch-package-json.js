require("zx/globals");
const mergePatch = require("json-merge-patch");
const {
  absModulesDir,
  absPackagesDir,
} = require("@cjsa/internals-shared/const");

async function main() {
  const packageName = argv._[0];
  if (!packageName) {
    console.error(chalk.red("Should provide package"));
    process.exit(1);
  }
  try {
    const source = await fs.readJSON(
      path.join(absModulesDir, packageName, "package.json")
    );
    const patch = await fs.readJSON(
      path.join(absPackagesDir, packageName, "package-patch.json")
    );
    const result = mergePatch.apply(source, patch);
    await fs.writeJson(
      path.join(absPackagesDir, packageName, "package.json"),
      result,
      { spaces: 2 }
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

exports.main = main;
if (require.main === module) {
  main();
}
