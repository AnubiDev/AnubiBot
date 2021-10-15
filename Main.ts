import {Client} from "discord.js";
import {token} from "./data/config.json"
import {Logger, LogLevel} from "./util/Logger";
import {Ready} from "./listener/Ready";

// Client
const client = new Client({
    intents: [],
    partials: [],
    presence: {
        status: "online",
        activities: [
            {
                name: "Hallo",
                type: "PLAYING"
            }
        ]
    }
});

// Logger
const logger = new Logger(LogLevel.DEBUG);
client["logger"] = logger;

new Ready().register(client);

(async () => {
    await client.login(token)
})();