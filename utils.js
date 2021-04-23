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

// string the numbers from the phone number
const returnNumberPossibilities = (numberFromCaller) => {
  const numToString = numberFromCaller.toString();
  const targetDigitsOne = numToString.slice(6, 10);
  const targetDigitsTwo = numToString.slice(7, 10);
  return [targetDigitsOne, targetDigitsTwo];
};

// change the numbers to letter sets according to the digits and puts them in an object
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
  return letterSetsObj;
};

// find all possible string combinations with first index as base for string
const getStringCombinations = (letterSetArray) => {
  if (letterSetArray.length === 1) {
    return letterSetArray[0];
  }
  const combinationArray = [];

  const otherCases = getStringCombinations(letterSetArray.slice(1));
  for (let i = 0; i < otherCases.length; i++) {
    for (let j = 0; j < letterSetArray[0].length; j++) {
      combinationArray.push(letterSetArray[0][j] + otherCases[i]);
    }
  }
  console.log('combinations', combinationArray);
  return combinationArray;
};

module.exports = {
  digitMap,
  returnNumberPossibilities,
  numberToLetterSets,
  getStringCombinations,
};
