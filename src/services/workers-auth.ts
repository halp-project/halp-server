import { db } from '../app';

export function getUserPasswordHash(username: string): Promise<string> {
    return db.one('select e.password from employee e where e.username = ${username}', { username: username })
        .then(data => {
            return data.password;
        });
}

export function getUserRole(username: string): Promise<string> {
    return db.one('select e.role from employee e where e.username = ${username}', { username: username })
        .then(data => {
            return data.role;
        })
}
