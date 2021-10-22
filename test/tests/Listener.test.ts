import {Client, ClientUser} from "discord.js";
import {ReadyListener} from "../../listener/ReadyListener";
import {TestLogger} from "../TestLogger";
import {TestDatabase} from "../TestDatabase";
import {GuildMemberAddListener} from "../../listener/GuildMemberAddListener";
import {TestGuild} from "../TestGuild";
import {TestGuildMember} from "../TestGuildMember";
import {TestUser} from "../TestUser";

test('ReadyListener', async () => {
    const client = new Client({intents: []})
    client["logger"] = new TestLogger()
    client["database"] = new TestDatabase()

    // @ts-ignore
    client.user = new ClientUser(client, {
        id: "1",
        username: "Test",
        discriminator: "1234"
    })

    const ready = new ReadyListener()
    ready.register(client)
    await ready.call(client)
})

test('GuildMemberAddListener', async () => {
    const client = new Client({intents: []})

    const user = new TestUser(client, {
        discriminator: "1234",
        id: "3",
        username: "TestUser1"
    })
    const guild = new TestGuild(client, {
        id: "2",
        unavailable: false
    })
    const member = new TestGuildMember(client, {
        deaf: false,
        guild_id: "2",
        joined_at: undefined,
        mute: false,
        nick: undefined,
        pending: false,
        permissions: "",
        premium_since: undefined,
        roles: [],
        user: user
    }, guild)

    const guildMemberAdd = new GuildMemberAddListener()
    guildMemberAdd.register(client)
    await guildMemberAdd.call(member)
})