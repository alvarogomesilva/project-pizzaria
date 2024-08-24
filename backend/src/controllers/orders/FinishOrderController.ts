import { Request, Response } from "express";
import { FinishOrderService } from "../../services/orders/FinishOrderService";

export class FinishOrderController {

    async handle(req: Request, res: Response) {
        const { order_id } = req.body

        const orders = await FinishOrderService({order_id})
        res.json(orders)
    }
}