const http 	= require('http');
const fs 	= require('fs');
const path 	= require('path');

// Function to read and send HTML files
function renderPage(res, fileName, statusCode = 200) {
	const filePath = path.join(__dirname, 'pages', fileName);
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/html' });
			res.end('<h1>Server Error</h1>');
		} else {
			res.writeHead(statusCode, { 'Content-Type': 'text/html' });
			res.end(data);
		}
	});
}

const server = http.createServer((req,res)=>{
	if(req.url.toLowerCase() === '/' || req.url.toLowerCase() === '/home'){
		renderPage(res, 'index.html');
	}else if(req.url.toLowerCase() === '/about'){
		renderPage(res, 'about.html');
	}else if(req.url.toLowerCase() === '/contact'){
		renderPage(res, 'contact.html');
	}else{
		renderPage(res, '404.html', 404);
	}
});

server.listen(3500,()=>{
	console.log("server start");
})
