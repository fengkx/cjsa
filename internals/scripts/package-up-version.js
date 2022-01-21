const { absPackagesDir } = require("@cjsa/internals-shared/const");
const { getAllPackages } = require("@cjsa/internals-shared/utils");

require("zx/globals");

async function main() {
  const packages = await getAllPackages();
  await Promise.all(packages.map((pkg) => upgradePackage(pkg)));
  await `git submodule update --init --recursive --remote`;
  await $`pnpm i`;
  try {
    await $`pnpx generate-readme`;
    await $`pnpm run publish`;
    // await $`pnpm run publish:prod`
    if (!!process.env.GITHUB_WORKFLOW && !!process.env.SECRET_GITHUB_TOKEN) {
      await $`git push --follow-tags`;
    }
  } catch (err) {
    console.error(chalk.red(err));
  }
}

async function upgradePackage(pkg) {
  const packageJsonPath = path.join(absPackagesDir, pkg, "package.json");
  const packageJson = await fs.readJson(packageJsonPath);
  const resp = await fetch(`https://registry.npmjs.org/${pkg}`);
  const data = await resp.json();
  const latestVersion = data["dist-tags"].latest;
  const currentVersion = packageJson.version;
  if (currentVersion !== latestVersion) {
    await $`git config --local user.email "github-actions@github.com"`;
    await $`git config --local user.name "github-actions"`;
    console.info(chalk.blue(pkg), `from ${currentVersion} to ${latestVersion}`);
    packageJson.version = latestVersion;
    fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 });
    await $`git add ${packageJsonPath}`;
    const commitLog = `${pkg} from ${currentVersion} to ${latestVersion}`;
    await $`git commit -m "${commitLog}"`;
  }
}

if (require.main === module) {
  main();
}
