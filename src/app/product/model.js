const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim:true,
    },
    price:{
        type: Number,
        required:true,
        trim:true,
    },
    stock:{
        type : Number,
        required: true,
        trim: true
    }

},{collection:"product",timestamps:true})

const product = mongoose.model("product",productSchema)
module.exports = product