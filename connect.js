const mongoose=require("mongoose");
const connectToDb=async (req,res)=>{
    try{
        const x=await mongoose.connect(process.env.url);
        console.log("connect successfully");
    }
    catch(error){
        console.log("Connection failed");
    }
}
module.exports=connectToDb;