import * as express from 'express';

import { addBook, getBooks } from '../controllers/books';
import { signUp, logIn } from '../controllers/workers-auth';
import { getOrders, changeStateOrder, deleteOrder, getUserOrders } from '../controllers/ordersController';

const api: express.Router = express.Router();

api.post('/books', addBook);
api.get('/books', getBooks);

api.get('/orders', getOrders);
api.put('/orders', getUserOrders);
api.put('/orders/:id', changeStateOrder);
api.delete('/orders/:id', deleteOrder);

api.post('/workers/signup', signUp);
api.post('/workers/login', logIn);

export default api;
