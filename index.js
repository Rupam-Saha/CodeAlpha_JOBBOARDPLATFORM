require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.port;
app.use(express.json());
const connectToDb=require("./connection/connect");
const x=require("./router/route");
app.use("",x);
connectToDb().then(()=>{
    app.listen(port,(req,res)=>{
        console.log(`server is running at ${port}`);
    })
})
