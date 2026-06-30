//db de firebase
import dataBase from "../config/firebase.js";

//Funciones de firestore
import {addDoc, deleteDoc, getDoc, getDocs, updateDoc, 
    doc, collection} from "firebase/firestore";

//Coleccion
const productsCollection = collection(dataBase, "products");

/**CRUD - create, read, update, delete**/

//Crear
export const createProduct = async (product) =>{
    const ref = await addDoc(productsCollection, product); 

    return{
        id: ref.id,
        ...product,
    };

};

//Leer
export const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection); /*Captura lo que esta en la DB*/

  const products = [];

  snapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
};

export const getProductById = async (id) =>{
    const ref = doc(productsCollection, id); /*Referencia del producto en la DB*/
    const snapshot = await getDoc(ref); /*Paso la ref para obtener el producto*/

    if(!snapshot.exists()) return null; /*Si no existe el doc, devuelve null*/

    return{id: snapshot.id, ...snapshot.data()}; /*Si existe, devuelve el objeto*/
};

//Actualizar
export const updateProduct = async (id, product) =>{

  const ref= doc(productsCollection, id);
  const snapshot = await getDoc(ref); /*Foto del producto en la DB*/

  if(!snapshot.exists()) return null;

  await updateDoc(ref, product);
  
  return{id, ...product};

};

//Eliminar
export const deleteProduct = async (id) => {

  const ref= doc(productsCollection, id);
  const snapshot = await getDoc(ref);

  if(!snapshot.exists()) return null;

  const deletedProduct = {id, ...snapshot.data()};

  await deleteDoc(ref);

  return deletedProduct;

};