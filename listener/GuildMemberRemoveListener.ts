import {Listener} from "../util/Listener";
import {Client, GuildMember, PartialGuildMember} from "discord.js";

export class GuildMemberRemoveListener implements Listener {
    register(client: Client) {
        client.on("guildMemberRemove", this.call)
    }

    async call(member: GuildMember | PartialGuildMember) {

    }
}