import { Router } from 'express';

import UsersController from './controllers/UsersController';

const routes = new Router();

// users routes
routes.get('/users', UsersController.index);
routes.get('/users', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

export default routes;
