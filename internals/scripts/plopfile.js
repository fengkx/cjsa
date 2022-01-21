require("zx/globals");
const { absPackagesDir } = require("@cjsa/internals-shared/const");

module.exports = function (plop) {
  plop.setGenerator("package name", {
    description: "package name on npm",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "package name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${absPackagesDir}/{{name}}/build-cjs.js`,
        templateFile: "plop-templates/new-package/build-cjs.hbs",
      },
      {
        type: "add",
        path: `${absPackagesDir}/{{name}}/package-patch.json`,
        templateFile: "plop-templates/new-package/package-patch.hbs",
      },
      {
        type: "add",
        path: `${absPackagesDir}/{{name}}/test/pkg.test.js`,
        templateFile: "plop-templates/new-package/test/pkg.test.hbs",
      },
    ],
  });
};
