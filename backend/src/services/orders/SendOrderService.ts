import { Prisma } from "../../config/prisma"

export const SendOrderService = async ({ order_id }: { order_id: string }) => {

    if (!order_id) return { messageError: 'Order invalid!' }

    const orders = await Prisma.order.update({
        where: { id: order_id },
        data: { draft: false },
        select: {
            id: true,
            table: true,
            status: true,
            draft: true,
            name: true
        }
    })

    return orders
}