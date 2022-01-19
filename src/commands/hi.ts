import { Command } from "../interfaces";

export const hi: Command = {
   name: "hi",
   aliases: ["hey", "hello"],
   description: "Say hi :D",

   run: async (bot, message) => {
      const msg = await message.reply(`Hi <@!${message.author.id}>, this message was sent in <#${message.channelId}>`);
      await msg.react("👋");
   },
};
