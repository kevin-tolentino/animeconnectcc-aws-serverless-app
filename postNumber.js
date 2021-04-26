/* eslint-disable quote-props */
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const findMeSomeVanityNumbers = require('./vanity.js');

// eslint-disable-next-line no-unused-vars
module.exports.submit = (event, context, callback) => {
  // eslint-disable-next-line dot-notation
  const receivedCallerSubmittedNumber = event['Details']['ContactData']['CustomerEndpoint']['Address'];
  const vanityArray = findMeSomeVanityNumbers(receivedCallerSubmittedNumber);
  const table = 'animeconnectcc-aws-serverless-app-dev';
  const PostItem = {
    number: receivedCallerSubmittedNumber,
    first: vanityArray[0],
    second: vanityArray[1],
    third: vanityArray[2],
    fourth: vanityArray[3],
    fifth: vanityArray[4],
  };

  const resultMap = {
    sentLambdaGetNumber: receivedCallerSubmittedNumber,
  };
  // console.log('test vanity', testVanity)
  console.log('receivedCallerSubmittedNumber', receivedCallerSubmittedNumber);
  // console.log('resultMap', resultMap)

  const params = {
    TableName: table,
    Item: PostItem,
  };

  console.log('Adding a new item...');
  dynamoDb.put(params, (err, data) => {
    console.log(params, 'params');
    if (err) {
      console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Added item:', JSON.stringify(data, null, 2));
    }
  });

  callback(null, resultMap);
};
