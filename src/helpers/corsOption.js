const APIError = require("../utils/errors");

const whiteList = ["http://localhost:3003"];

const corsOption = (req, callback) => {
  let corsOptions;
  console.log(req.header("Origin"));
  if ( whiteList.indexOf(req.header("Origin")) !== -1) {
    console.log("if içinde");
    callback(null,true)
  } else {
    console.log("else içinde");
    callback(new APIError('Not allowed by CORS'))
  } 

  
};

module.exports = corsOption;
