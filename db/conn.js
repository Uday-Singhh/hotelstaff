const mongoose=require("mongoose");

const localUrl="mongodb://localhost:27017/myhotel";

mongoose.connect(localUrl).then(()=>{console.log("connected to local database")}).catch((e)=>{console.log("error in connected with local database")})