const express = require('express');
const app1 = express();
const PORT = 3002;
function generateRandomNumber(){
    return Math.random()*100;
}
app1.get('/random',function(req,res){
    res.write(JSON.stringify(generateRandomNumber()));
    res.end();
    res.json();
})
app1.get('/random-sum',function(req,res){
   
    res.write(JSON.stringify(generateRandomNumber() + generateRandomNumber()));
    res.end();
    res.json();
})
app1.listen(PORT,() =>{
    console.log("Server started at port",PORT)
})

