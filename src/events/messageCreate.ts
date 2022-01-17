import { Event, Command } from "../interfaces";
import { Message } from "discord.js";

export const messageCreate: Event = {
   name: "messageCreate",
   run: (bot, message: Message) => {
      if (message.author.bot || !message.guild || !message.content.startsWith(bot.prefix)) return;

      const args = message.content.slice(bot.prefix.length).trim().split(" ");
      const cmd = args.shift()?.toLowerCase();
      if (!cmd) return;

      const command: Command | undefined = bot.commands.get(cmd) || bot.aliases.get(cmd);
      if (!command) return;
      if (command) command.run(bot, message, ...args);
   },
};
