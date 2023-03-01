import * as AWS from "aws-sdk";
AWS.config.region = "us-east-1";

AWS.config.credentials = new AWS.Credentials(
  "AKIAULCFAKQGEA4QNA5T",
  "BELROif1oijplj4hX/iakoBKh+dQfH5yMYnGkjPf"
);
const docClient = new AWS.DynamoDB.DocumentClient();

export const putData = (data) => {
  console.log(AWS.config);
  const params = {
    TableName: "Wedding_Rsvp",
    Item: data,
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};
