import { Router } from 'express';
import EchoController from '../controllers/echo';
import asyncCheckMiddleware from '../middlewares/async';

const echoRouter = Router();

echoRouter.get('/', asyncCheckMiddleware(EchoController.echo));

export default echoRouter;
