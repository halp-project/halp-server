import { db } from '../app';

export function isPatientSignedUp(username: string): Promise<Boolean> {
    return db.oneOrNone('select * from patient p where p.username = ${username}', {
        username: username
    })
        .then(data => {
            if (data) {
                return true;
            }

            return false;
        });;
}

export function passwordMatches(username: string, password: string): Promise<Boolean> {
    return getUserPassword(username)
        .then(savedPassword => password === savedPassword);
}

function getUserPassword(username: string): Promise<string> {
    return db.one('select p.password from patient p where p.username = ${username}', { username: username })
        .then(data => {
            return data.password;
        });
}
