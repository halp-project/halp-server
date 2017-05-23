import { Request, Response } from 'express';
import * as bluebird from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';

import { db } from '../app';

function deleteBook(req: Request, res: Response, next: any) {
  var bookID = parseInt(req.params.id);
  db.result('delete from book po where po.id = $1', bookID)
    .then(function () {
      res.status(200).json({ done: true });
    })
    .catch(function (err) {
      return next(err);
    });
}

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

export { addBook, getBooks, deleteBook };
