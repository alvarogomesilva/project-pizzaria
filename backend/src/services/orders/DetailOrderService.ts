import { Prisma } from "../../config/prisma"

export const DetailOrderService = async ({order_id}: {order_id: string}) => {

    const orders = await Prisma.item.findMany({
        where: { order_id: order_id },
        include: {
             order: true,
             product: true
        }
        
    })

    return orders
}