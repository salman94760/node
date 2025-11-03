const fs = require('fs');
function unlinkFile(){
	fs.unlink('./uploads/write.text', (err)=>{
		if(err) throw err;
		console.log("file deleted successfully");
	});

	// method 2
	try{
		fs.unlinkSync('./uploads/writesync.text');
	}catch(err){
		console.log(err);
	}
}

exports.unlinkFile = unlinkFile;