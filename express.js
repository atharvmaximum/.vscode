/*
JS ->

function random(A){


}
random(a,b,c,d,e)
save--dev 


*/
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 3001;
  let numberofproducts = 12;         
function generateRandomNumber(){
    return Math.random()*100;
}
app.get('/product',(req,res) =>{
    console.log("logged");
     /*
    fetching those product
    aligning those product
    doing sanity those product
    making a product of array  of object
     const product = [{'phone' :"oppo", cost :110000},{'phone' :"Realme", cost :100000}]
    */
      if(numberofproducts>10){
    return  res.end('returned products array of objects');
}
   return  res.end('this is a generic root product of say something');
})
app.get('/random',function(_,res){
    res.write(JSON.stringify(generateRandomNumber()));
    res.end();

})
app.get('/random-sum',function(_,res){
    res.write(JSON.stringify(generateRandomNumber() + generateRandomNumber()));
    res.end();
    
})

app.listen(PORT ,()=>{
    console.log("Server started at port",PORT);
})

/*
Ecommerce Application -> Product ->display of product ->FE -> API Call -> GET ->API EndPoint -> /product 
to get all the product s from BE The Fe would be firing an API -> GET/product
->addition of product to cart 
->deletion of product to cart 
-> wishlistinng a product .

*/
/*
1] whereever you type  in a browser in  Url space -> that is a basically a get call that you are mnaking
2] you use '/' by default.
3] the moment you fire the Api from the FE -> it goes to the BE -> the express tries to map your request with an existing route  , then it finds that  it is callback  of that particular function gets hit , else we get path not found error
to make a unique APi we need a unique combination of 
method +path

get/products is diffterent from  post/sample
get/products is diffterent from get/sample

*/
/*

query params ->
path params ->

RestFul APIS ->
Methods ->
GET -> requesting something data from the server.
POST -> I am giving the  certain data from the server.
DELETE -> to delete the  certain data from the server whichever we reqiured  for eg - > E- commerce application.
PATCH -> Update the server data. patch may only gives us the update data whichever the server required.
PUT -> update the server data. put may tells us that it may requires all over the information whether tit should be updated or not.
readable 
user- friendly
Code of Conduct ->
restful ->
rules -> that they have been defined. ->
SOAP API ->  Communication purposes
GRPC ->

Product -> I am  seller -> nj.com

iphones ->
price  -> fluctuating ->
{
 name : "iphone",
 price : '72000',
 colorOptions : ["red", "white","black","space grey"],
 description : "arbitary",
 features :{}

}
 trade-offs ->
 solution 1 ->
 put request ->
 payload ->  to send
 {
 name : "iphone",
 price : '72000',
 colorOptions : ["red", "white","black","space grey"],
 description : "arbitary",
 features :{}
 }
 solution 2 ->
 patch request -> only send information you want to update .
 {
 price : "74000",
 name : "iphone 14s"
 }
 put -> a bigger payload (more data to transfer)
 put request are easy to handle on the BE  ->  not much code is required to handlet them .
 patch -> a smaller payload
 -> they can get tricky to process  and  write the code for them .
 API ->
 method ->
 path -> discussion yet to happen .
 query params and path params ->
 query params -> pending
 path params -> complete

 Question ->
 get -> product
 get -> products 
 -> E-commerce ->
  A mini case study ->
  a list of products ->
  get /product /:productID  -> path params -> the dynamic data url is stored,
  product/idofIphone,
  product/idofLenovo
Amazon ->
categories -> 
hosehold,
electronics ,
food,




*/
app.get('/product/:productId',(req,res) =>{
    console.log(req.params.productId);
    res.end('all products would came over here');
})
app.get('/product/:productId/Name',(req,res) =>{
    console.log(req.params.productId);
    res.end(' Rupam sabale');
})
app.get('/product/:categoryId/:productId',(req,res) =>{
    console.log(req.params);
    res.end(' processing multiple path params');
})
app.get('*', (req,res) =>{
    res.end("You are done with your project execution of Rupam Sabale");
    /*  a properly generated error  -> rely on express -> */
})
/*
targeting all ->
   Deeply Understanding into a network tab ->
   Itro to Postman ->
   Query Params ->
   

   MVC -> 1 Lecture 
 */
