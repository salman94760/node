const fs = require('fs');
function appendFile(){
	fs.appendFile('./uploads/write.text','add 2 more lines',(err)=>{
		if(err) throw err;
		console.log("text added in file");
	});

	try{
		fs.appendFileSync('./uploads/writesync.text','add 3 more lines');
		console.log("text added second file");
	}catch(err){
		console.log(err);
	}
}

exports.appendFile = appendFile;