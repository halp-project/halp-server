export class User {
    id: number;
    username: string;
    password: string;
    role: string;

    constructor(username: string, role: string, password?: string) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
