const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'uploads');

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

path.join(folder, 'message.txt');

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

// update text data
//method 1
fs.appendFile("../uploads/message.txt"," Learning fs module",(err)=>{
	if(err) throw console.log(err);
	console.log("Data text append successfully");
})

// mwthod 2
const rdata = fs.appendFileSync("../uploads/messagesync.txt"," Learning fs module with sync");
console.log(rdata);




//read file 1

fs.readFile('../uploads/message.txt',"utf8",(err, data)=>{
	if(err) throw console.log(err);
	console.log("file content is:", data);
});

// read file 2

const data = fs.readFileSync('../uploads/messagesync.txt',"utf8");
console.log("content file is:",data);


if (fs.existsSync('../uploads/message.txt')) {
  console.log('File mil gayi ✅');
  fs.unlink('../uploads/message.txt',(err)=>{
  	if(err) throw console.log(err);
  	console.log("file deleted successfully method 1");
  });
  fs.unlinkSync('../uploads/messagesync.txt');
  console.log("file deleted method 2");
} else {
  console.log('File nahi mili ❌');
}


