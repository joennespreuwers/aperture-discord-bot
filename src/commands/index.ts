import { Command } from "../interfaces/command";

import { ping } from "./ping";
import { info } from "./info";
import { hi } from "./hi";
import { ban } from "./ban";

export const commands: Command[] = [ping, info, hi, ban];
