import {Client, Guild} from "discord.js";
import {RawGuildData} from "discord.js/typings/rawDataTypes";

// @ts-ignore
export class TestGuild extends Guild {
    constructor(client: Client, data: RawGuildData) {
        super(client, data);
    }
}