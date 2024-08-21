import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";

export class DetailUserController {
    async handle(req: Request, res: Response) {
        
        const user_id = req.user_id
        const users = await DetailUserService({user_id})
        res.json(users)
    }
}