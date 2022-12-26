
const fs =require('fs');

const writeFile=(file,data) =>{
    return new Promise((resolve,reject)=>{
    fs.writeFile(file,data,(err,data)=>{
        if(err)
        reject(err);
        else
        resolve();
    });
    });
}

writeFile('test3.txt').then((data)=>{
    console.log(data.tostring());
    }).catch((err)=>{
    console.log(err);  
    })


    // Promise.all([fs.readFile('test1.txt'), fs.readFile('test2.txt')]).then((result) => {
    //     fs.writeFile("result2.txt", result.join("\n"));
    // });   