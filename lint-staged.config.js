module.exports = {
  '**/*.{js,ts,jsx,tsx}': ['prettier --write', 'eslint --fix'],
  '**/*.{json,md,css,html}': ['prettier --write'],
};
