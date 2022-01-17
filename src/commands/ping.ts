import { Command } from "../interfaces";

export const ping: Command = {
   name: "ping",
   description: "Ping the bot",
   aliases: ["pong", "latency"],
   guildId: "931968081947922462",
   run: async (bot, message) => {
      const msg = await message.channel.send("Ping?");
      await msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`);
   },
};
