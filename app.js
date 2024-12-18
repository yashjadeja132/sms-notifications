const express = require("express");
const sendSlackNotification = require("./slack");
const app = express();
const port = process.env.PORT;

const email = "email@example.com";
const messageText =
  "🚀 SEO Validation Completed: All links passed successfully!";

sendSlackNotification(email, messageText);

app.get("/", (req, res) => {
  res.send("Hello, Node.js with Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
