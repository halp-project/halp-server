import * as jwt from 'jwt-simple';
import * as moment from 'moment';

import { User } from '../models/user';
import { JWT_SECRET } from '../config';

export function createToken(user: User) {
    const payload = {
        sub: user.id,
        iat: moment().unix(), // Date of token creation (current system date)
        exp: moment().add(14, 'days').unix() // Date of token expiration
    };

    return jwt.encode(payload, JWT_SECRET);
}
