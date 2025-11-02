const math = require('./calc');
const system = require('./system');

const http = require('http');

const server = http.createServer((req,res)=>{
	res.write('<h1>Calculation</h1>')
	res.write(`<h2>Addition: ${math.add(58,74)}</h2>`);
	res.write(`<h2>Substraction: ${math.sub(58,74)}</h2>`);
	res.write(`<h2>Multiply: ${math.multi(58,74)}</h2>`);
	res.write(`<h2>Divide: ${math.divide(58,74)}</h2>`);
	res.write(system())
	res.end();
});

server.listen(3700);