import * as AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient();

export const putData = (data) => {
  var params = {
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
