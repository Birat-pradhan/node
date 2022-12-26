const fs =require('fs');

fs.readFile('test1.txt','utf-8',(err,data)=>{
        if(err){
        console.log("error");
        }
        else{
            fs.writeFile("test2.txt",data,(err)=>{
                if(err){
                    console.log("error");
                }
                else{
                    fs.unlink('test1.txt',(err)=>{
                        if(err)
                        console.log("error");
                        else
                        console.log("delete");
                    })
                }
            });
        }

    })

    

    