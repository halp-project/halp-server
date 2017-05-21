import { User } from './user';

export class Patient extends User {
    name: string;
    lastname: string;
    description: string;
    birthdate: string;
    room: number;
}
