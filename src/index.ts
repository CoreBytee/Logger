import Logger from "./classes/Logger";
import LogLevel from "./enums/LogLevel";

const loggers: { [key: string]: Logger } = {}
let defaultLogLevel: LogLevel = LogLevel.Information

export function setLogLevel(newLogLevel: LogLevel) {
    Object.values(loggers).forEach(logger => logger.setLogLevel(newLogLevel))
    defaultLogLevel = newLogLevel
}

export function getLogger(name: string, logLevel: LogLevel = defaultLogLevel): Logger {
    if (!loggers[name]) {
        loggers[name] = new Logger(name, logLevel)
    }
    return loggers[name]
}