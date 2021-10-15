import {Client, ClientUser} from "discord.js";
import {Logger, LogLevel} from "../../util/Logger";
import {Ready} from "../../listener/Ready";

let client: Client

beforeAll(() => {
    client = new Client({intents: []})
    client["logger"] = new Logger(LogLevel.ERROR)

    // @ts-ignore
    client.user = new ClientUser(client, {
        id: "1",
        username: "Test",
        discriminator: "1234"
    })
})

test('Check Ready', async () => {
    const ready = new Ready()
    ready.register(client)
    await ready.call(client)
})