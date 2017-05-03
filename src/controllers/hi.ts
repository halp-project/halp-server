import { Request, Response } from 'express';
import * as Sequelize from 'sequelize';

function sayHi(req: Request, res: Response) {
    res.send({
        message: 'Hello, Halp team!'
    });
    let sequelize = new Sequelize('postgres://root:postgres@localhost:5432/postgres');
    sequelize
        .authenticate()
        .then(function (err) {
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
}

export { sayHi };
