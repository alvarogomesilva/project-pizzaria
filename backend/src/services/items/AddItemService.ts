import { Prisma } from "../../config/prisma";
import { ItemRequest } from "../../types/Item";

export const AddItemService = async ({ order_id, product_id, amount }: ItemRequest) => {

    if (!order_id || !product_id || !amount) return { messageError: 'Values invalids!' }

    const items = await Prisma.item.create({
        data: {
            order_id: order_id,
            product_id: product_id,
            amount: amount
        },
        select: {
            id: true,
            order_id: true,
            product_id: true,
            amount: true,
        }
    })

    return items
}