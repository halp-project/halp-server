import { Request, Response } from 'express';
import * as bluebird from 'bluebird';
import {IMain, IDatabase} from 'pg-promise';
import * as pgPromise from 'pg-promise';

var pgp: IMain = pgPromise({
    promiseLib: bluebird
})

var connectionString: string = 'postgres://root:root@localhost:5432/halp';

var db: IDatabase<any> = pgp(connectionString);

function deleteOrder(req: Request, res: Response, next: any){
    var orderID = parseInt(req.params.id);
    db.result('delete from book where id = $1', orderID)
    .then(function () {
      res.status(200).json({done: true});
    })
    .catch(function (err) {
      return next(err);
    });
}

function getOrders(req: Request, res: Response, next: any) {
  db.any( "select b.title AS title, po.id, p.name, p.lastname, p.room, po.orderDate, 'book' AS type\n" +
	        "from patientOrder po, patient p, bookloan bl, bookCopy bc, book b\n" +
	        "where po.idpatient = p.username and po.id = bl.id and bl.referenceNumber = bc.referenceNumber " +
          "and bc.idBook = b.id\n" +
          "UNION ALL\n" +
          "select i.name AS title, po.id, p.name, p.lastname, p.room, po.orderDate, 'item' AS type\n" +
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

export { getOrders };