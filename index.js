const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1249802424999477400')
        .setType('WATCHING')
        .setURL('https://tradingview.com/')
        .setState('')
        .setName('TradingView')
        .setDetails('Analysing Forex Charts...')
        .setAssetsLargeImage('tv')
        .setAssetsLargeText('TradingView')
        .setAssetsSmallImage('tv')
        .setAssetsSmallText('TradingView')
        .addButton('IC Markets', 'https://icmarkets.eu/')
        .addButton('FTMO', 'https://ftmo.com/');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);
