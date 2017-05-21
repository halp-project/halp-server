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

  var bookID = parseInt(req.params.id);
  db.any('select * from bookCopy bc where bc.idBook = $1', bookID)
  .then(data => {
    console.log(data.length);
    let available = false;
    let idCopy= 0;
    
    for(let i = 0; i < data.length; i++){
      console.log('It: -> ' + i);
      if(!data[i].reserved){
        available = true;
        console.log(data[i]);
        idCopy = data[i].referencenumber;
        break;
      }
    }

    console.log('Available: '+ available+' / IDCopy: '+idCopy);

    if(available){
      let username = 'john01'; //getUserID(req.body.token);
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

export { addBook, getBooks, loanBook };
