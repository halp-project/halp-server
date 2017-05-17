import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as bluebird from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';

import api from './routes/index';

const app: express.Express = express();

var pgp: IMain = pgPromise({
  promiseLib: bluebird
})

var connectionString: string = 'postgres://jorgesanzperez@localhost:5432/halp';

const db: IDatabase<any> = pgp(connectionString);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.use('', api);

export { app, db };
