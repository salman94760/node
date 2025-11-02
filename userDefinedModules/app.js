// build in modules fs, path, os, http, events
// third party modules jaise express, chalk, mongoose
const math = require('./math');
const http = require('http');

const server = http.createServer((req,res)=>{
	res.write('<h1>This is math path</h1>');
	res.write(`<h1>the sum is: ${math.add(10,5)}</h1>`);
	res.write(`<h1>the sub is: ${math.sub(10,5)}</h1>`);
});

server.listen(3500);