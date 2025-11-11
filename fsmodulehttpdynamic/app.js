const http 	= require('http');
const fs 	= require('fs');
const path 	= require('path');

// Helper function: render template with dynamic data
function renderTemplate(filePath, dataObj, res) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end('<h1>Server Error</h1>');
    }
    
    let rendered = content;
    for (let key in dataObj) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      rendered = rendered.replace(regex, dataObj[key]);
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(rendered);
  });
}

const http.createServer((req,res)=>{
	if(req.url.toLowerCase() === '/' || req.url.toLowerCase() === '/home'){
		const filePath = path.join(__dirname, 'pages', 'index.html');
		const data = {
			siteName: 'My Portfolio',
			userName: 'Salman khan',
			role: 'Node.js Developer',
			date: new Date().toLocaleDateString()
		};
		renderTemplate(filePath, data, res);
	}else if(req.url.toLowerCase() === '/about'){
		const filePath = path.join(__dirname, 'pages', 'about.html');
		const data = { userName: 'Aarav Singh', role: 'Backend Developer' };
    	renderTemplate(filePath, data, res);
	}else if(req.url.toLowerCase() === '/contact'){
		const filePath = path.join(__dirname, 'pages', 'contact.html');
    	const data = { email: 'aarav@example.com', phone: '+91 9876543210' };
    	renderTemplate(filePath, data, res);
	}else{
		res.setHeader('content-Tyle','text/html');
		res.write('<h2>404 not found</h2>');
		res.end();
	}
});

server.listen(3500,()=>{
	console.log("server start",3500);
})
