import { Request, Response } from "express";
import { ListOrderService } from "../../services/orders/ListOrderService";

export class ListOrderController {

    async handle(req:Request, res: Response) {
        const orders = await ListOrderService()
        res.json(orders)
    }
}