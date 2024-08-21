import { Prisma } from "../../config/prisma";
import { OrderRequest } from "../../types/Order";

export const CreateOrderService = async ({table, name}: OrderRequest) => {

    if (!table || typeof table !== "number") return { messageError: 'Table incorrect!' }

    const orders = await Prisma.order.create({
        data: {
            table: table,
            name: name
        },
        select: {
            id: true,
            table: true,
            name: true,
            draft: true,
            status: true
        }
    })

    return orders

}