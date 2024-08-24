import { Prisma } from "../../config/prisma"

export const RemoveItemService = async ({item_id}:{item_id: string}) => {

    if (!item_id) return { messageError: 'Item invalid!' }

    const items = await Prisma.item.delete({
        where: { id: item_id },
        select: {
            id: true,
            amount: true,
            order_id: true,
            product_id: true
        }
    })

    return items
}