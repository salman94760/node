const fs = require('fs');

fs.writeFile("test.txt","this is simple test file", (err)=>{
	if(err){
		console.log(err);
	}else{
		console.log("file created successfully");
	}
}) 