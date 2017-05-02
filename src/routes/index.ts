import * as express from 'express';
import { sayHi } from '../controllers/hi';

const api: express.Router = express.Router();

api.get('/hi', sayHi);

export { api };
