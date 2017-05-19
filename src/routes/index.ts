import * as express from 'express';
import { addBook, getBooks } from '../controllers/booksController';
import { getOrders, changeStateOrder, deleteOrder } from '../controllers/ordersController';

const api: express.Router = express.Router();

// Books
api.post('/books', addBook);
api.get('/books', getBooks);

// Orders
api.get('/orders', getOrders);
api.put('/orders/:id', changeStateOrder);
api.delete('/orders/:id', deleteOrder);

export default api;
