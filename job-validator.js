const {z}=require("zod");
const jobVali=z.object({
    Job_id:z.string({required_error:"Job id feild should be present"})
    .trim()
    .min(1,{message:"Job id can't be empty"}),
    Company:z
    .string({required_error:"Company name feild should be present"})
    .trim()
    .min(1,{message:"Company name can't be empty"}),
    Position:z
    .string({required_error:"Position feild should be present"})
    .trim()
    .min(1,{message:"Position can't be empty"}),
    Experience:z
    .string({required_error:"Experience feild should be present"})
    .trim()
    .min(1,{message:"Experience can't be empty"}),
    Salary:z
    .string({required_error:"Salary feild should be present"})
    .trim()
    .min(1,{message:"Salary can't be empty"}),
    City:z
    .string({required_error:"City feild should be present"})
    .trim()
    .min(1,{message:"City can't be empty"}),
    Email:z
    .string({required_error:"Email feild should be present"})
    .trim()
    .email()
    .min(1,{message:"Email can't be empty"}),
})
module.exports=jobVali;
