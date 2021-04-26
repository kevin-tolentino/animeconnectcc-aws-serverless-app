const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
// const findMeSomeVanityNumbers = require('./vanity.js');

// eslint-disable-next-line no-unused-vars
module.exports.submit = (event, context, callback) => {
  // eslint-disable-next-line dot-notation
  const receivedCallerSubmittedNumber = event['Details']['ContactData']['CustomerEndpoint']['Address'];
  const table = 'animeconnectcc-aws-serverless-app-dev';
  const samplePostItem = {
    receivedCallerSubmittedNumber,
    info: {
      1: 'sign',
      2: 'shin',
      3: 'gln',
      4: 'glow',
      5: 'ilo',
    },
  };

  const resultMap = {
    sentLambdaGetNumber: receivedCallerSubmittedNumber,
  };
  // console.log('test vanity', testVanity)
  console.log('receivedCallerSubmittedNumber', receivedCallerSubmittedNumber);
  // console.log('resultMap', resultMap)

  const params = {
    TableName: table,
    Item: samplePostItem,
  };

  console.log('Adding a new item...');
  dynamoDb.put(params, (err, data) => {
    if (err) {
      console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Added item:', JSON.stringify(data, null, 2));
    }
  });

  callback(null, resultMap);
};
