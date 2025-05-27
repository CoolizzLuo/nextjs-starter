/** @type {import('eslint').Linter.Config} */

module.exports = {
  plugins: ['tailwindcss'],
  extends: ['plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      // The function used to combine class names, e.g., `cn` from `classnames` or `clsx`
      callee: 'cn',
      // Path to your Tailwind CSS config file
      config: 'tailwind.config.ts',
      // CSS files to scan for class names
      cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
      // How often to refresh the CSS files (in milliseconds)
      cssFilesRefreshRate: 5000,
      // Whether to remove duplicate class names
      removeDuplicates: true,
      // Whether to skip the class attribute
      skipClassAttribute: false,
      // Classes to always include
      whitelist: ['core\\-.*'],
      // HTML tags to consider for class names
      tags: [],
      // Regex to match class attributes, can be modified for custom attributes
      classRegex: '^class(Name)?$',
    },
  },
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'error',
  },
};
