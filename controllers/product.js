import Product from "../models/Product.js"

//Create new product
export const createProduct =  async (req,res,next)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct);
    } catch (err) {
       next(err);
    }
}

//Get all products
export const getAllProducts = async (req,res,next)=>{

    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
       next(err);
    }
}

//Get single product
export const getProduct =  async(req, res, next)=>{

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
       next(err);
    }
}

//Update product
export const updateProduct =  async(req, res, next)=>{

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {new: true}
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
       next(err);
    }
}

//Delete product
export const deleteProduct = async(req,res, next)=>{

    try {
      await Product.findByIdAndDelete(req.params.id,);
        res.status(200).json("Product has been delete");
    } catch (err) {
       next(err);
    }
}