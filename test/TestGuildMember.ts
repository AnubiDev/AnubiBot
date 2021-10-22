import {Client, Guild, GuildMember} from "discord.js";
import {RawGuildMemberData} from "discord.js/typings/rawDataTypes";

// @ts-ignore
export class TestGuildMember extends GuildMember {
    constructor(client: Client, data: RawGuildMemberData, guild: Guild) {
        super(client, data, guild);
    }
}