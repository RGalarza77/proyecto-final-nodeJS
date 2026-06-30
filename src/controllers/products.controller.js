import { getAllProducts as getProductsModel,
        getProductById as getProductByIdModel,
        createProduct as createProductModel,
        updateProduct as updateProductModel,
        deleteProduct as deleteProductModel,
 } from "../models/Product.js";


/**CRUD - create, read, update, delete**/

//Crear producto
export const createProduct = async (req, res) =>{

    if(!req.body) return res.status(400).json({message:"No se recibio un body"});

    const {name, price, stock, category, manufacturer} = req.body; /*lo que trae el post*/

    if(name === undefined || price === undefined || stock === undefined || category === undefined || manufacturer === undefined){
        return res.status(400).json({message: "Faltan datos obligatorios",});
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

//Actualizar un producto
export const updateProduct = async (req, res) =>{
    const id= req.params.id;
    const {name, price, stock, category, manufacturer} = req.body; /*lo que trae el post*/


    if(!name || !price || !stock || !category || !manufacturer) return res.status(400).json({message:"Faltan datos obligatorios."});

    const updatedProduct = await updateProductModel(id, {
        name, price, stock, category, manufacturer
    });

    //Si no encuentra el producto a actualizar tira 404
    if (!updatedProduct) return res.status(404).json({message:"Producto no encontrado."});

    res.status(201).json(updatedProduct);
};


//Eliminar producto
export const deleteProduct = async (req, res) =>{
    const id = req.params.id;

    if(!id) return res.status(400).json({message: "Id no valido"});

    const deletedProduct = await deleteProductModel(id);

    if(!deletedProduct){
        return res.status(404).json({message: "Producto no encontrado"});
    }else{
        return res.status(201).json({
            message: "Producto eliminado", 
            product: deletedProduct});
    }
};
