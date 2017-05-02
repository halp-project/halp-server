import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as api from './routes/index';

const app: express.Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

export default app;
