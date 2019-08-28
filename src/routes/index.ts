import { Router } from 'express';
import IndexController from '../controllers/index';
import asyncCheckMiddleware from '../middlewares/async';

const indexRouter = Router();

indexRouter.get('/', asyncCheckMiddleware(IndexController.home));

export default indexRouter;
