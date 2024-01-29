import Logger from ".";

const LoggerInstance = new Logger("Test", 4)
LoggerInstance.Debug("Debug")
LoggerInstance.Info("Info")
LoggerInstance.Information("Information")
LoggerInstance.Warn("Warn")
LoggerInstance.Warning("Warning")
LoggerInstance.Error("Error")
LoggerInstance.Fatal("Fatal")