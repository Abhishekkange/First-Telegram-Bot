const telegramBot = require('node-telegram-bot-api');

const API = "6303358546:AAF76kR69yBbtpvJKc52ku-no0NhRtmm52o"

const bot = new telegramBot(API,{polling:true});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["shahrukh khan", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });
    
    });

    bot.on('message', (msg) => {

        var Hi = "hi";
        if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
          bot.sendMessage(msg.chat.id,"<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>" ,{parse_mode : "HTML"});
          }
       });

    bot.on('message', (message) => {
        if (message.text === "shahrukh khan") {
            bot.sendPhoto(
                message.chat.id,
                "https://filmfare.wwmindia.com/content/2019/oct/shahrukhkhan7676761570181830.jpg",
                { caption: "This is Shahrukh Khan" }
            );
        }
    });

    bot.on('message', (msg) => {
        var location = "location";
        if (msg.text.indexOf(location) === 0) {
            bot.sendLocation(msg.chat.id,44.97108, -104.27719);
            bot.sendMessage(msg.chat.id, "Here is the point");
    
        }
    });
    
    bot.on('message', (msg) => {

        var what = "idiot";
        if (msg.text.includes(what)) {
        bot.kickChatMember(msg.chat.id,  msg.from.id);
        }
        

        });
    /









