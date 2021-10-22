import {Listener} from "../util/Listener";
import {Client, GuildMember} from "discord.js";

export class GuildMemberAddListener implements Listener {
    register(client: Client) {
        client.on("guildMemberAdd", this.call)
    }

    async call(member: GuildMember) {

    }
}
