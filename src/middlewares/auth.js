const jwt = require("jsonwebtoken");
const APIError = require("../utils/errors");
const user = require("../models/user.model");

const createToken = async(user,res) =>{

    const payload = {
        sub:user._id,
        name:user.fullName
    }

    const token = await jwt.sign(payload,process.env.JWT_SECRET_KEY,{
        algorithm:"HS512",
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    return res.status(201).json({
        success:true,
        
        token,
        message:"Başarılı"
    });
}

const tokenCheck = async(req,res,next) =>{
    
    const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer ")
    
    if(!headerToken){
        throw new APIError("Geçersiz oturum, lütfen oturum açınız",401)
    }
    const token = req.headers.authorization.split(" ")[1]
    console.log(token);

    await jwt.verify(token,process.env.JWT_SECRET_KEY, async (err,decoded) =>{
        if(err) throw new APIError("Geçersiz Token",401)

        const userInfo = await user.findById(decoded.sub).select("_id fullName email password")
        console.log(userInfo);

        if(!userInfo){
            throw new APIError("Geçersiz token",401)
        }

        req.user = userInfo
        next()
    })

    
}
module.exports = {
    createToken,tokenCheck
}