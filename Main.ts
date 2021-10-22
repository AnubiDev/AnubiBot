import {Client} from "discord.js";
import {token} from "./data/config.json"
import {Logger, LogLevel} from "./util/Logger";
import {ReadyListener} from "./listener/ReadyListener";
import {Database} from "./util/Database";

// Client
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS"
    ],
    partials: [
        "GUILD_MEMBER"
    ],
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
const logger = new Logger();
logger.initialiseLogger(LogLevel.DEBUG)
client["logger"] = logger;

const database = new Database()
database.initialiseDatabase()
database.initialiseTables()
client["database"] = database

new ReadyListener().register(client);

(async () => {
    await client.login(token)
})();