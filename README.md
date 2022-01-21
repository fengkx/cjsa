# cjsa

> Bundle commonjs package for **Pure ESM** modules

Sometime we need to use commonjs module and we also want to have an updated and well maintain package

## How it works

every original package is a submoudles in `modules` dir.
build scripts and test is located in `pacakges` dir

Inside the `packages/{{package name}}` dir, There is a `build-cjs.js` that run the build process and exports some meta data, a `package-patch.json` to generate new `package.json` using _JSON Merge Patch_ [RFC 7396 ](https://datatracker.ietf.org/doc/html/rfc7396)

Some useful internals scripts in `internals/scripts` to help maintaining this packages

After bundling the package, packages `@cjsa/*` will be published to npm. testing is enforce by using `prepack` npm script.

## Contribute

See [./CONTRIBUTING.md]

# License

Package license remains the same as the original one. But the scripts and build workflows are GPLv3 licensed.
