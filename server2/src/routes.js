import { Router } from 'express';

import StatesController from './app/controllers/StatesController';

const routes = new Router();

routes.get('/populacao/:uf', StatesController.show);

export default routes;
