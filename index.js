'use strict';

const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();

client.once('ready', () => {
    // Bot ready status log message
    console.log("[!]: Connected as [ " + client.user.tag + " ]");
});

client.on('message', message => {
    //Stops bot from replying to itself
    if (message.author === client.user) {
        return;
    }

    // Ping response handler
    if (message.content === '!ping') {
        // Sends pong in response to ping message
        message.channel.send('pong');
        console.log("[+]: Command [ !ping ] was called by [ " + message.author.tag + "]");
    }
});

client.login(config.token);