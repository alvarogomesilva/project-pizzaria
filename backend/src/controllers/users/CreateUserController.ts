import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUserController {
    async handle(req:Request, res:Response) {
        const { name, email, password } = req.body
        const users = CreateUserService({name, email, password})

        res.json(users)
    }
}