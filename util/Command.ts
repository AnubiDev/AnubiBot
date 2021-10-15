import {ApplicationCommandData, ApplicationCommandPermissionData, BaseCommandInteraction} from "discord.js";

export interface Command {
    data(): ApplicationCommandData
    execute(interaction: BaseCommandInteraction)
    permissions(): ApplicationCommandPermissionData[]
}