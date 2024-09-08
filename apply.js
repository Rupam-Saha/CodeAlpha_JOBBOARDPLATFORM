const mongoose=require("mongoose");
const x=new mongoose.Schema({
    Job_id:{
        type:String
    },
    Email:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true        
    },
    Resume:{
        data:Buffer,
        contentType:String
    }
})
const appSchema=mongoose.model("applicant",x);
module.exports=appSchema;