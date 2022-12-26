const http= require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/sync')
    {

        for(let i=0;i<5000;i++){

            console.log(i);
    
        }
        res.end('synch hi');
    }else if(req.url ==='/async'){
        setTimeout(() => {
            res.end('async hi');
        }, 10000);
    }else{
        res.end('hello');
    }
});


server.listen(4000);
