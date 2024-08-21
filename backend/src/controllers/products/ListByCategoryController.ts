import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/products/ListByCategoryService";


export class ListByCategoryController {
    async handle(req: Request, res: Response) {

        const { category_id } = req.params

        const products = await ListByCategoryService({ category_id })
        res.json(products)

    }
}