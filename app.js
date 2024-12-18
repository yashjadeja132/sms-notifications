const express = require("express");
const sendSMS = require("./notifications");
const app = express();
const port = process.env.PORT;

sendSMS(
  "+12345678901",
  "🚀 SEO Validation Completed: All links passed successfully!"
);

app.get("/", (req, res) => {
  res.send("Hello, Node.js with Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
