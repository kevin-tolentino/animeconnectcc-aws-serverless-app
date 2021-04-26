const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const table = 'animeconnectcc-aws-serverless-app-dev';

module.exports.getNumber = function (event, context, callback) {
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
      console.log('DATA GET TEST', data.Item);
      console.log('DATA specifics', data.Item.info.two, typeof data.Item.info.two);
      const returnResponse = {
        statusCode: 200,
        body: JSON.stringify(data.Item),
      };
      callback(null, returnResponse);
    }
  });

  // const resultMap = {
  //   sentLambdaGetNumber: receivedCallerSubmittedNumber,
  // };

  // callback(null, null);
};
