/* eslint-disable spaced-comment,max-len */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
require('dotenv').config();
const TrieSearch = require('trie-search/src/TrieSearch');
const dictionaryArray = require('./wordsArray');
const {
  formatToVanityNumber, getStringCombinations, returnNumberPossibilities, numberToLetterSets,
} = require('./utils');

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
      const formattedVanity = formatToVanityNumber(phoneNumber, result[0].word, phoneNumber.slice(8, 12));
      possibilitiesArray.push(formattedVanity);
    }
    if (possibilitiesArray.length === 5) break;
  }

  for (let i = 0; i < arrayTwo.length; i++) {
    const result = ts.get(arrayTwo[i], null, 1);
    if (result.length !== 0) {
      const formattedVanity = formatToVanityNumber(phoneNumber, result[0].word, phoneNumber.slice(9, 12));
      possibilitiesArray.push(formattedVanity);
    }
    if (possibilitiesArray.length === 5) break;
  }
  console.log('RETURN ARRAY', possibilitiesArray);
  return possibilitiesArray;
};

findMeSomeVanityNumbers(process.env.PHONENUMBER);

module.exports = findMeSomeVanityNumbers;
