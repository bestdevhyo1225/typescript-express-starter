import express, { Request, Response } from 'express';
import errorMiddleware from './middlewares/error';
import echoRouter from './routes/echo';

const app = express();

// echo
app.use('/', echoRouter);

// catch 404 and forward to error handler
app.use(errorMiddleware.error404);

// error handler
app.use(errorMiddleware.error);

export default app;
