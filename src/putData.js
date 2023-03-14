import * as AWS from "aws-sdk";
AWS.config.region = "us-east-1";

AWS.config.credentials = new AWS.Credentials(
  process.env.VUE_APP_AWS_KEY,
  process.env.VUE_APP_AWS_SECRET
);
const docClient = new AWS.DynamoDB.DocumentClient();

export const putData = (data, onComplete) => {
  console.log(AWS.config);
  const params = {
    TableName: "Wedding_Rsvp",
    Item: data,
  };

  docClient.put(params, (err, data) => onComplete(err, data));
};
