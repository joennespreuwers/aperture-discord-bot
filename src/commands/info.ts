import { Command } from "../interfaces";
import { MessageEmbed } from "discord.js";

export const info: Command = {
   name: "info",
   aliases: ["me"],
   description: "Shows info about the bot.",
   guildId: "931968081947922462",
   run: async (bot, message) => {
      const embed = new MessageEmbed()
         .setColor(0x2f3136)
         .setTitle("Info about **Aperture **")
         .setThumbnail("https://github.com/joennespreuwers/aperture-discord-bot/blob/main/assets/icon.png?raw=true")
         .addFields(
            { name: "Creator :tools:", value: "[MrSprew#9180](https://github.com/joennespreuwers)", inline: true },
            { name: "Ping :ping_pong:", value: `${Math.round(bot.ws.ping)}ms`, inline: true },
            { name: "Github Repo :file_folder:", value: "[aperture-discord-bot](https://github.com/joennespreuwers/aperture-discord-bot)", inline: true }
         )
         .setFooter({ text: "Coded with <3 by MrSprew#9180)" });
      await message.channel.send({
         embeds: [embed],
      });
   },
};
