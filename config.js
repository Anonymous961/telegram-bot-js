const dotenv = require("dotenv");
dotenv.config()
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
module.exports = { TELEGRAM_BOT_TOKEN }