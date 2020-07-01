# Installing
Install required plugins
```sh
npm i -D eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-modules-newline
```
Install TypeScript ESLint
```sh
npm i -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
Install this package
```sh
npm i -D @alex-taxiera/eslint-config-ts
```
# Add to .eslintrc
```
extends: '@alex-taxiera/eslint-config-ts'
parserOptions:
  project: './tsconfig.json'
```
