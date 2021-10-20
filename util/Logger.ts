import * as winston from "winston";
import * as dayjs from "dayjs";
import * as DailyRotateFile from "winston-daily-rotate-file";
import * as chalk from "chalk"

export class Logger {
    logger: winston.Logger

    initialiseLogger(level: LogLevel) {
        this.logger = winston.createLogger({
            level: level.toString().toLowerCase(),
            levels: {
                error: 0,
                warn: 1,
                info: 2,
                debug: 3,
            },
            transports: [
                new winston.transports.Console(),
                new DailyRotateFile({
                    filename: "%DATE%.log",
                    dirname: "./data/logs",
                    datePattern: "YYYY-MM-DD",
                    format: winston.format.printf(log => {
                        switch (log.level) {
                            case "debug": return `[${Logger.time()}]: [DEBUG]: ${log.message}`
                            case "info": return `[${Logger.time()}]: [INFO]: ${log.message}`
                            case "warn": return `[${Logger.time()}]: [WARN]: ${log.message}`
                            case "error": return `[${Logger.time()}]: [ERROR]: ${log.message}`
                        }
                    })
                })
            ],
            format: winston.format.printf(log => {
                switch (log.level) {
                    case "debug": return `[${Logger.time()}]: [${chalk.gray("DEBUG")}]: ${log.message}`
                    case "info": return `[${Logger.time()}]: [${chalk.blue("INFO")}]: ${log.message}`
                    case "warn": return `[${Logger.time()}]: [${chalk.yellow("WARN")}]: ${log.message}`
                    case "error": return `[${Logger.time()}]: [${chalk.red("ERROR")}]: ${log.message}`
                }
            })
        })
    }

    debug(message: string) {
        this.logger.debug(message)
    }

    info(message: string) {
        this.logger.info(message)
    }

    warn(message: string) {
        this.logger.warn(message)
    }

    error(message: string) {
        this.logger.error(message)
    }

    private static time(): string {
        return dayjs().format("HH:mm:ss")
    }
}

export enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}