require("zx/globals");
const { absModulesDir } = require("@cjsa/internals-shared/const");
const packageName = "p-timeout";
exports.packageName = packageName;
const moduleDir = path.join(absModulesDir, packageName);
const moduleDistDir = path.join(moduleDir, "dist");
const packageDistDir = path.join(__dirname, "dist-cjs");
async function main() {
  await checkout();
  await build();
  await postbuild();
}
async function build() {
  await fs.emptyDir(moduleDistDir);
  await $`pnpx tsup index.js --target es2020 --format cjs,esm --dts --splitting`;
}
async function postbuild() {
  await fs.copy(moduleDistDir, packageDistDir);
  await fs.copyFile(
    path.join(moduleDir, "index.d.ts"),
    path.join(packageDistDir, "index.d.ts")
  );
}
const versionToGitTag = (version) => `v${version}`;
const checkout = async () => {
  cd(moduleDir);
  const { version } = await fs.readJSON(path.join(moduleDir, "package.json"));
  await $`git checkout --quiet ${versionToGitTag(version)}`;
};
exports.moduleDir = moduleDir;
exports.moduleDistDir = moduleDistDir;
exports.versionToGitTag = versionToGitTag;
exports.packageDistDir = packageDistDir;
exports.main = main;
if (require.main === module) {
  main();
}
