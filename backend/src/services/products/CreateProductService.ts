import { Prisma } from "../../config/prisma";
import { ProductRequest } from "../../types/Product";

export const CreateProductService = async ({ 
    name, 
    price, 
    banner, 
    description, 
    category_id }: ProductRequest) => {

    if (!name || !price || !banner || !description || !category_id) {
        return { messageError: 'Please fill all the fields!' }
    }

    const products = await Prisma.product.create({
        data: {
            name: name,
            price: price,
            banner: banner,
            description: description,
            category_id: category_id
        },
        select: {
            id: true,
            name: true,
            price: true,
            banner: true,
            description: true,
            category_id: true
        }
    })

    return products
}