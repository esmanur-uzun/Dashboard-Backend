const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL,{
    
    useUnifiedTopology:true
}).then(()=>{
    console.log("veri tabanına bağlandı");
}).catch((err)=>{
    console.log("veri tabanına bağlanamadı:",err)
})