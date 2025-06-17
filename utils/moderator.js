const { bannedWords } = require("../config");

function moderateMessage(message) {
  const lower = message.toLowerCase();
  for (const word of bannedWords) {
    console.log(`Checking for banned word: ${word} in message: "${lower}"`);
    if (lower.includes(word)) {
      return `Inappropriate language detected: "${word}"`;
    }
  }
  return null;
}

module.exports = { moderateMessage };
