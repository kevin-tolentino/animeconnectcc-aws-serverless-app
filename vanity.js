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

//change the numbers to letter sets according to the digits and puts them in an object
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

//find all possible string combinations with first index as base for string
const getStringCombinations = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const combinationArray = [];

  const otherCases = getStringCombinations(arr.slice(1));
  for (let i = 0; i < otherCases.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      combinationArray.push(arr[0][j] + otherCases[i]);
    }
  }
  return combinationArray;
};

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

  console.log(possibilitiesArray);
  return possibilitiesArray;
};

findMeSomeVanityNumbers({
  first: ['pqrs', 'ghi', 'ghi', 'mno'],
  second: ['ghi', 'jkl', 'mno'],
});

// returnNumberPossibilities()

// numberToLetterSets(['7546', '456']);

module.exports = findMeSomeVanityNumbers;
