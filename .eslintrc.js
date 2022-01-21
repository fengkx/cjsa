module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  globals: {
    fs: "readonly",
    $: "readonly",
    path: "readonly",
    cd: "readonly",
    fetch: "readonly",
    chalk: "readonly",
    argv: "readonly",
  },
  rules: {},
};
