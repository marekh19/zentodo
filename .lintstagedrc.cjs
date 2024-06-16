module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': ['tsc-files --noEmit'],
}
