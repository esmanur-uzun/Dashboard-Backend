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

module.exports = corsOption;
