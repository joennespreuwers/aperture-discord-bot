import { Client, Collection } from "discord.js";
import { Command, Event } from "./interfaces/index";
import { commands } from "./commands/index";
import { events } from "./events/index";
import { token, prefix } from "../config.json";
import { allIntents } from "./utils/intents";

export class Bot extends Client {
   public commands: Collection<string, Command> = new Collection();
   public events: Collection<string, Event> = new Collection();
   public aliases: Collection<string, Command> = new Collection();
   public prefix: string = prefix;

   constructor() {
      super({ intents: allIntents });
      console.log("Bot is starting...");

      this.loadCommands();
      this.loadEvents();
   }

   loadCommands(): void {
      console.log("Loading commands...");
      for (const command of commands) {
         // Command alias
         if (command.aliases?.length !== 0) {
            command.aliases?.forEach(alias => {
               this.aliases.set(alias, command);
            });
         }

         // Create slash command
         if (command.guildId) {
            const guild = this.guilds.cache.get(command.guildId);
            if (guild) {
               console.log(guild.commands);
            } else {
               console.log(this.application?.commands);
            }
         }

         this.commands.set(command.name, command);
         console.log(`Loaded command: ${command.name}`);
      }
   }

   loadEvents(): void {
      console.log("Loading events...");
      for (const event of events) {
         this.on(event.name, event.run.bind(null, this));
         console.log(`Loaded event: ${event.name}`);
      }
   }
}

const bot = new Bot();
bot.login(token);
