import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";


const app=express();

app.use(express.json());
app.use(cors());

app.use("/api/products", productsRouter);

const PORT =process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));