const path = require('path');

console.log(__dirname);
console.log(__filename);
console.log(path.sep);
console.log(path.delimiter);


console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.format({
        root : '/',
        dir: '__filename',
        base: 'path_mod.js',
        ext: '.js',
        name : 'path_mod'

}));

// const f =path.parse(__dirname);
// console.log(f);


// to join path file 
console.log(path.join(__dirname,'test','second.html'));
//to join path 

// console.log(`${__dirname}\\test\\ScriptProcessorNode.html`);