import { Event } from "../interfaces/event";

export const ready: Event = {
   name: "ready",
   run: async client => {
      console.log(`Logged in as ${client.user?.username}!`);
   },
};
