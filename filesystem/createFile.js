const fs = require('fs');

function createFile(){
	//method 1 without sync
	fs.writeFile('./uploads/write.text',"first text read file", (err)=>{
		if(err) throw err;
		console.log("file created successfully");
	});

	// method 2 sync
	try{
		fs.writeFileSync('./uploads/writesync.text','first text read file sync', 'utf8');
		console.log("file created succesffully");
	}catch(err){
		console.log(err);
	}
}
exports.createFile = createFile;