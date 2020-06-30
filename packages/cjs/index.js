module.exports = {
  extends: [
    'standard',
  ],
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'arrow-parens': 'error',
    'no-console': 'error',
    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 3,
      consistent: true,
    }],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
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
    'comma-dangle': ['error', 'always-multiline'],
  },
}
