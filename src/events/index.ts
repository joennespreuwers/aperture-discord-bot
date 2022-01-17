import { Event } from "../interfaces/event";
import { ready } from "./ready";
import { messageCreate } from "./messageCreate";

export const events: Event[] = [ready, messageCreate];
