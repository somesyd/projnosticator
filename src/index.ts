import express, { Express, Router, Request, Response } from 'express'
import { healthcheck } from './routes/healthcheck';
const app: Express = express();
export const router: Router = express.Router();
const port = 5000;


router.get('/', (req: Request, res: Response) => {
    res.status(200).json({astronaut: "hello world!"});
})

app.use('/', router);
app.use("/healthcheck", healthcheck);

app.listen(port, () => console.log(`[server]: Server is running on port ${port}`));