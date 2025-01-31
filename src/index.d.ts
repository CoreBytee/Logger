import chalk from "chalk";

declare class Logger {
    name: string;
    logLevel: number;
    logLevels: string[];

    constructor(name: string, logLevel?: number);

    log(level: number, message: string): void;
    debug(message: string): void;
    info(message: string): void;
    information(message: string): void;
    warn(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    fatal(message: string): void;

    Log(Level: number, Message: string): void;
    Debug(Message: string): void;
    Info(Message: string): void;
    Information(Message: string): void;
    Warn(Message: string): void;
    Warning(Message: string): void;
    Error(Message: string): void;
    Fatal(Message: string): void;
}

export default Logger;