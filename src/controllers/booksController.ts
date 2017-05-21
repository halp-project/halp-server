import { Request, Response } from 'express';
import * as bluebird from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';

import { db } from '../app';

function addBook(req: Request, res: Response, next: any) {

    console.log('Hola');
    db.one('insert into book(title, author, description, image)' +
      'values(${title}, ${author}, ${description}, ${image})\n RETURNING id', req.body)
    .then(function (id) {
      db.one('select * from book order by id desc limit 1')
        .then(function(data){
          data.id = 0;
          res.status(200).json({data: data});
      });
    })
    .catch(function (err) {
      return next(err);
    });
    /*db.none('insert into bookCopy(idBook,reserved)' +
      'values($1, FALSE)', id).catch(function (err) {
      return next(err);
    });*/
}

function getBooks(req: Request, res: Response, next: any) {
  db.any('select * from book')
    .then(function (data) {
      res.status(200)
        .json({
          data: data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

export { addBook, getBooks };
