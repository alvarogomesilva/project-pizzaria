import { Request, Response, Router } from "express";

const Route = Router()

Route.get('/', (req: Request, res: Response) => {
    return res.json({ok: true})
})

export default Route