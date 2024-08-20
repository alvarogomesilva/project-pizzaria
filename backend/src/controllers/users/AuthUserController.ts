import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

export class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const users = await AuthUserService({email, password})
        res.json(users)

    }
}