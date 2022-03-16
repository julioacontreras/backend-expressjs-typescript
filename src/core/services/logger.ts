const Logger = require('@ptkdev/logger');

export function useLogger (loggerConfig: any): any {
    return new Logger(loggerConfig);
}
