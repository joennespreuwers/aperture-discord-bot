import { Bot } from "../index";
import { ClientEvents } from "discord.js";

export interface Event {
   name: keyof ClientEvents;
   run(client: Bot, ...args: unknown[]): Promise<void> | void;
}
