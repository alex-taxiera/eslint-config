module.exports = {
  extends: [
    '@alex-taxiera/eslint-config-cjs',
  ],
  plugins: [
    'modules-newline',
  ],
  rules: {
    'modules-newline/import-declaration-newline': 'error',
    'modules-newline/export-declaration-newline': 'error',
  },
}
