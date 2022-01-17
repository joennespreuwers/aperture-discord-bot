import { Event } from "../interfaces";
import { Interaction } from "discord.js";

export const interactionCreate: Event = {
   name: "interactionCreate",
   run: async (bot, interaction: Interaction) => {
      if (!interaction.isCommand()) return;
   },
};
