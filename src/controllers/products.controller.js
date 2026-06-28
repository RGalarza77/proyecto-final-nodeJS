import { getProducts } from "../models/Product.js";

//Leer todos los productos
export const getAllProducts = async (req,res) => {
    const products = await getProducts();

    res.json(products);
};

