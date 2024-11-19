import chalk from "chalk";

function pad(num, size) {
    var s = "00" + num;
    return s.substring(s.length - size);
}

class Logger {
    constructor(name, logLevel = 3) {
        this.name = name;
        this.logLevel = logLevel;

        this.logLevels = [
            chalk.underline.red("FATAL"),
            chalk.red("ERROR"),
            chalk.yellow("WARN "),
            chalk.greenBright("INFO "),
            chalk.cyan("DEBUG")
        ];
    }

    log(level, message) {
        if (level > this.logLevel) { return; }

        const time = new Date();
        const timeString = `${time.getFullYear()}-${pad(time.getMonth() + 1, 2)}-${pad(time.getDate(), 2)} ${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}`;
        console.log(
            `[ ${chalk.bold(this.logLevels[level])} ] [ ${this.name} ] [ ${timeString} ] : ${message}`
        );
    }

    debug(message) {
        this.log(4, message);
    }

    info(message) {
        this.log(3, message);
    }

    information(message) {
        this.info(message);
    }

    warn(message) {
        this.log(2, message);
    }

    warning(message) {
        this.warn(message);
    }

    error(message) {
        this.log(1, message);
    }

    fatal(message) {
        this.log(0, message);
    }

    // Compatibility methods
    Log(Level, Message) {
        this.log(Level, Message);
    }

    Debug(Message) {
        this.debug(Message);
    }

    Info(Message) {
        this.info(Message);
    }

    Information(Message) {
        this.information(Message);
    }

    Warn(Message) {
        this.warn(Message);
    }

    Warning(Message) {
        this.warning(Message);
    }

    Error(Message) {
        this.error(Message);
    }

    Fatal(Message) {
        this.fatal(Message);
    }
}

export default Logger;