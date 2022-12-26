const fs = require('fs');
let result = fs.readFileSync('text.txt');
fs.writeFileSync('text2.txt',result);
console.log(result.toString());
fs.unlinkSync('text.txt');