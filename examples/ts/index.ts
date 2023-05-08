import { resolve } from 'path'

import { readFile } from 'fs/promises'

const hello = (input?: string): void => {
  // WARN FOR NOW - NOT DEFAULT BEHAVIOR
  /* eslint no-console: 1 */
  console.log(`Hello, ${input ?? 'World'}!`)
}

export const getList = async (): Promise<string> => {
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

hello()
