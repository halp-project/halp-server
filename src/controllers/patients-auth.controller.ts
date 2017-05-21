import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt-nodejs';

import { Patient } from '../models/patient';
import { db } from '../app';
import { createToken } from '../services/index';
import { passwordMatches, isPatientSignedUp } from '../services/patients-auth.service';

export function patientsLogIn(req: Request, res: Response) {
    let patient: Patient = new Patient();
    patient.username = req.body.username;
    patient.password = req.body.password;

    if (isLoginDataValid(patient)) {
        isPatientSignedUp(patient.username)
            .then((isPatientSignedUp: boolean) => {
                if (!isPatientSignedUp) {
                    res.status(401).send({ message: "The username or password dont match" });
                } else {
                    passwordMatches(patient.username, patient.password)
                        .then((passwordMatches: boolean) => {
                            if (passwordMatches) {
                                res.status(200).send({ id_token: createToken(patient) })
                            } else {
                                res.status(401).send({ message: "The username or password dont match" })
                            }
                        });
                }
            });
    } else {
        res.status(400).send({ message: "You must send the username and the password" });
    }
}

function isLoginDataValid(patient: Patient) {
    if (patient.username === null || patient.username === '') {
        return false;
    }

    if (patient.password === null || patient.password === '') {
        return false;
    }

    return true;
}
