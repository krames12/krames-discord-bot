require("dotenv").config();
const Discord = require("discord.js");
const token = process.env.DISCORD_TOKEN;

const client = new Discord.Client();

client.on('message', message => {
  if (message.content === "!test") {
    message.channel.send(`What's up ${message.author}`);
  }

  if (message.content === "!stream") {
    message.channel.send('https://twitch.tv/bsb_krames');
  }

  if (message.content === "!pretty-message") {
    const embed = new Discord.RichEmbed()
      .setTitle('The match has now started!')
      .setColor(0xFF0000)
      .setAuthor(message.author.username)
    message.channel.send(embed);
  }
});

client.on('ready', () => {
  console.log("Bot is now connected");

  // client.channels.find(channel => channel.name === "bot-testing").send(`Kramer Dev Bot has connected`);
});

client.login(token);