import pino, { type Logger as TLogger } from 'pino';
import pretty from 'pino-pretty';

import { type Logger } from './interfaces/interfaces.js';

class LoggerBase implements Logger {
    private logger: TLogger;

    public constructor() {
        this.logger = pino(pretty());

        this.logger.info('Logger is created…');
    }

    public debug(
        message: string,
        parameters: Record<string, unknown> = {},
    ): ReturnType<Logger['debug']> {
        this.logger.debug(parameters, message);
    }

    public error(
        message: string,
        parameters: Record<string, unknown> = {},
    ): ReturnType<Logger['error']> {
        this.logger.error(parameters, message);
    }

    public info(
        message: string,
        parameters: Record<string, unknown> = {},
    ): ReturnType<Logger['info']> {
        this.logger.info(parameters, message);
    }

    public warn(
        message: string,
        parameters: Record<string, unknown> = {},
    ): ReturnType<Logger['warn']> {
        this.logger.warn(parameters, message);
    }
}

export { LoggerBase };
