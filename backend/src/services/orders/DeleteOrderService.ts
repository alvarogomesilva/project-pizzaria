import { Prisma } from "../../config/prisma"

export const DeleteOrderService = async ({ order_id }: { order_id: string }) => {

    if (!order_id) return { messageError: 'Order invalid!' }

    const orders = await Prisma.order.delete({
        where: { id: order_id },
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