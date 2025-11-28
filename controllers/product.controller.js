const Product = require("../models/product.model")

async function getAllProducts(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json({products});
    } catch(error) {
        throw new Error("sever error")
    }
};

async function createProduct(req, res) {
    try {
        const {name, size, price} = req.body;
        if (!name || !size || !price) {
            throw new Error("All feilds must be provided");
        }
        const newProduct = await Product.create({name, size, price});
        res.status(201).json({newProduct});
    } catch(error) {
        throw new Error("server error");
    }
}

async function getProduct(req, res) {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new Error("No Product found");
        }
        res.status(200).json({product});
    } catch(error) {
        throw new Error("Server error");
    }
}

async function updateProduct(req, res) {
    try {
        const {id} = req.params;
        const {name, size, price} = req.body;
        const updatedProduct = await Product.findByIdAndUpdate({_id: id}, {$set: {name, size, price}}, {new: true, runValidator: true});
        res.status(200).json({updatedProduct});
    } catch(error) {
        throw new Error("Server error")
    }
}

async function deleteProduct(req, res) {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete({_id:id});
        if (!product) {
            throw new Error("No Product found");
        }
        res.status(200).json({msg: "Product deleted Succesfully"});
    } catch(error) {
        throw new Error("Server error")
    }
}

module.exports = {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct};


