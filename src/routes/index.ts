import * as express from 'express';

import { addBook, getBooks, loanBook } from '../controllers/books';
import { signUp, logIn } from '../controllers/workers-auth';
import { patientsLogIn } from '../controllers/patients-auth.controller';
import { getOrders, changeStateOrder, deleteOrder } from '../controllers/orders.controller';

const api: express.Router = express.Router();

api.post('/books', addBook);
api.get('/books', getBooks);
api.post('/books/:id', loanBook);

api.get('/orders', getOrders);
api.put('/orders/:id', changeStateOrder);
api.delete('/orders/:id', deleteOrder);

api.post('/workers/signup', signUp);
api.post('/workers/login', logIn);

api.post('/patients/login', patientsLogIn);

export default api;
