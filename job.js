const mongoose=require("mongoose");
const x=new mongoose.Schema({
    Job_id:{
        type:String,
        required:true,
        unique:true
    },
    Company:{
        type:String,
        required:true
    },
    Position:{
        type:String,
        required:true
    },
    Experience:{
        type:String,
        required:true
    },
    Salary:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
})
const jobSchema=mongoose.model("job",x);
module.exports=jobSchema;