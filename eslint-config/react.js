/** @type {import('eslint').Linter.Config} */

module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'off', // Disable this rule if you prefer not to enforce destructuring in React components
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off', // Not needed with Next.js or React 17+
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
