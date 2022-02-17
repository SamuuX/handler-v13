module.exports = {
    name: "setup-sugerencias",
    aliases: ["set-suggestions", "setup-sugerencias"],
    desc: "Sirve para setear canales de sugerencias",
    run: async (client, message, args, prefix) => {
        const channel = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first();
        if (!channel) return message.reply(`❌ El Canal que has mencionado **NO** es válido!`);
        client.setups.set(message.guild.id, channel.id, "sugchannel");
        return message.reply(`✅ **El canal ${channel} se ha establecido correctamente como el canal de sugerencias!**`)
    }
}