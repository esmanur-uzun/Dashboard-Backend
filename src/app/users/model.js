const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,

    }
},{collection:"users",timestamps:true})

const user = mongoose.model("users",userSchema)
module.exports = user