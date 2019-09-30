module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "getter-return": ["error", { allowImplicit: false }],
    "yoda": ["error"],
    "no-unused-vars": ["error"],
    "brace-style": ["error"]
  },
};
