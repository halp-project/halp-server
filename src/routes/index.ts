import * as express from 'express';
import { addBook, getBooks } from '../controllers/booksController';
import { getOrders } from '../controllers/ordersController';

const api: express.Router = express.Router();

// Books
api.post('/books', addBook);
api.get('/books', getBooks);

// Orders
api.get('/orders', getOrders);

export default api;
