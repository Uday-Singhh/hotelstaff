const express=require("express");
const Staff=require("../model/mystaff");
const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const data=req.body;
        console.log(data);
        const result= new Staff(data);
        const resul=await result.save();
        res.status(200).send(resul);
    }
    catch(e){
        res.status(404).send(e);
    }
})

router.get("/",async(req,res)=>{
    try{
        const storeddata=await Staff.find();
        res.status(200).send(storeddata);
    }
    catch(e){
        res.status(404).send(e);
    }
})

router.get("/:work",async(req,res)=>{
    try{
        const post=req.params.work;
        if(post=="waiter" || post=="manager" || post=="Hr" || post=="chef")
        {
            const reqdata=await Staff.find({post});
            console.log(reqdata);
            res.status(200).send(reqdata);
        }
        else{
            res.status(400).send("invalid work type");
        }
    }
    catch(e){
        res.status(404).send(e);
    }
    
})

router.put("/:id",async(req,res)=>{
    try{
        const personid=req.params.id;
        const ndata=req.body;
        const pdata=await Staff.findByIdAndUpdate(personid, ndata,{
            new:true,
            runValidators:true
        })
        if(!pdata)
        {
            return res.status(404).send("error in updating data");
        }
        res.status(200).send(pdata);
    }
    catch(e){
        res.status(404).send(e);
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const pid=req.params.id;
        const rdata=await Staff.findByIdAndDelete(pid);
        res.status(200).send(rdata);
    }
    catch(e){
        res.status(404).send(e);
    }
})

module.exports=router;