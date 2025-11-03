const fs = require('fs');

function readFile(){
	//method 1 without sync
	fs.readFile('./uploads/write.text',"utf8", (err, data)=>{
		if(err) throw err;
		console.log("file content:",data);
	});

	// method 2 sync
	try{
		const data = fs.readFileSync('./uploads/writesync.text','utf8');
		console.log("file content:",data);
	}catch(err){
		console.log(err);
	}
}
exports.readFile = readFile;