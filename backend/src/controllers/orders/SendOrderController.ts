import { Request, Response } from "express";
import { SendOrderService } from "../../services/orders/SendOrderService";


export class SendOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params
        const orders = await SendOrderService({ order_id })
        res.json(orders)
    }
}