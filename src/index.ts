import express from 'express';

import {useApp} from './core/index';

import authModule from './modules/auth/index';

const server = express();
const app = useApp(server);
const port = app.port || 3000;

authModule.run(app);

server.listen(port, () => {
  app.logger.info(`Runnning application in ${process.env.NODE_ENV} mode, on port ${port}. 🔥`)
});

export default app