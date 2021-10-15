import {Client} from "discord.js";

export interface Listener {
    register(client: Client)
}