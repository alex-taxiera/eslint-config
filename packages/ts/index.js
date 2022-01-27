module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
  ],
  plugins: [
    'import-newlines'
  ],
  rules: {
    camelcase: ['error', {
      ignoreImports: true,
      allow: ['^UNSAFE_'],
      properties: 'never',
      ignoreGlobals: true
    }],
    'array-bracket-spacing': ['error', 'always'],
    'arrow-parens': 'error',
    'no-console': 'error',
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
    ],
    'curly': ['error', 'all'],
    'max-len': ['error', {
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    }],
    'no-lonely-if': 'error',
    'no-multi-spaces': ['error', {
      ignoreEOLComments: true,
    }],
    'padded-blocks': ['error', {
      classes: 'always',
      blocks: 'never',
      switches: 'never',
    }],
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      overrides: {
        constructors: 'no-public',
      },
    }],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {
      exceptAfterOverload: true,
    }],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreParameters: true,
      ignoreProperties: true,
    }],
    '@typescript-eslint/no-misused-promises': ['error', {
      checksVoidReturn: false
    }],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  },
}
