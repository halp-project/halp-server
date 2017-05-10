import { Request, Response } from 'express';
import * as bluebird from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';

import { db } from '../app';

function addBook(req: Request, res: Response, next: any) {
  db.none('insert into book(title, author, description, image)' +
    'values(${title}, ${author}, ${description}, ${image})',
    req.body)
    .then(() => {
      db.one('select * from book order by id desc limit 1')
        .then(data => {
          res.status(200).json({ data: data });
        });
    })
    .catch(err => {
      return next(err);
    });
}

function getBooks(req: Request, res: Response, next: any) {
  db.any('select * from book')
    .then(data => {
      res.status(200)
        .json({
          data: data
        });
    })
    .catch(err => {
      return next(err);
    });
}

export { addBook, getBooks };
