const fileschma=require('../models/file');
var multer = require("multer");
var storage=multer.diskStorage({
	destination: function (req,file,callback){
		callback(null,'./uploads');
	},
	filename: function (req,file,callback){
		callback(null,file.fieldname+'_'+Date.now()+".jpg");
	},
})

var upload= multer({storage:storage}).single('userPhoto');
// Upload Photo
const photo =(req,res)=>{

    	upload(req,res, function(err){
		if(err){
			return res.end("Error uploads file.");
		}
		 var imge=req.filename;
		 let Newfile = new fileschma();
		Newfile.photo= imge;
		Newfile.save();

	})
	

}
	
const galary =(req,res)=>{

	fileschma.find( (err,galryinfo) =>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data get successfully",
				galryinfo
			})
		}
		
	
	})
	

	
}



module.exports={
	photo,
	galary
}