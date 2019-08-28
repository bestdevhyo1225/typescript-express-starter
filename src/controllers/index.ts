import { Request, Response } from 'express';

const home = async (req: Request, res: Response): Promise<void> => {
    res.send('my-typescript-express-app');
};

export default { home };
