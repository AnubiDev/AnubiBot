import {Command} from "./Command";
import {ChatInputApplicationCommandData, CommandInteraction} from "discord.js";

export interface SlashCommand extends Command {
    data(): ChatInputApplicationCommandData
    execute(interaction: CommandInteraction)
}