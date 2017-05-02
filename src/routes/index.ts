import * as express from 'express';

const api: express.Router = express.Router();

api.get('/hi/:name', (req: express.Request, res: express.Response) => {
    res.send({
        message: 'Hello, JOSE'
    });
});

export = api;
