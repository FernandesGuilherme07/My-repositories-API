import { Router } from 'express';

import UsersController from './controllers/UsersController';
import RepositoriesContoller from './controllers/RepositoriesContoller';

const routes = new Router();

// users routes
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

// repositories routes
routes.get('/users/:user_id/repositories', RepositoriesContoller.index);
routes.post('/users/:user_id/repositories', RepositoriesContoller.create);
routes.delete('/users/:user_id/repositories/:id', RepositoriesContoller.destroy);

export default routes;
