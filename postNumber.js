const AWS = require('aws-sdk');

// AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();

// eslint-disable-next-line no-unused-vars
module.exports.submit = (event, context, callback) => {
  const table = 'animeconnectcc-aws-serverless-app-dev';
  const number = '+15623037456';
  const samplePostItem = {
    number,
    info: {
      one: 'sign',
      two: 'shin',
      three: 'gln',
      four: 'glow',
      five: 'ilo',
    },
  };

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
};
