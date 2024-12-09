import EventEmitter from "events";
import LogLevel from "../enums/LogLevel";
import chalk from "chalk";

const logLevelSymbols = {
    [LogLevel.Debug]: "?",
    [LogLevel.Information]: "i",
    [LogLevel.Success]: "✓",
    [LogLevel.Warning]: "⚠",
    [LogLevel.Error]: "✖",
    [LogLevel.Critical]: "☢",
    [LogLevel.Fatal]: "☠",
}

const logLevelColors = {
    [LogLevel.Debug]: chalk.cyan,
    [LogLevel.Information]: chalk.blue,
    [LogLevel.Success]: chalk.green,
    [LogLevel.Warning]: chalk.yellow,
    [LogLevel.Error]: chalk.redBright,
    [LogLevel.Critical]: chalk.bgRed,
    [LogLevel.Fatal]: chalk.red,
}

for (const symbol of Object.values(logLevelSymbols)) {
    console.log(Bun.stringWidth(symbol))

}

export default class Logger extends EventEmitter {
    logLevel: LogLevel
    constructor(name: string, logLevel: LogLevel) {
        super()
        this.logLevel = logLevel
    }

    setLogLevel(newLogLevel: LogLevel) {
        this.logLevel = newLogLevel
    }

    private log(message: any, logLevel: LogLevel) {
        const symbol = logLevelSymbols[logLevel]
        const coloredSymbol = logLevelColors[logLevel](symbol)
        console.log(
            `[${coloredSymbol}] ${message}`
        )
    }

    debug(message: any) {
        return this.log(message, LogLevel.Debug)
    }

    information(message: any) {
        return this.log(message, LogLevel.Information)
    }

    success(message: any) {
        return this.log(message, LogLevel.Success)
    }

    warning(message: any) {
        return this.log(message, LogLevel.Warning)
    }

    error(message: any) {
        return this.log(message, LogLevel.Error)
    }

    critical(message: any) {
        return this.log(message, LogLevel.Critical)
    }

    fatal(message: any) {
        return this.log(message, LogLevel.Fatal)
    }
}