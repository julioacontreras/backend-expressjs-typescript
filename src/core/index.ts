import { Express } from 'express';

import { loadJson } from '@core/helpers/loadJson';
import { useLogger } from '@core/services/logger';
import { App } from '@/core/types/app';

export function useApp (server: Express): App {
    const config = loadJson('@/../config.json');
    const logger = useLogger(config.logger);

    return {
        server,
        logger,
        config,
        port: config.port || 3000
    }
}
