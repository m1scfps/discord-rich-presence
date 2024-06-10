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
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('Join Now')
        .setName('Axo Coder')
        .setDetails('Discord Bots Developer')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1090901496335441990/1112386293532459150/Axo_Official.png')
        .setAssetsLargeText('Visit this')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1101758417720328203.webp?size=96&quality=lossless')
        .setAssetsSmallText('Verified')
        .addButton('Yt Channel', 'https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .addButton('Discord Server', 'https://discord.gg/axocoder');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);