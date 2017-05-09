import * as express from 'express';
import { addBook, getBooks } from '../controllers/booksController';

const api: express.Router = express.Router();

api.post('/books', addBook);
api.get('/books', getBooks);

export default api;
