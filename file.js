const fs = require('fs');

fs.writeFileSync('text.txt',"hello");

let result = fs.readFileSync('text.txt');

console.log(result.toString());


//......to delete the file 
//....fs.unlinkSync('test.txt');