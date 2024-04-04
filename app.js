const express = require("express")
const app = express()
require("dotenv").config()
require("./src/db/dbConnection")
const port = process.env.PORT || 5001

app.get("/",(req,res) =>{
    res.json({
        message: "ana sayfa"
    })
})

app.listen(port, ()=>{
    console.log(`server ${port} portunda çalışıtor`);
})