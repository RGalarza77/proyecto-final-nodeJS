import { getAllProducts as getProductsModel,
        getProductById as getProductByIdModel,
        createProduct as createProductModel,
 } from "../models/Product.js";


/**CRUD - create, read, update, delete**/

//Crear
export const createProduct = async (req, res) =>{
    const {name, price, stock, category, manufacturer} = req.body; /*lo que trae el post*/

    if(!name || !price || !stock || !category || !manufacturer){
        return res.status(400).json({message:"Faltan datos obligatorios."});
    }

    const newProduct = await createProductModel({
        name,
        price,
        stock,
        category,
        manufacturer,
    });

    res.status(201).json(newProduct);

};

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

