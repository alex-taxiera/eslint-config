module.exports = {
  extends: [
    '@alex-taxiera/eslint-config-esm',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    'modules-newline',
  ],
  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-interface': ['error', {
      allowSingleExtends: true,
    }],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreParameters: true,
      ignoreProperties: true,
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
    }],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      overrides: {
        constructors: 'no-public',
      },
    }],
  },
}
