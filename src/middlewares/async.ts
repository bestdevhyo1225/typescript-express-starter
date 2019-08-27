import { Request, Response, NextFunction } from 'express';

const asyncCheckMiddleware = (handler: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            console.error(error);
            return next(error);
        }
    };
};

export default asyncCheckMiddleware;
