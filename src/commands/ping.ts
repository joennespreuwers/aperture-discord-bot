import { Command } from "../interfaces";

export const ping: Command = {
   name: "ping",
   description: "Ping the bot",
   aliases: ["pong"],
   run: async (client, message) => {
      const msg = await message.channel.send("Ping?");
      await msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
   },
};
