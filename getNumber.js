module.exports.getNumber = function (event, context, callback) {
  const receivedCallerSubmittedNumber = event.Details.Parameters.callerSubmittedNumber;

  const resultMap = {
    sentLambdaGetNumber: receivedCallerSubmittedNumber,
  };

  callback(null, resultMap);
};
