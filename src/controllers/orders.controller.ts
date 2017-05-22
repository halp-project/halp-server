import { Request, Response } from 'express';
import * as bluebird from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';
import { decodeToken } from '../services/index';

import { db } from '../app';

function deleteOrder(req: Request, res: Response, next: any) {
  var orderID = parseInt(req.params.id);
  db.result('delete from patientOrder po where po.id = $1', orderID)
    .then(function () {
      res.status(200).json({ done: true });
    })
    .catch(function (err) {
      return next(err);
    });
}

function changeStateOrder(req: Request, res: Response, next: any) {
  console.log(req.body);
  db.none('update patientOrder set completed=$2 where id=$1',
    [parseInt(req.params.id), req.body.completed])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Order State Changed'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getOrders(req: Request, res: Response, next: any) {
  db.any("select b.title AS title, po.id, po.completed, p.name, p.lastname, p.room, po.orderDate, 'book' AS type\n" +
    "from patientOrder po, patient p, bookloan bl, bookCopy bc, book b\n" +
    "where po.idpatient = p.username and po.id = bl.id and bl.referenceNumber = bc.referenceNumber " +
    "and bc.idBook = b.id\n" +
    "UNION ALL\n" +
    "select i.name AS title, po.id, po.completed, p.name, p.lastname, p.room, po.orderDate, 'item' AS type\n" +
    "from patientOrder po, patient p, purchase pu, itemCopy ic, item i\n" +
    "where po.idpatient = p.username and po.id = pu.id and pu.referenceNumber = ic.referenceNumber " +
    ' and ic.idItem = i.id')
    .then(data => {
      res.status(200)
        .json({
          data: data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function getUserOrders(req: Request, res: Response, next: any) {
  let decode = decodeToken(req.headers.token);
  let username = decode.sub;
  db.any( "select b.title AS title, po.id, po.completed, p.name, p.lastname, p.room, po.orderDate, 'book' AS type\n" +
                "from patientOrder po, patient p, bookloan bl, bookCopy bc, book b\n" +
                "where po.idpatient = p.username and po.id = bl.id and bl.referenceNumber = bc.referenceNumber " +
          "and bc.idBook = b.id and p.username = $1\n" +
          "UNION ALL\n" +
          "select i.name AS title, po.id, po.completed, p.name, p.lastname, p.room, po.orderDate, 'item' AS type\n" +
                "from patientOrder po, patient p, purchase pu, itemCopy ic, item i\n" +
                "where po.idpatient = p.username and po.id = pu.id and pu.referenceNumber = ic.referenceNumber " +
          ' and ic.idItem = i.id and p.username = $1', username)
  .then(data => {
     res.status(200)
            .json({
              data: data
        });
  }).catch(function (err){
    return next(err);
  });
}

export { getOrders, changeStateOrder, deleteOrder, getUserOrders };
