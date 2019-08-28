import express, { Request, Response } from 'express';

// Middlewares
import errorMiddleware from './middlewares/error';

// Routers
import indexRouter from './routes/index';
import echoRouter from './routes/echo';

// Utils
import { MONGODB_URI } from './utils/secrets';

// Config
import connectMongoDB from './mongodb_connect';

/*
    MongoDB
*/
connectMongoDB(MONGODB_URI);

/*
    Express App
*/
const app = express();

// Router
app.use('/', indexRouter);
app.use('/echo', echoRouter);

// Error Handler
app.use(errorMiddleware.error404);
app.use(errorMiddleware.error);

export default app;
