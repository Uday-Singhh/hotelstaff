const mongoose=require("mongoose");
const validator=require("validator")

const candSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:20
    },
    post:{
        type:String,
        enum:["waiter","chef","manager","Hr"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email should be unique"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new error("enter valid email ");
            }
        }
    }
})
const Staff=new mongoose.model("Staff", candSchema);

module.exports=Staff;