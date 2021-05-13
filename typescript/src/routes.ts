import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Matheus',
        email: 'matheus89476@outlook.com',
        password: '13245',
        techs: ['Node', 'React', 'React Native']
    });
    
    return response.json({
        message: 'hello'
    });
}