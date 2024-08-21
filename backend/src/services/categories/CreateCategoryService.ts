import { Prisma } from "../../config/prisma"

export const CreateCategoryService = async ({ name }: { name: string }) => {
    if (!name || name === '') return { messageError: 'Name invalid!' }

    const categoryExists = await Prisma.category.findFirst({
        where: { name: name }
    })

    if (categoryExists) return { messageError: 'Category alredy exists!' }

    const categories = await Prisma.category.create({
        data: { name: name },
        select: { id: true, name: true }
    })

    return categories
}