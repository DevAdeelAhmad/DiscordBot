const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages ] });

client.on("messageCreate", (message) => {
    console.log("A message was created, it is; " + message.content);
});

client.login(
    MTExOTc2NDI1ODQyNzc3Mjk5OA.G-AFQD.m2q4C0rRb_uTN9Ri-DdZ42yhZZ1wsfLJl6F8uQ
);