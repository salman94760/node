const http = require('http');
const server = http.createServer((req,res)=>{
	const page = req.url; 
	console.log(page);
	if(page.toLowerCase() === '/'){
		res.setHeader('content-Type','text/html');
		res.write(`<html>
	<head>
		<title>Node Pages</title>
	</head>
	<body>
		<h1>Home Page</h1>
		<form action="/form-submit" method="POST">
			<label>Enter name here</label>
			<input type="text" name="fullname"/><br>
			<label>Male</label>
		<input type="radio" name="gender" value="male"/>
		<label>Female</label>
		<input type="radio" name="gender" value="female"/><br>
			<button type="submit">Submit</button>
		</form>
	</body>
</html>`);
		return res.end();
	}else if(page.toLowerCase() === '/about'){
		res.setHeader('content-Type','text/html');
		res.write(`<html>
	<head>
		<title>Node Pages</title>
	</head>
	<body>
		<h1>About Page</h1>
	</body>
</html>`);
		return res.end();
	}else if(page.toLowerCase() === '/contact'){
		res.setHeader('content-Type','text/html');
		res.write(`<html>
	<head>
		<title>Node Pages</title>
	</head>
	<body>
		<h1>Contact Page</h1>
	</body>
</html>`);
		return res.end();
	}else if(page === '/form-submit' && req.method === 'POST'){
		let body = '';
    	req.on('data', chunk => {
        	body += chunk.toString();
    	});
    	// const object = Buffer.concat(body).toString();
    	req.on('end', () => {
        	console.log('Form data:', body);
    		const params = new URLSearchParams(body);
    		// const bodyObject = {};
    		// for(const [key,val] of params.entries()){
    		// 	bodyObject[key] = val;	
    		// }
    		const bodyObject = Object.fromEntries(params);
    		console.log(bodyObject);
        	res.setHeader('Content-Type', 'text/html');
        	res.write('<h1>'+body+'Form submitted successfully!</h1>');
       	 	return res.end();
    	});
    }else{
    	res.statusCode = 404;
    	res.setHeader('Content-Type', 'text/html');
    	res.end('<h1>404 Not Found</h1>');
    	}
});

server.listen(3500,()=>{
	console.log('server start');
})