const Discord = require('discord.js');
const config = require('./config/config.json')
const Enmap = require('enmap');
require('colors')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
})

client.setups = new Enmap({
    name: "setups",
    dataDir: "./databases"
})



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function requerirhandlers(){
    ["command", "events"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch(e){
            console.warn(e)
        }
    })
}
requerirhandlers();

client.login("Njc4OTgxMDMzMDQ3MDk3MzU1.XkqsXQ.mKssLmJxYB4nNNAmHnmqc473Q8o")