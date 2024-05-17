const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // describing the structure of db
    name: String,
    price : Number,
    description: String
});

const Product = mongoose.model("Product", productSchema);

module.experts = Product;