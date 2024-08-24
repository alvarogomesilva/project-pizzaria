import { Prisma } from "../../config/prisma"

export const FinishOrderService = async ({order_id}: {order_id: string}) => {

    const orders = await Prisma.order.update({
        where: { id: order_id },
        data: { status: true }
    })

    return orders
}