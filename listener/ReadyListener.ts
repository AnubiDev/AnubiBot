import {Listener} from "../util/Listener";
import {Client} from "discord.js";
import {Logger} from "../util/Logger";
import {Database} from "../util/Database";

export class ReadyListener implements Listener {
    register(client: Client) {
        client.on("ready", this.call)
    }

    async call(client: Client) {
        const logger = client["logger"] as Logger
        logger.info(`Logged in as ${client.user.username}#${client.user.discriminator}`)

        await (client["database"] as Database).syncTables(true)
    }
}