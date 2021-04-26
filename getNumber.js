/* eslint-disable */
const findMeSomeVanityNumbers  = require('./vanity.js');

module.exports.getNumber = function (event, context, callback) {
  // const testVanity = findMeSomeVanityNumbers({
  //   first: ['pqrs', 'ghi', 'ghi', 'mno'],
  //   second: ['ghi', 'jkl', 'mno'],
  // });
  let receivedCallerSubmittedNumber = event['Details']['ContactData']['CustomerEndpoint']['Address']
  receivedCallerSubmittedNumber = receivedCallerSubmittedNumber.split('').join(' ')

  const resultMap = {
    sentLambdaGetNumber: receivedCallerSubmittedNumber,
  };
  // console.log('test vanity', testVanity)
  console.log('receivedCallerSubmittedNumberssss', receivedCallerSubmittedNumber)
  // console.log('resultMap', resultMap)

  callback(null, resultMap);
};
