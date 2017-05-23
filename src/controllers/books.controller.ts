import { Request, Response } from 'express';
import * as bluebird from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';
import { decodeToken } from '../services/index';

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
          db.none('insert into bookCopy(idBook,reserved)' +
            'values($1, FALSE)', data.id).catch(function (err) {
            return next(err);
          });
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

function loanBook(req: Request, res: Response, next: any){

  var decode = decodeToken(req.headers.token);
  var bookID = parseInt(req.params.id);
  db.any('select * from bookCopy bc where bc.idBook = $1', bookID)
  .then(data => {
    let available = false;
    let idCopy= 0;

    for(let i = 0; i < data.length; i++){
      if(!data[i].reserved){
        available = true;
        idCopy = data[i].referencenumber;
        break;
      }
    }

    if(available){
      let username = decode.sub;
      db.one( 'insert into patientOrder(orderDate, idPatient, completed) ' +
              'values( $1, $2, FALSE) ' +
              'RETURNING id', [new Date(), username])
      .then(id => {
          db.none('insert into bookLoan(ID, referenceNumber)' +
            'values($1, $2)', [id.id, idCopy]);
          db.none('update bookCopy set reserved = true where referenceNumber = $1', idCopy);
      })
      .catch(err => {
        return next(err);
      });

      res.status(200)
        .json({
          done: true
        });
    } else {
      res.status(200)
        .json({
          done: false
        });
    }

  })
  .catch(err => {
      return next(err);
    });

}

export { deleteBook, addBook, getBooks, loanBook };
