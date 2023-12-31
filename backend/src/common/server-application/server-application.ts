import { authController } from '~/bundles/auth/auth.js';
import { userController } from '~/bundles/users/users.js';
import { config } from '~/common/config/config.js';
import { database } from '~/common/database/database.js';
import { logger } from '~/common/logger/logger.js';

import { ServerAppApiBase } from './server-app-api-base.js';
import { ServerAppBase } from './server-app-base.js';

const apiV1 = new ServerAppApiBase(
    'v1',
    config,
    ...authController.routes,
    ...userController.routes,
);
const serverApp = new ServerAppBase({
    config,
    logger,
    database,
    apis: [apiV1],
});

export { serverApp };
export { type ServerAppRouteParameters } from './types/types.js';
