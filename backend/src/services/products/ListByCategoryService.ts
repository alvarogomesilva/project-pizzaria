import { Prisma } from "../../config/prisma"

export const ListByCategoryService = async ({category_id}: {category_id: string}) => {

    const products = await Prisma.product.findMany({
        where: { category_id: category_id },
        select: {
            id: true,
            name: true,
            price: true,
            banner: true,
        }
    })

    if (!products || products.length === 0) return { messageError: 'Not found products!' }

    return products

}