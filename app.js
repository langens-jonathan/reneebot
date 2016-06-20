var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: 'reneebot', appSecret: '8c402c3934de48c1a1dc59b0a52bc276' });
bot.add('/', function (session) {
    session.send('Hello World');
});

bot.add('/privacy', function(session){
    session.send('no privacy');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
