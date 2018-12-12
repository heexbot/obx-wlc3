const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520565193810640897");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**# Welllllllcome , to Nine 🌹 .**`), 4000)        
}
});


client.login(process.env.BOT_TOKEN);
