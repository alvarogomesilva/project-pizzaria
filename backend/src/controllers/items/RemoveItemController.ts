import { Request, Response } from "express";
import { RemoveItemService } from "../../services/items/RemoveItemService";

export class RemoveItemController {
    async handle(req: Request, res: Response) {
        
        const { item_id } = req.params
        const items = await RemoveItemService({ item_id })
        res.json(items)
    }
}