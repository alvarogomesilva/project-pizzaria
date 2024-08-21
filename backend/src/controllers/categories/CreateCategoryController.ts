import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/categories/CreateCategoryService";

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const categories = await CreateCategoryService({ name })
        res.json(categories)
    }
}