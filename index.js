
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var multer = require("multer");

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


