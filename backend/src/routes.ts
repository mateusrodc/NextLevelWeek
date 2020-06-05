import { Router } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Padrão de controller
 * index
 * show
 * create
 * update
 * delete
 */

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
