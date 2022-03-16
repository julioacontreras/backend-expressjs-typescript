import { Express } from 'express';

export interface App {
    server: Express,
    config: any,
    logger: any,
    port: number,
}
