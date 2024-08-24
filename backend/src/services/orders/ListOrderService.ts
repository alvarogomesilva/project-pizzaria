import { Prisma } from "../../config/prisma"

export const ListOrderService = async () => {
    const orders = await Prisma.order.findMany({
        where: { draft: false, status: false },
        orderBy: {
            created_at: 'desc'
        }
    })

    return orders
}