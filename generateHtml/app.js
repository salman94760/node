const http = require('http');

const server = http.createServer((req,res)=>{
	const dom = '<html><head><title>First html page</title></head><body><h1>This is first heading</h1><p>this is first paragraph</p></body></html>';
	res.setHeader('content-Type','text/html');
	res.write(dom);
	res.end();
});

server.listen(3500);