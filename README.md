# animeconnectcc-aws-serverless-app
The AnimeConnectCC Serverless Application is a Serverless deployment utlizing AWS Lamda Functions to serve an anime title reccommendation app through a contact flow in AWS Connect. 

The goal of this project is to implement AWS Lambda in such a way that a caller's phone number is converted into a vanity number, storing the 5 "best" vanity numbers, and the caller's phone number in the process.

Lambda functions are written in Node.js and utilize the Serverless Framework for deployment to and AWS instance

## 👀Recorded Demo
view the recorded demonstration at https://youtube.com

### Screenshots of Implementation

Amazon Connect Contact Flow:

![Amazon Connect Contact Flow:](https://github.com/kevin-tolentino/animeconnectcc-aws-serverless-app/blob/main/images/connect-contact-flow.png "Contact Flow")

DynamoDB Table:

![DynamoDB Table:](https://github.com/kevin-tolentino/animeconnectcc-aws-serverless-app/blob/main/images/dynamodb-table.png "Dynamo DB Table")

## Technologies Used
The project utilizes following technologies:

- AWS
    - Amazon Connect
    - AWS Lambda
    - AWS DynamoDB
    - JavaScript SDK
- Node.js
- Serverless Framework

## Implementation

### Solution
`animeconnectcc-aws-serverless-app` uses a search algorithm utilizing the trie data structure to iterate quickly and efficiently through a dictionary of common English words. 

**PLEASE NOTE: "Best" was defined as attempt to find a word within the 4 and 3 last digits within a caller's number. This was to ensure that a vanity number similar to the real world may be obtained, like 562-303-SHIN.**

This function is defined in [`vanity.js`](https://github.com/kevin-tolentino/animeconnectcc-aws-serverless-app/blob/3e93ea84a1ce421910ad70dd0a9a438cfc4ea281/vanity.js#L10) and all of it's helper functions are defined in [`utils.js`](https://github.com/kevin-tolentino/animeconnectcc-aws-serverless-app/blob/3e93ea84a1ce421910ad70dd0a9a438cfc4ea281/utils.js). 

AWS Lamda functions are then utilized during specific events in the contact flow to post data to DynamoDB and retrieve data from the respective database and external API. View the Lamda functions here at [`serverless.yml`](https://github.com/kevin-tolentino/animeconnectcc-aws-serverless-app/blob/4dd4e1b7a7aa1d5c7562054f29874c76875fd804/serverless.yml#L24).

As a bit of fun, in addition to the caller being read their vanity numbers, the caller gets a chance to be read an anime title recommendation to view at a later time.


### Struggles Faced
Notable struggles faced were: being patient in learning about the AWS ecosystem more in depth and brainstorming how best to optimize the search algorithm for the vanity words in the midst week's span of time. 

### Problems Overcome
This coding project definitely was a challenge for me. As I have not worked with Amazon Connect, Lamda, and DynamoDB before, there was a steep learning curve that needed to be dealt with. 

This was solved by reading the AWS documentation, Serverless documentation, and going through an Amazon Connect tutorial on LinkedIn learning. (Note - All my collected resources are under a heading at the bottom). Learning how to configure a serverless app was time-consuming but valuable for the future.


### Shortcuts to avoid in production
- Testing 
  - Sacrificing coverage for the sake of speed in app building is a shortcut that I took for this app, which is a bad practice. My testing for this app was not as robust as I would have wanted it to be. Only simpler unit testing for the search algorithm and its helper functions were implemented.
- HTTP Responses
    - Within my Lamda functions, I did not complete full status code coverage expected when you make a request to an API Endpoint.
- Error handling
    - My error handling within the search algorithm was not as robust as can be. Edge cases for digits 0 and 1 were not implemented due to time constrains

### What would I have done with more time
Many ideas for implementation come to mind for this question. Here are some listed by category:
- Algorithm
  - Enhance the trie search algorithm to account for numeric 1 and 0 digits as since they would not map to corresponding letters
- Testing
  - Add appropriate unit and integration testing needed to cover the code file.
- AWS
  - Utilize Amazon Lex in order for voice input for smoother and personal customer experience.
  - Utilize SSML tags in Amazon Connect Contact Flow to make the call experience more personable 
  - I would also create an alternate flow that would welcome the user back if she/he visited called the number again
  - Develope specific contrained IAM policies per function so that they do not have access to read and write if not needed.
- UI (A fun one 😄)
  - I would create a complementary UI that would complement this call center application to show an image of the recommended anime in a web browser.


##Development
### System Requirements
- NPM
- Node.js
- Serverless Framework CLI

### Getting Started
1. Clone the repository.

        git clone https://github.com/kevin-tolentino/animeconnectcc-aws-serverless-app.git
        cd animeconnectcc-aws-serverless-app

2. Install all dependencies with NPM.

        npm install

3. Deploy your Lamda Functions

        serverless deploy



##👀Recorded Demo

## Collected Resources
- Amazon Connect Call Center Tutorial - https://www.linkedin.com/learning/learning-amazon-connect-create-and-manage-a-contact-center
- Amazon DynamoDB API Documentation - https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html
- Anime API - https://jikan.moe/
- Invoking AWS Lamda Functions in Amazon Connect - https://docs.aws.amazon.com/connect/latest/adminguide/connect-lambda-functions.html
- NodeJS with DynamoDB - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html
- Trie data structure package - https://github.com/joshjung/trie-search

## Conclusion
I had much fun with this application through learning and tinkering with the various AWS services available to me! It was a challenge I wanted to face head on, and learn how to do the project well. Thank you for letting me do it! 

