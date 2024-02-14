const express=require("express");
const Staff=require("../model/mystaff");
require("../db/conn");
const app=express();
const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("welcome to my hotel");
})

app.use(express.json());

const employeeroute=require("../routes/route");
app.use("/newemployee",employeeroute);


//comment added for testing purpose
app.listen(port,()=>{console.log(`server is live at port ${port}`)});