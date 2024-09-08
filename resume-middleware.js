const multer=require("multer");
const mystorage=multer.diskStorage({
    destination:"pics/uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
const upload=()=>multer({
    storage:mystorage
}).single("resume");
module.exports=upload;