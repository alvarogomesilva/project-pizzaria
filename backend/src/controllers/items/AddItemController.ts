import { Request, Response } from "express";
import { AddItemService } from "../../services/items/AddItemService";

export class AddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body

        const items = await AddItemService({ order_id, product_id, amount })
        res.json(items)
    }
}