//OS ka name, total RAM, free RAM print karo (os module se)
const os = require('os');
const osInfo = ()=>{
	let info = `Platform: ${os.platform()}<br>`;
	info += `Architecture: ${os.arch()}<br>`;
	info += `Free memory: ${os.freemem()}<br>`;
	info += `Total memory: ${os.totalmem()}<br>`;
	info += `Home dir: ${os.homedir()}<br>`;
	return info;
}

module.exports = osInfo;