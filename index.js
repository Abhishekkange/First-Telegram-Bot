const telegramBot = require('node-telegram-bot-api');
const API = 'SECRET KEY';

const bot = new telegramBot(API,{polling:true});

bot.on('message',(message)=>{

    // Send a response message to the same chat where the message was received from
    const chatId = message.chat.id;
    const responseMessage = 'Hello '+message.text; // Replace with your response message

    bot.sendMessage(chatId, responseMessage)
        .then(sentMessage => {
            console.log('Response message sent:', sentMessage.text);
        })
        .catch(error => {
            console.error('Error sending response message:', error);
        });
    
});







