const rateLimit = require("express-rate-limit")

const apiLimiter = rateLimit({
    windowMs: 15*60*100,
    max: (req,res)=>{
        console.log("api url: ", req.url);
        if (req.url === "/login" || req.url === "/register") return 5
        else return 100
    },
    message: {
        success: false,
        message :"Çok fazla istekte bulundunuz!"
    },
    standardHeaders : true,
    legacyHeaders : false
})

module.exports = apiLimiter