const http = require('http');
http.createServer(function(req,res){
    //request contains the information about the client .
    console.log(req)
    console.log('Server gets hit')
    
    res.write('Server is running');
    res.end('Please end the request')
    // console.log(unidentified);
}).listen(3000);
/*
path params 
query params 
*/