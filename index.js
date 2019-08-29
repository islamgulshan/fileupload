
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var multer = require("multer");
var jwt= require("jsonwebtoken");






mongoose.connection.openUri('mongodb://localhost:27017/fileupload', { useNewUrlParser:true});
mongoose.connection.on('connected',()=>{
	console.log('coonected To db ');
})

mongoose.connection.on('error',(err)=>{
	if(err){
		console.log(`error while connection to db ${err}`);
	}
})

 var multer = require("multer");

var app=express();

var router =require('./route/index');


const port = 4000;

var app = express();
app.use(cors());


// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static content
app.use(express.static(path.join(__dirname, "public")));
app.use('/api',router);


 


 


var storage=multer.diskStorage({
	destination: function (req,file,callback){
		callback(null,'./uploads');
	},
	filename: function (req,file,callback){
		callback(null,file.fieldname+'_'+Date.now()+".jpg");
	},
})

var upload= multer({storage:storage}).single('userPhoto');


app.get('/', (req,res)=>{
	res.sendFile(__dirname+"/index.html");
	
});



// app.post('/api/photo', (req,res)=>{
// 	upload(req,res, function(err){
// 		if(err){
// 			return res.end("Error uploads file.");
// 		}
// 	})
// 	res.end("file is upload ");
	
// });



app.listen(4000, () => {
  console.log(`listening on port `);
});


// varify token
function varifyToken(req,res,next){
	const bearHeader= req.headers['authorization'];
	// check if bearer is undefined 
	if (typeof bearHeader !='undefined'){
		//splite at a space
		const bearer=bearHeader.split(' ');
		//get token from array
		const bearerToken=bearer[1];
		//ret token
		req.token= bearerToken;
		// next middleware
		jwt.varifyToken(req.token,'secretkey', (err,auData) => {
			if(err){
				res.status(403).send(err);
				//res.sendStatus(403);
			}else{
				req.auData=auData;
				next();
			}
		});
	}	
}


