/* eslint-disable spaced-comment,max-len */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const AWS = require('aws-sdk');
const TrieSearch = require('trie-search/src/TrieSearch');
const dictionaryArray = require('./wordsArray');
const { getStringCombinations } = require('./utils');

const findMeSomeVanityNumbers = (stringPossibilitiesObject) => {
  const ts = new TrieSearch('word');
  ts.addAll(dictionaryArray.wordsArray);

  const possibilitiesArray = [];
  const arrayOne = getStringCombinations(stringPossibilitiesObject.first);
  const arrayTwo = getStringCombinations(stringPossibilitiesObject.second);

  for (let i = 0; i < arrayOne.length; i++) {
    const result = ts.get(arrayOne[i], null, 1);
    if (result.length !== 0) {
      possibilitiesArray.push(result[0].word);
    }
  }

  for (let i = 0; i < arrayTwo.length; i++) {
    const result = ts.get(arrayTwo[i], null, 1);
    if (result.length !== 0) {
      possibilitiesArray.push(result[0].word);
    }
  }
  return possibilitiesArray;
};

findMeSomeVanityNumbers({
  first: ['pqrs', 'ghi', 'ghi', 'mno'],
  second: ['ghi', 'jkl', 'mno'],
});

module.exports = findMeSomeVanityNumbers;
