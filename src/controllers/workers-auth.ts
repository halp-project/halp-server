import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt-nodejs';

import { User } from '../models/user';
import { db } from '../app';
import { createToken } from '../services/index';
import { getUserPasswordHash, getUserRole } from '../services/workers-auth';

function signUp(req: Request, res: Response) {
  let user: User = new User(req.body.username, req.body.role, req.body.password);

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
  if (checkLogInProperties(req.body.username, req.body.password)) {
    let user: User = new User(req.body.username, null, req.body.password);
    isUserAlreadyRegistered(req.body.username)
      .then((isUserAlreadyRegistered: boolean) => {
        if (!isUserAlreadyRegistered) {
          res.status(401).send({ message: "The username or password don't match." });
        } else {
          getUserPasswordHash(req.body.username)
            .then((passwordHash: string) => {
              bcrypt.compare(req.body.password, passwordHash, function (err, match) {
                if (match) {
                  getUserRole(req.body.username)
                    .then((role: string) => {
                      res.status(200).send({
                        id_token: createToken(user),
                        role: role
                      })
                    });
                } else {
                  res.status(401).send({ message: "The username or password don't match" });
                }
              });
            });
        }
      });
  } else {
    res.status(400).send({ message: "You must send the username and the password" });
  }
}

function isUserAlreadyRegistered(username: string): Promise<boolean> {
  return db.oneOrNone('select * from employee e where e.username = ${username}', {
    username: username
  })
    .then(data => {
      if (data) {
        return true;
      }

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

function checkLogInProperties(username: string, password: string) {
  if (username === null || username === '') {
    return false;
  }

  if (password === null || password === '') {
    return false;
  }

  return true;
}

export {
  signUp,
  logIn
}
