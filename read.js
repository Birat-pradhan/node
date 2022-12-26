const fs =require('fs');    

// fs.writeFile("test1.txt","hello",(err)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log("file");
//     }
// });
fs.readFile('test1.txt','utf-8',(err,data)=>{
    if(err)
    console.log("error", err);
    else
    console.log(data);
})

fs.readFile('test2.txt','utf-8',(err,data)=>{
    if(err)
    console.log("error", err);
    else
    console.log(data);
})

