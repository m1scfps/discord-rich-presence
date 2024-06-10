const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});


const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1249802424999477400')
        .setType('WATCHING')
        .setURL('')
        .setState('💰 Making Money...')
        .setName('TradingView')
        .setDetails('Analysing Forex Charts...')
        .setAssetsLargeImage('')
        .setAssetsLargeText('')
        .setAssetsSmallImage('')
        .setAssetsSmallText('')
        .addButton('IC Markets', '')
        .addButton('FTMO', '');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
