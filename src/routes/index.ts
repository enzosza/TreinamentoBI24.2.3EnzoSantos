import { application, Router } from 'express';
import testsRouter from './tests.routes';
import usersRouter from './users.routes';
import piusRouter from './pius.routes';

const routes = Router();

routes.use('/tests', testsRouter);
routes.use('/user', usersRouter);
routes.use('/pius', piusRouter);

export default routes;
