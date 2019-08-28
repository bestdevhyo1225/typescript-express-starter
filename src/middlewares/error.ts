import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

interface Err extends Error {
    status : number;
    data? : any;
}

const error404 = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const err = new Error('Not Found') as Err;
    err.status = 404;
    next(err);
};

const error = async (err: Err, req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (res.statusCode === 404) {
        logger.error(`Error message : ${err.message}`);
    } else {
        logger.error(`Error message : ${err.message}\n Error Stacktrace : ${err.stack}`);
    }

    res.status(err.status || 500);
    res.json({
        message: err.message,
        data: err.data
    });
};

export default { error404, error };
