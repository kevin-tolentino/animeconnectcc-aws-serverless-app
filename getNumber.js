const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const table = 'animeconnectcc-aws-serverless-app-dev';

module.exports.getNumber = (event, context, callback) => {
  // eslint-disable-next-line dot-notation
  const receivedCallerSubmittedNumber = event['Details']['ContactData']['CustomerEndpoint']['Address'];

  const params = {
    TableName: table,
    Key: {
      number: receivedCallerSubmittedNumber,
    },
  };

  dynamoDb.get(params, (err, data) => {
    if (err) {
      console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      const resultMap = {
        first: data.Item.first,
        second: data.Item.second,
        third: data.Item.third,
      };
      callback(null, resultMap);
    }
  });
};
