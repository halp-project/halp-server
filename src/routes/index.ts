import * as express from 'express';
import { sayHi, getBooks } from '../controllers/hi';

const api: express.Router = express.Router();

api.post('/hi', sayHi);
api.get('/books', getBooks);

export { api };
