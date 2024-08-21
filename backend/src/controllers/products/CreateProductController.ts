import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, banner, description, category_id } = req.body

        const categories = await CreateProductService({ name, price, banner, description, category_id })

        res.json(categories)
    }
}