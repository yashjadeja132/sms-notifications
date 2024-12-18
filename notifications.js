const twilio = require("twilio");

require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

function sendSMS(to, message) {
  client.messages
    .create({
      body: message,
      from: "+12184387738",
      to: to,
    })
    .then((message) => console.log(`Message sent: ${message.sid}`))
    .catch((error) => console.error("Error sending SMS:", error));
}

module.exports = sendSMS;
