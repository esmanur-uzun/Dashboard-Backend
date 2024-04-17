const user = require("../models/user.model");
const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");

const login = async (req, res) => {
  console.log(req.body);
  return res.json(req.body);
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
