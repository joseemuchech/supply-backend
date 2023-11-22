import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.js";

const router = express.Router();

//Create new product
router.post("/", createProduct);
//Get all products
router.get("/", getAllProducts );

//Get single product
router.get("/:id", getProduct);

//Update product
router.put("/:id", updateProduct);

//Delete product
router.delete("/:id", deleteProduct);

export default router