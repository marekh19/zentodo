module.exports = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'es5',
  arrowParens: 'always',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/styles/(.*)$',
    '^@/lib/(.*)$',
    '^@/stores/(.*)$',
    '^@/types/(.*)$',
    '^@/hooks/(.*)$',
    '^@/assets/(.*)$',
    '^@/mocks/(.*)$',
    '',
    '^@/components/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
}
