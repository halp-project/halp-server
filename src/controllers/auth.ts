import { Request, Response } from 'express';
import * as bluebird from 'bluebird';
import { IMain, IDatabase } from 'pg-promise';
import * as pgPromise from 'pg-promise';
import * as bcrypt from 'bcrypt-nodejs';

import { User } from '../models/user';
import { db } from '../app';
import { createToken } from '../services/index';

function signUp(req: Request, res: Response) {
  let user: User = new User(req.body.username, req.body.role, req.body.password);

  console.log('' + user.password + user.username + user.role);

  if (checkUserProperties(user)) {
    bcrypt.hash(req.body.password, null, null, (err, passwordHash) => {
      let user: User = new User(req.body.username, req.body.role, passwordHash);

      isUserAlreadyRegistered(user.username).then((isUserAlreadyRegistered: boolean) => {
        if (isUserAlreadyRegistered) {
          res.status(409).send({ message: 'A user with that username already exists' });
        } else {
          db.none('insert into employee(username, password, role) values(${username}, ${password}, ${role})', user)
            .then(data => {
              res.status(200).send({ token: createToken(user) });
            })
            .catch(err => {
              res.status(500).send({ message: 'Error creating the user' });
            });
        }
      });
    });
  } else {
    res.status(400).send({ message: "Please, complete all fields" });
  }
}

function logIn(req: Request, res: Response) {

}

function isUserAlreadyRegistered(username: string): Promise<boolean> {
  return db.oneOrNone('select * from employee e where e.username = ${username}', {
    username: username
  })
    .then(data => {
      if (data) return true;
      return false;
    });
}

function checkUserProperties(user: User): boolean {
  if (user.username === null || user.username === '') {
    return false;
  }

  if (user.password === null || user.password === '') {
    return false;
  }

  if (user.role === null || user.role === '') {
    return false;
  }

  return true;
}

export {
  signUp,
  logIn
}
