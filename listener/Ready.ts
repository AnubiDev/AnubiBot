import {Listener} from "../util/Listener";
import {Client} from "discord.js";
import {Logger} from "../util/Logger";

export class Ready implements Listener {
    register(client: Client) {
        client.on("ready", this.call)
    }

    async call(client: Client) {
        const logger = client["logger"] as Logger
        logger.info(`Logged in as ${client.user.username}#${client.user.discriminator}`)
    }
}