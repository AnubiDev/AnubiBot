import {Client, User} from "discord.js";
import {RawUserData} from "discord.js/typings/rawDataTypes";

export class TestUser extends User {
    constructor(client: Client, data: RawUserData) {
        super(client, data);
    }
}