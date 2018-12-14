import * as TelegramBot from 'node-telegram-bot-api';
import { readFileSync } from 'fs';

const token = readFileSync('token.txt').toString();


const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  
});

bot.on('message', (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const random: number = Math.floor(Math.random() * 10) + 1;
  if (random < 3) {
    bot.sendMessage(chatId, '야옹');
  } else if (random >= 3 && random < 6) {
    bot.sendMessage(chatId, '와아아아앙');
  } else if (random >= 6 && random < 9) {
    bot.sendMessage(chatId, '와앙');
  } else {
    bot.sendMessage(chatId, '야오오옹');
  }
});