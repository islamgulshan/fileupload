var mongoose= require('mongoose');
const filename=mongoose.Schema({
    photo: {
		type:String,
    }
    ,
    addDate: { 
		type: Date, 
		default: Date.now()
	 }
}
    ,
	{
		timestamps:true

	}

)


module.exports= mongoose.model('file',filename);