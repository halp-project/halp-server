import * as express from 'express';

import { getOrders, changeStateOrder, deleteOrder, getUserOrders } from '../controllers/orders.controller';
import { addBook, getBooks, loanBook } from '../controllers/books.controller';
import { signUp, logIn } from '../controllers/workers-auth.controller';
import { patientsLogIn } from '../controllers/patients-auth.controller';

const api: express.Router = express.Router();

api.post('/books', addBook);
api.get('/books', getBooks);
api.post('/books/:id', loanBook);

api.get('/orders', getOrders);
api.get('/orders/user', getUserOrders);
api.put('/orders/:id', changeStateOrder);
api.delete('/orders/:id', deleteOrder);

api.post('/workers/signup', signUp);
api.post('/workers/login', logIn);

api.post('/patients/login', patientsLogIn);

export default api;
