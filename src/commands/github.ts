import { Command } from "../interfaces";
import { MessageButton, MessageActionRow } from "discord.js";
import { githubRepo } from "../../config.json";

export const github: Command = {
   name: "github",
   description: "The discord bot's repository",
   aliases: ["gh"],

   run: async (bot, message) => {
      const row = new MessageActionRow().addComponents(new MessageButton().setLabel("Go to repo").setEmoji("📁").setStyle("LINK").setURL(`${githubRepo}`));
      await message.reply({ content: "This is the github repository where i live :D", components: [row] });
   },
};
