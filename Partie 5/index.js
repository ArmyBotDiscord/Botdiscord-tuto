const Discord = require("discord.js");
const bot = new Discord.Client ();

var prefix = ("!")

bot.on("ready", function() {
    bot.user.setGame("ArmyBot, !help");
    console.log("Le bot est prêt");
});

bot.login(process.env.TOKEN)


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Prefix : ! | Liste des commandes: \n - !help");
        AddField["Interaction", "ping : Le bot répond pong !"]
    }

    if (message.content === "!ping"){
        message.reply("pong !")
        console.log("Commande Ping Pong effectué")
    }
});
