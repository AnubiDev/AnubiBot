import {ModelCtor, Sequelize, Model, STRING} from "sequelize";

export class Database {
    database: Sequelize
    guildData: ModelCtor<Model<any, any>>

    initialiseDatabase() {
        this.database = new Sequelize({
            dialect: "sqlite",
            storage: "./data/database.sqlite"
        })
    }

    initialiseTables() {
        this.guildData = this.database.define("guildData", {
            guildId: {
                type: STRING,
                primaryKey: true
            }
        })
    }

    async syncTables(force: boolean = false) {
        await this.guildData.sync({force: force})
    }
}