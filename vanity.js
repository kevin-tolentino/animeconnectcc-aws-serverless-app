/* eslint-disable spaced-comment,max-len */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

const TrieSearch = require('trie-search/src/TrieSearch');
const dictionaryArray = require('./wordsArray');

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

//string the numbers from the phone number
const returnNumberPossibilities = (numberFromCaller) => {
  const number = 5623037446;
  const numToString = number.toString();
  const targetDigitsOne = numToString.slice(6, 10);
  const targetDigitsTwo = numToString.slice(7, 10);
  return [targetDigitsOne, targetDigitsTwo];
};

//change the numbers to letter sets according to the digits
const numberToLetterSets = (digitStringArray) => {
  const letterSetsObj = {};
  const letterSetsArrayOne = [];
  const letterSetsArrayTwo = [];

  for (let i = 0; i < digitStringArray[0].length; i++) { // compares the digit to the key on the hashmap
    const digit = digitStringArray[0][i];
    const letterSet = digitMap.get(digit);
    letterSetsArrayOne.push(letterSet);
    if (i === digitStringArray[0].length - 1) {
      letterSetsObj.first = letterSetsArrayOne;
    }
  }
  for (let i = 0; i < digitStringArray[1].length; i++) { // compares the digit to the key on the hashmap
    const digit = digitStringArray[1][i];
    const letterSet = digitMap.get(digit);
    letterSetsArrayTwo.push(letterSet);
    if (i === digitStringArray[1].length - 1) {
      letterSetsObj.second = letterSetsArrayTwo;
    }
  }
  console.log(letterSetsObj);
  return letterSetsObj;
};

const getCombinations = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const ans = [];

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

numberToLetterSets(['7546', '456']);

module.exports = findMeSomeVanityNumbers;
