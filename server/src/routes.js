import { Router } from 'express';

import StatesController from './app/controllers/StatesController';

const routes = new Router();

routes.get('/estados', StatesController.show);

export default routes;
