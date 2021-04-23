/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const TrieSearch = require('trie-search/src/TrieSearch');
const wordsArray = require('./wordsArray');

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

// TODO: Work on this function to return the letter sets you want to search
const numberToLetterSets = (fourDigitString) => {
  // start a for loop and start iterating through second index, check if end of array, then start the next index
  const letterSetsArray = [];
  for (let x = 0; x < fourDigitString.length; x++) { // compares the digit to the key on the hashmap
    const digit = fourDigitString[x];
    const letterSet = digitMap.get(digit);
    letterSetsArray.push(letterSet);
  }
  console.log('function ran', letterSetsArray);
// return [] of string possibilities
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
  ts.addAll(wordsArray.wordsArray);
  const result = ts.get('pig', null, 1);
  console.log(result);
  return true;
};

// findMeSomeVanityNumbers();

// returnNumberPossibilities()

numberToLetterSets('7446');

console.log(digitMap);
console.log(typeof (digitMap.get(2)));

module.exports = findMeSomeVanityNumbers;
