const mongoose = require("mongoose");

const productSchemma = new mongoose.schema({
    name: String,
    price : Number
    
});