//db de firebase
import dataBase from "../config/firebase.js";

//Funciones de firestore
import {addDoc, deleteDoc, getDoc, getDocs, updateDoc, 
    doc, collection} from "firebase/firestore";

//Coleccion
const productsCollection = collection(dataBase, "products");

//CRUD - create, read, update, delete



export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);

  const products = [];

  snapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
};