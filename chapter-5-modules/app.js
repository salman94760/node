const {requestHandler} = require('./requesthandler');
const http = require('http');
const server = http.createServer(requestHandler);
server.listen(3500,()=>{
	console.log('server start');
})