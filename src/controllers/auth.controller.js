const user = require("../models/user.model");
const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const { createToken } = require("../middlewares/auth");

const login = async (req, res) => {
  const {email,password} = req.body
  const userInfo = await user.findOne({email})
  if(!userInfo){
    throw new APIError("Email ya da şifre hatalı!",401)
  }
  const comparePassword = await bcrypt.compare(password,userInfo.password)
  if(!comparePassword){
    throw new APIError("Email ya da şifre hatalı!",401)
  }
  createToken(userInfo,res)
};

const register = async (req, res) => {
  const { email } = req.body;
  const userCheck = await user.findOne({ email });

  if (userCheck) {
    throw new APIError("Kullanıcı zaten mevcut", 401);
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const userSave = new user(req.body);
  await userSave
    .save()
    .then((register_response) => {
      return new Response(register_response, "Kayıt başarılı").created(res);
    })
    .catch((err) => {
      throw new APIError("Kayıt Başarısız",400)
    });
};

module.exports = { login, register };
