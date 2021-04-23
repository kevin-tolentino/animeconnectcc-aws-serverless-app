const findMeSomeVanityNumbers = require('./vanity.js');

describe('findMeSomeVanityNumbers function', () => {
  const stringObj = {
    first: ['pqrs', 'ghi', 'ghi', 'mno'],
    second: ['ghi', 'jkl', 'mno'],
  };
  it('should give back a value in the array', () => {
    expect(Array.isArray(findMeSomeVanityNumbers(stringObj))).toBeTruthy();
  });

  it('should give back an array of words from phone number', () => {
    expect(findMeSomeVanityNumbers(stringObj)).toContain('shin');
  });

  // NOTE: With more time, I would write more tests related to returning edge cases
});
