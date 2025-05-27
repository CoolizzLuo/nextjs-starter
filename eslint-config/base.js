/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['eslint:recommended', 'plugin:@next/next/recommended'],
  rules: {
    eqeqeq: ['error', 'always'],
    'func-style': ['error', 'expression'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-extra-semi': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
