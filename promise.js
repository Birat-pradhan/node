const fs =require('fs');

const readFile=(file) =>{
    return new Promise((resolve,reject)=>{
    fs.readFile(file,(err,data)=>{
        if(err)
        reject(err);
        else
        resolve(data);
    });
    });
}

readFile('test1.txt').then((data)=>{
    console.log(data.toString());
    }).catch((err)=>{
  console.log(err);  
});