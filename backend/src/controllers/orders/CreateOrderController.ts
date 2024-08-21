import { Request, Response } from "express";
import { CreateOrderService } from "../../services/orders/CreateOrderService";

export class CreateOrderController {
    async handle(req: Request, res: Response) {

        const { table, name } = req.body
        const orders = await CreateOrderService({ table, name })
        res.json(orders)
    }
}