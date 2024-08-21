import { Request, Response } from "express";
import { ListCategoryService } from "../../services/categories/ListCategoryService";

export class ListCategoryController {
    async handle(req: Request, res: Response) {

        const categories = await ListCategoryService()
        res.json(categories)
    }
}