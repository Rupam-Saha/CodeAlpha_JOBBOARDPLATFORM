const multer=require("multer");
const mystorage=multer.diskStorage({
    destination:"appliedCV",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const check=()=>multer({
    storage:mystorage
}).single("cv");
module.exports=check;