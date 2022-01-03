const Discord = require("discord.js");
const { token } = require('./config.json');
const fetch = require("node-fetch")
const client = new Discord.Client({
    intents: [
        /*
            Intents 'GUILDS' is required
            if you wish to receive (message) events
            from guilds as well.

            If you don't want that, do not add it.
            Your bot will only receive events
            from Direct Messages only.
        */
        'GUILDS',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGES'
    ],
    partials: ['MESSAGE', 'CHANNEL'] // Needed to get messages from DM's as well
});


function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}





client.on('ready', () =>{
    console.log('Bot Online! Woohoo!');
});


client.on('messageCreate', msg => {
  if (msg.content == "Hello") {
    msg.reply("Hi!");
  }
});

client.on('messageCreate', msg => {
  if (msg.content == "inspire me") {
    getQuote().then(quote => msg.channel.send(quote))
  }
});


client.on('messageCreate', message =>{
    console.log('Message registered!');
  if (message.content == "ping") {
    message.reply("pong!");
  }
});

client.login(token)
