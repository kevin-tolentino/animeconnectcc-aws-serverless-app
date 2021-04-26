/* eslint-disable spaced-comment,max-len */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
//const AWS = require('aws-sdk');
const TrieSearch = require('trie-search/src/TrieSearch');
const dictionaryArray = require('./wordsArray');
const { getStringCombinations, returnNumberPossibilities, numberToLetterSets } = require('./utils');

const findMeSomeVanityNumbers = (phoneNumber) => {
  const ts = new TrieSearch('word');
  ts.addAll(dictionaryArray.wordsArray);

  const numberPossibilities = returnNumberPossibilities(phoneNumber);

  const letterSets = numberToLetterSets(numberPossibilities);

  const possibilitiesArray = [];
  const arrayOne = getStringCombinations(letterSets.first);
  const arrayTwo = getStringCombinations(letterSets.second);

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
  //console.log(possibilitiesArray);
  return possibilitiesArray;
};

findMeSomeVanityNumbers('+1234567890');

module.exports = findMeSomeVanityNumbers;
