import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/orders/DeleteOrderService";

export class DeleteOrderController {

    async handle(req: Request, res: Response) {
        const { order_id } = req.params
        const orders = await DeleteOrderService({ order_id })
        res.json(orders)
    }
}