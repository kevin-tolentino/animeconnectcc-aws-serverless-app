// const wordArray = require('./10000-common-word')
const wordsArray = require('./wordsArray')
const TrieSearch = require('trie-search/src/TrieSearch');


console.log(Array.isArray(wordsArray.wordsArray), 'print')

const findMeSomeVanityNumbers = () => {
  const ts = new TrieSearch('word')
  ts.addAll(wordsArray.wordsArray)
  const result = ts.get('sign', null, 1)
  console.log(result)
  return true
}

findMeSomeVanityNumbers()

module.exports = findMeSomeVanityNumbers
