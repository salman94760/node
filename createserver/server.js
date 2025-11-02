const http = require('http');

const server = http.createServer((req,res)=>{
	console.log("server started");
	res.end("dfvdfvf");
	// process.exit(); // server ko band karne ke liye
});

server.listen(3500);