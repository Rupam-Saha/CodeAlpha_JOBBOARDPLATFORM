const jobSchema=require("../models/job");
const profileSchema = require("../models/profile");
const appSchema=require("../models/apply");
const addjob=async(req,res)=>{
    try{
        const data=req.body;
        const ch=await jobSchema.findOne({Job_id:data.Job_id});
        if(ch){
            res.status(400).json({msg:"With this id a job are present in the database"});
        }
        else{
            const x=await jobSchema.create(data);
            res.status(200).json({msg:"Successfully added"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
const joblist=async (req,res)=>{
    try{
        const x=await jobSchema.find({});
        res.status(200).json(x);
    }
    catch(error){
        res.status(400).json(error);
    }
}
const searchjob=async(req,res)=>{
    try{
        const jid=req.params.Job_id;
        const data=await jobSchema.findOne({Job_id:jid},{_id:0,__v:0});
        if(data){
            res.status(200).json(data);
        }
        else{
            res.status(400).json({msg:"Invalid Job Id"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
const searchjobbycompanyname=async(req,res)=>{
    try{
        const com=req.params.Company;
        const data=await jobSchema.find({Company:com},{_id:0,__v:0});
        if(data){
            res.status(200).json(data);
        }
        else{
            res.status(400).json({msg:"Invalid Job Id"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
const profileupload=async(req,res)=>{
    try{
        const email=req.body.Email;
        const name=req.body.Name;
        const contact=req.body.Contact;
        const wd=req.body.Work_Domain;
        const exp=req.body.Experience;
        const image=req.file.filename;
        //console.log(image);
        const x=await profileSchema.create({
            Email:email,
            Name:name,
            Contact:contact,
            Work_Domain:wd,
            Experience:exp,
            Resume:{
                data:image,
                contentType:"image.jpg"
            }
        });
        res.status(200).json({msg:"Successfully upload"});
    }
    catch(error){
        res.status(400).json(error);
    }
}
const apply=async(req,res)=>{
    try{
        const jid=req.params.Job_id;
        const ch=await jobSchema.findOne({Job_id:jid});
        if(ch){
            const email=req.body.Email;
            const con=req.body.Contact;
            const resume=req.file.filename;
            const x=await appSchema.create({
                Job_id:jid,
                Email:email,
                Contact:con,
                Resume:{
                    data:resume,
                    contentType:"image.jpg"
                }
            })
            res.status(200).json({msg:"Successfully applied"});
        }
        else{
            res.status(400).json({msg:"Invalid job id"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
}
module.exports={addjob,joblist,searchjob,searchjobbycompanyname,profileupload,apply};
