import * as express from 'express';

import { addBook, getBooks } from '../controllers/books';
import { signUp } from '../controllers/auth';

const api: express.Router = express.Router();

api.post('/books', addBook);
api.get('/books', getBooks);

api.post('/workers/signup', signUp);

export default api;
