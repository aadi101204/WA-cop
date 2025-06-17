# 🚔 WA-cop

WA-cop is a simple and extensible WhatsApp group moderation bot built using the [Baileys](https://github.com/WhiskeySockets/Baileys) JavaScript library. It monitors messages in real-time and warns users who use banned words.

---

## 📦 Features

- ✅ Real-time group message monitoring
- 🚫 Warns users for using banned or offensive words
- 🔄 Persistent WhatsApp session using Baileys
- ⚙️ Easily configurable banned words and warning thresholds
- 🛠️ Modular structure for easy expansion (e.g., auto-kick, logging)

---

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) (v16 or later)
- A WhatsApp account
- Git (optional, for cloning the repo)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aadi101204/WA-cop.git
cd WA-cop
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Banned Words

Open `config.js` and edit the list of banned words and warning limit:

```js
module.exports = {
  bannedWords: ["idiot", "stupid", "fuck", "fck", "slay", "cool", "socool"],
  warningLimit: 3,
};
```

You can add or remove words based on your needs.

---

### 4. Start the Bot

```bash
node index.js
```

* A QR code will appear in the terminal.
* Open WhatsApp on your phone → tap the 3 dots → Linked devices → Scan the QR code.
* You're now connected! The bot will monitor all incoming messages in groups you're part of.

---

## 🧠 How It Works

* The bot listens for new messages.
* If a message contains a banned word, it sends a warning mentioning the sender.
* Warnings can be tracked to take action later (e.g., kicking a user after 3 warnings — logic can be added).

---

## 📁 Folder Structure

```
WA-cop/
├── auth_info/            # WhatsApp session credentials (auto-generated)
├── utils/
│   └── moderator.js      # Handles message scanning and warning generation
├── config.js             # Banned words and warning limit config
├── index.js              # Entry point - runs the bot
├── .gitignore
└── README.md
```

---

## 🔐 .gitignore Example

```gitignore
node_modules/
auth_info/
package-lock.json
```

Ensure `auth_info/` is in `.gitignore` — it contains your WhatsApp session.

---

## ✅ To-Do / Ideas

* [ ] Auto-kick users who exceed warning limits
* [ ] Track and store warning history per user
* [ ] Admin-only commands (e.g., ban/unban words)
* [ ] Log actions to a file or dashboard

---

## 📃 License

This project is licensed under the MIT License.
Feel free to fork, modify, and contribute.

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request 🚀

---

## 🙏 Credits

* Built using [Baileys](https://github.com/WhiskeySockets/Baileys) – a powerful WhatsApp Web API
