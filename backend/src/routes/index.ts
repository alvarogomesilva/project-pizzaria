import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { AuthUserController } from "../controllers/users/AuthUserController";
import { DetailUserController } from "../controllers/users/DetailUserController";
import { auth } from "../middlewares/auth";
import { CreateCategoryController } from "../controllers/categories/CreateCategoryController";
import { ListCategoryController } from "../controllers/categories/ListCategoryController";
import { CreateProductController } from "../controllers/products/CreateProductController";
import upload from "../config/multer";
import { ListByCategoryController } from "../controllers/products/ListByCategoryController";
import { CreateOrderController } from "../controllers/orders/CreateOrderController";
import { DeleteOrderController } from "../controllers/orders/DeleteOrderController";

const Route = Router()

Route.post('/users', new CreateUserController().handle)
Route.post('/login', new AuthUserController().handle)
Route.get('/me', auth, new DetailUserController().handle)

// Categories
// ===========
Route.post('/categories', auth, new CreateCategoryController().handle)
Route.get('/categories', auth, new ListCategoryController().handle)

// Produtos
// =========
Route.post('/products', auth, upload.single("banner"), new CreateProductController().handle)
Route.get('/products/:category_id', auth, new ListByCategoryController().handle)

// Pedidos
// ========
Route.post('/orders', auth, new CreateOrderController().handle)
Route.delete('/orders/:order_id', auth, new DeleteOrderController().handle)

export default Route