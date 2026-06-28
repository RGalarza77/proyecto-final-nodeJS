import { getAllProducts as getProductsModel,
        getProductById as getProductByIdModel
 } from "../models/Product.js";

//Leer todos los productos
export const getAllProducts = async (req,res) => {
    const products = await getProductsModel();
    res.json(products);
};

//Leer producto por Id
export const getProductById = async (req, res) => {
    const id= req.params.id;
    const product = await getProductByIdModel(id) ;

    if(!product){
        return res.status(404).json({message: "Producto no encontrado."});
    }

    res.json(product);
};

