import { Bot } from "../index";
import { Message } from "discord.js";

export interface Command {
   name: string;
   description?: string;
   usage?: string;
   aliases?: string[];
   guildId?: string;
   run(client: Bot, message: Message, ...args: string[]): void;
}
