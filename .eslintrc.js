/** @type {import('eslint').Linter.Config} */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    './eslint-config/base.js',
    './eslint-config/react.js',
    './eslint-config/typescript.js',
    './eslint-config/import.js',
    './eslint-config/prettier.js',
    './eslint-config/tailwindcss.js',
  ],
};
