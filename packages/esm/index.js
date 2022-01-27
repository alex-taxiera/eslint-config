module.exports = {
  extends: [
    '@alex-taxiera/eslint-config-cjs',
  ],
  plugins: [
    'import-newlines'
  ],
  rules: {
    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 3,
      consistent: true,
    }],
    'import-newlines/enforce': [
      'error',
      {
        items: 1,
        'max-len': 80,
        semi: false
      }
    ]
  },
}
