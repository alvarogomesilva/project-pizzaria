import { Prisma } from "../../config/prisma"

export const ListCategoryService = async () => {

    const categories = await Prisma.category.findMany({ 
        select: {
            id: true, 
            name: true
        }
     })

    if (!categories || categories.length === 0) return { messageError: 'Nenhuma categoria cadastrada!' }

    return categories
}