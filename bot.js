const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520262638010368002");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**# Welllllllcome , to ObX Kingdom 🌹 .**`), 4000)        
}
});


client.login(process.env.BOT_TOKEN);
