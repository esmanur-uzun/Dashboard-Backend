// const user = require("./model");
// const bcrypt = require("bcrypt");
// const APIError = require("../utils/errors");
const Response = require("../../utils/response");
// const { createToken } = require("../middlewares/auth");



const me = async(req,res) =>{
  console.log("me içinde");
  console.log(req.user);

  return new Response(req.user).success(res)
}

module.exports = { me };