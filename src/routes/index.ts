import * as express from 'express';

import { addBook, getBooks } from '../controllers/books';
import { signUp, logIn } from '../controllers/workers-auth';

const api: express.Router = express.Router();

api.post('/books', addBook);
api.get('/books', getBooks);

api.post('/workers/signup', signUp);
api.post('/workers/login', logIn);

export default api;
