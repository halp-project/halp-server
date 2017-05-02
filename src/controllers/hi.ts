import { Request, Response } from 'express';

function sayHi (req: Request, res: Response) {
    res.send({
        message: 'Hello, Halp team!'
    });
}

export { sayHi }; 
