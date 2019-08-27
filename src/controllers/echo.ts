import { Request, Response } from 'express';

const echo = async (req: Request, res: Response): Promise<void> => {
    res.json(req.query);
};

export default { echo };
