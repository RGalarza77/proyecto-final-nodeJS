import {Router} from "express";

//Controllers
import {getAllProducts, getProductById, createProduct} from "../controllers/products.controller.js";



const router= Router();

//Prefijo: "/api/products"
router.post("/", createProduct);
router.get("/", getAllProducts); 
router.get("/:id", getProductById);


export default router;