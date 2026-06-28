import {Router} from "express";

//Controllers
import {getAllProducts} from "../controllers/products.controller.js";



const router= Router();

router.get("/", getAllProducts); /*Prefijo: "/api/products"*/


export default router;