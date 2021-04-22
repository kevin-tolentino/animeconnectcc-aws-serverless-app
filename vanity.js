const wordsArray = require('./wordsArray')
const TrieSearch = require('trie-search/src/TrieSearch');

// 7 pqrs 4 ghi 4 ghi 6 mno

console.log(Array.isArray(wordsArray.wordsArray), 'print')

//only return 4 letter, and 3 letter possibilities
const returnNumberPossibilities = () => {
  const number = 5623037446;
  const numToString = number.toString();
  const result = numToString.slice(6, 10)
  const result2 = numToString.slice(7, 10)
}

//TODO: Work on this function to return the letter sets you want to search
const numberToLetterSets = () => {

}

const generateLetterPossibilities = (number) => {
  arrayOfScrambledStrings = []
  //go through string indexes
  for (let x = 0; x < number.length; x++){

  }
  if (string === '1'){

  }



  return arrayOfScrambledStrings
}

const findMeSomeVanityNumbers = () => {
  const ts = new TrieSearch('word')
  ts.addAll(wordsArray.wordsArray)
  const result = ts.get('pig', null, 1)
  console.log(result)
  return true
}

findMeSomeVanityNumbers()

// returnNumberPossibilities()

module.exports = findMeSomeVanityNumbers
