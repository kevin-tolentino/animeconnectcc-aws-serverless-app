/* eslint-disable */
module.exports.getNumber = function (event, context, callback) {
  const receivedCallerSubmittedNumber = event['Details']['Parameters']['callerSubmittedNumber'];

  const resultMap = {
    sentLambdaGetNumber: receivedCallerSubmittedNumber,
  };
  console.log('receivedCallerSubmittedNumber', receivedCallerSubmittedNumber)
  console.log('resultMap', resultMap)

  callback(null, resultMap);
};
