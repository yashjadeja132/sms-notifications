const { WebClient } = require("@slack/web-api");
require('dotenv').config();

const token = process.env.TOKEN_KEY;

const web = new WebClient(token);

async function getUserIdByEmail(email) {
  try {
    const result = await web.users.lookupByEmail({ email });

    if (result.user) {
      console.log(`User ID for ${email}: ${result.user.id}`);
      return result.user.id;
    } else {
      console.log(`User not found for email: ${email}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
}

async function sendSlackNotificationToUser(email, messageText) {
  const userId = await getUserIdByEmail(email);

  if (userId) {
    try {
      const result = await web.chat.postMessage({
        channel: userId,
        text: messageText,
      });

      console.log("Message sent successfully!", result.ts);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  } else {
    console.log(
      `User with email ${email} not found in the workspace. Sending email...`
    );
  }
}

module.exports = sendSlackNotificationToUser;
