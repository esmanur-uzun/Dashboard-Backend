const APIError = require("../utils/errors");

const whiteList = ["http://localhost:3003"];

var corsOption = {
  origin : function(origin,callback){
    if(!origin || whiteList.indexOf(origin) !== -1){
      callback(null,true)
    }
    else{
      callback(new APIError('Not allowed by CORS',400))
    }
  }
} 
// (req, callback) => {
//   console.log(req.header("Origin"));
//   if ( whiteList.indexOf(req.header("Origin")) !== -1) {
//     console.log("if iççinde");
//     callback(null,true)
//   } else {
//     console.log("else içinde");
//     callback(new APIError('Not allowed by CORS'))
//   } 

// };

module.exports = corsOption;
