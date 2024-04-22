require("express-async-errors")
const express = require("express")
const app = express()
require("dotenv").config()
require("./src/db/dbConnection")
const router = require("./src/routers")
const port = process.env.PORT || 5001
const errorHandler = require("./src/middlewares/errorHandler")
const cors = require("cors")

app.use(express.json())
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true,parameterLimit:5000}))

app.use("/api",router)

app.get("/",(req,res) =>{
    res.json({
        message: "ana sayfa"
    })
})

// hata yakalama
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server ${port} portunda çalışıtor`);
})