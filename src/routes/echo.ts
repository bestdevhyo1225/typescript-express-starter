import { Router } from 'express';
import ehcoController from '../controllers/echo';
import asyncCheckMiddleware from '../middlewares/async';

const echoRouter = Router();

echoRouter.get('/echo', asyncCheckMiddleware(ehcoController.echo));

export default echoRouter;
