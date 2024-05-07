const Response = require("../../utils/response");

const me = async(req,res) =>{
  console.log("me içinde");
  console.log(req.user);

  return new Response(req.user).success(res)
}

module.exports = { me };