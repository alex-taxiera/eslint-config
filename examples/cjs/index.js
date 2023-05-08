const { resolve } = require('path')

const { readFile } = require('fs/promises')

module.exports.getList = async () => {
  const path = resolve(
    process.cwd(),
    'examples/assets',
    'SOME_LIST.txt')

  const buffer = await readFile(path)

  return buffer
    .toString()
    .split('\n')[0] ===
    'https://kitsu.io/anime/squid-girl'
    ? 'Got a SQUID GIRL'
    : 'No squid Girl?'
}
