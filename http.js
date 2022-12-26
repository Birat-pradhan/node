const http =  require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url);
    if(req.url=== "/home"){
        res.write("welcome");
    }else if(req.url === "/about")
    {
        res.write("about");
    }else
    {
        res.write("page no found");
    }

    res.end();

});

server.listen(3000);