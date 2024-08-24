import { Request, Response } from "express";
import { DetailOrderService } from "../../services/orders/DetailOrderService";

export class DetailOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params
        const orders = await DetailOrderService({ order_id })
        res.json(orders)
    }
}