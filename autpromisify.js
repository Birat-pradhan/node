const fs= require('fs');
const util = require('util');

const writeFile =util.promisify(fs.writeFile);

writeFile('test1.txt','namaste').then((data)=>{
    console.log('file written')
})