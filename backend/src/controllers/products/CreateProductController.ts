import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";
import sharp from "sharp";
import { unlink } from "fs/promises";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body

        let banner: string | null;

        if (req.file) {
            const extension = req.file.mimetype.substring(6)
            let randomName = Math.floor(Math.random() * 999999999) + Date.now()
            await sharp(req.file.path)
                .resize(500)
                .toFile(`./uploads/products/${randomName}.${extension}`)
    
            banner = `${randomName}.${extension}`
            await unlink(req.file.path)
        }

        const products = await CreateProductService({ name, price, banner, description, category_id })

        res.json(products)
    }
}