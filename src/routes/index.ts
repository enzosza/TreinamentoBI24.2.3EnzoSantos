import { application, Router } from 'express';
import testsRouter from './tests.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/tests', testsRouter);
routes.use('/user', usersRouter);

export default routes;
