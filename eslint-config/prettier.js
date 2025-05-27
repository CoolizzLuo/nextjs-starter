/** @type {import('eslint').Linter.Config} */

module.exports = {
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
};
