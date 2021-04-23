/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const TrieSearch = require('trie-search/src/TrieSearch');
const dictionaryArray = require('./wordsArray');

// TODO: construct number hashmap
const digitMap = new Map([
  ['1', ''],
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
  ['0', ''],
]);
// only return 4 letter, and 3 letter possibilities
const returnNumberPossibilities = (numberFromCaller) => {
  const number = 5623037446;
  const numToString = number.toString();
  const targetDigits = numToString.slice(6, 10);
  return targetDigits;
};

const numberToLetterSets = (fourDigitString) => {
  const letterSetsArray = [];
  for (let x = 0; x < fourDigitString.length; x++) { // compares the digit to the key on the hashmap
    const digit = fourDigitString[x];
    const letterSet = digitMap.get(digit);
    letterSetsArray.push(letterSet);
  }
  console.log(letterSetsArray);
  return letterSetsArray;
};

const getCombinations = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const ans = [];

  // recur with the rest of the array.
  const otherCases = getCombinations(arr.slice(1));
  for (let i = 0; i < otherCases.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      ans.push(arr[0][j] + otherCases[i]);
    }
  }
  return ans;
};

const setToStringPossibilities = (letterSetsArray) => {
  const stringPossibilities = [];
};

// function to loop through array and call the trie search to retrieve words
// const generateLetterPossibilities = (number) => {
//   arrayOfScrambledStrings = [];
//   // go through string indexes
//   for (let x = 0; x < number.length; x++) {
//     return true;
//   }
//   if (string === '1') {
//
//   }
//
//   return arrayOfScrambledStrings;
// };

const findMeSomeVanityNumbers = () => {
  const ts = new TrieSearch('word');
  ts.addAll(dictionaryArray.wordsArray);
  const result = ts.get('pig', null, 1);
  console.log(result);
  return true;
};

// findMeSomeVanityNumbers();

// returnNumberPossibilities()

numberToLetterSets('7546');

module.exports = findMeSomeVanityNumbers;
