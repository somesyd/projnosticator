import express, { Request, Response } from 'express'

export const healthcheck = express.Router();

healthcheck.get('/', (req: Request, res: Response) => {
    res.status(200).send();
})

