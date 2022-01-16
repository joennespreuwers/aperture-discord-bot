import Discord, { Intents } from "discord.js";
import { token } from "../config.json";

const client = new Discord.Client({
   intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_BANS,
      Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
      Intents.FLAGS.GUILD_INTEGRATIONS,
      Intents.FLAGS.GUILD_INVITES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_MESSAGE_TYPING,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
      Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_WEBHOOKS,
   ],
});

client.on("ready", () => {
   console.log("Aperture is ready and working... \n");

   const guildId = "931968081947922462";
   const guild = client.guilds.cache.get(guildId);
   let commands;

   if (guild) {
      commands = guild.commands;
   } else {
      commands = client.application?.commands;
   }

   commands?.create({
      name: "ping",
      description: "Replies with pong.",
   });

   commands?.create({
      name: "add",
      description: "Adds 2 numbers",
      options: [
         {
            name: "num1",
            description: "the first number",
            required: true,
            type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER,
         },
         {
            name: "num2",
            description: "the second number",
            required: true,
            type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER,
         },
      ],
   });
});

client.on("interactionCreate", async interaction => {
   if (!interaction.isCommand()) {
      return;
   }

   const { commandName, options } = interaction;

   if (commandName === "ping") {
      interaction.reply({
         content: "pong",
         ephemeral: false,
      });
      console.log("ponged", interaction.user.username);
   } else if (commandName === "add") {
      const num1 = options.getNumber("num1") || 0;
      const num2 = options.getNumber("num2") || 0;

      interaction.reply({
         content: `The sum is equal to ${num1 + num2}.`,
         ephemeral: false,
      });
   }
});

client.login(token);
