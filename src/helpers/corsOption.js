const whiteList = ["http://localhost:3000/"]

const corsOption = (req,callback) =>{
    let corsOptions
    if(whiteList.indexOf(req.header("Origin")) !== -1)
        corsOptions = {origin:true}
    else corsOptions = {origin:false}

    callback(null,corsOptions)
    
}

module.exports = corsOption