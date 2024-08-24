const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, serverInfoUrl } = require('./config');
const { fetchServerInfo } = require('./fetchServerInfo');

const myIntents = new Discord.Intents([
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_PRESENCES
]);

const client = new Discord.Client({ intents: myIntents });
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', async () => {
    console.log('Bot is online!');

    try {
        const serverInfo = await fetchServerInfo(serverInfoUrl);
        if (serverInfo && serverInfo.playersOnline) {
            const playersCount = serverInfo.playersOnline;
            client.user.setActivity(`${playersCount} players`, { type: 'WATCHING' });
        } else {
            console.error('Failed to fetch player count for activity.');
        }
    } catch (error) {
        console.error('Error fetching server information:', error);
    }
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command.');
    }
});

client.login(token).catch(error => {
    console.error('Failed to login:', error);
});
