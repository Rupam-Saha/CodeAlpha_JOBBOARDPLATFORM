const jobVali=require("../validator/job-validator");
const check=()=>async(req,res,next)=>{
    try{
        const x=await jobVali.parseAsync(req.body);
        next();
    }
    catch(error){
        res.status(400).json({msg:error.issues[0].message});
    }
}
module.exports=check;
