const mongoose=require("mongoose");
require("dotenv").config();

const mongoUrl=process.env.DB_URL;



mongoose.connect(mongoUrl).then(()=>{console.log("connected to mongo database")}).catch((e)=>{console.log("error in connected with local database")})