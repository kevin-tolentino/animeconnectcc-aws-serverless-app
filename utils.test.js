const {
  returnNumberPossibilities, numberToLetterSets, getStringCombinations,
} = require('./utils.js');

describe('returnNumberPossibilities function', () => {
  it('return an array', () => {
    expect(Array.isArray(returnNumberPossibilities(2134565432))).toBeTruthy();
  });

  it('should return an array of string values', () => {
    expect(returnNumberPossibilities(1234567898)).toContain('7898');
  });
});

describe('numberToLetterSets function', () => {
  it('return an object', () => {
    const array = ['1234567891', '1234567891'];
    expect(typeof numberToLetterSets(array) === 'object').toBeTruthy();
  });

  it('should contain an object property named first', () => {
    const array = ['1234567891', '1234567891'];
    const testObj = numberToLetterSets(array);
    expect(testObj).toHaveProperty('first');
  });
});

describe('getStringCombinations function', () => {
  it('return an array', () => {
    expect(Array.isArray(getStringCombinations(['abc', 'def', 'ghi']))).toBeTruthy();
  });
});
