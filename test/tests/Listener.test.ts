import {Client, ClientUser} from "discord.js";
import {ReadyListener} from "../../listener/ReadyListener";
import {TestLogger} from "../TestLogger";
import {TestDatabase} from "../TestDatabase";

let client: Client

beforeAll(() => {
    client = new Client({intents: []})
    client["logger"] = new TestLogger()
    client["database"] = new TestDatabase()

    // @ts-ignore
    client.user = new ClientUser(client, {
        id: "1",
        username: "Test",
        discriminator: "1234"
    })
})

test('ReadyListener', async () => {
    const ready = new ReadyListener()
    ready.register(client)
    await ready.call(client)
})