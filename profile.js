const mongoose=require("mongoose");
const x=new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Name:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true
    },
    Work_Domain:{
        type:String,
        required:true
    },
    Experience:{
        type:String,
        required:true
    },
    Resume:{
        data:Buffer,
        contentType:String
    }
})
const profileSchema=mongoose.model("profile",x);
module.exports=profileSchema;