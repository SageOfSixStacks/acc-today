const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be provided"]},
    size: {type: String},
    price: {type: Number}
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema)