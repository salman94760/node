const path = require('path');

console.log('Current file:', __filename);
console.log('Directory:', __dirname);
console.log('Base name:', path.basename(__filename));
console.log('Extension:', path.extname(__filename));
console.log('Join path:', path.join(__dirname, 'files', 'notes.txt'));