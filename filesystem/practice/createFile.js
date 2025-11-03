const fs = require('fs');
function createFile(){
	fs.writeFile('../uploads/message.txt',"Hello Node.js File System!", (err)=>{
		if(err) throw console.log("err");
		console.log("File created successffuly");
	})

	// method sync
	try{
		fs.writeFileSync('../uploads/messagesync.txt',"Hello Node.js File System with sync!");
		console.log("File sync created successfully");
	}catch(err){
		console.log(err);
	}
}

exports.createFile = createFile;