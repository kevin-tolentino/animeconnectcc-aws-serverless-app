const findMeSomeVanityNumbers = require('./vanity.js');

describe('findMeSomeVanityNumbers function', () => {
  it('should give back a value in the array', () => {
    expect(Array.isArray(findMeSomeVanityNumbers())).toBeTruthy();
  });

  it('should give back an array of words from phone number', () => {
    expect(findMeSomeVanityNumbers()).toContain('shin');
  });
});
