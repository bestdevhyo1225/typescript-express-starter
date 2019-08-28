import express, { Request, Response } from 'express';

// Middlewares
import errorMiddleware from './middlewares/error';

// Routers
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

// echo
app.use('/', echoRouter);

// catch 404 and forward to error handler
app.use(errorMiddleware.error404);

// error handler
app.use(errorMiddleware.error);

export default app;
