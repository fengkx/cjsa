# CONTRIBUTING

## Before writing code

1. `pnpm` is used to maintain all the packages, You should [install it](https://pnpm.io/installation) first
1. Run `pnpm i` to install dependencies and `pnpm test` to test your setup. If all testing are passed and nothing go wrong, you are good to go.

## Add a new package

1. First of all add the git submoudle to `modules` dir.`

For example: `git submodule add https://github.com/sindresorhus/escape-goat modules/escape-goat`

2. `pnpm run add:package` to generate a template code in `packages/<package name>`
1. Finish `package-patch.json` and use `pnpx patch-package-json <package name>` to generate new package.sjon.
1. Finish `build-cjs.js` to building a working commonjs bundle. You can use either [tsup](https://tsup.egoist.sh), [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) or [rollup](https://rollupjs.org) to do the job.
1. Write unit test in `packages/<package name>/test/pkg.test.js`
1. generate README by `pnpx generate-readme`

Now you can make a pull request to add a new pacakge
