//Introduction to Backend-
//what Exactly node is ?
//Amazon -
//Sign in - username and password
//Backend - 
//request -response cycle - we are trying to communicate with backend to get the information of about these page it may helps by an DNS system . for eg - amazon etc. DNS is a combination of key and value(IP).
//Node - > It is an javascript runtime environment.
// Browser -> JS  is an engine which supports  diffterent JS engines are ->
//V8 - chrome , spider-Monkey -> Mozilla , Chakra - Edge
// Basically  Node is able to compile and interpreted of js code respectively.they are 99% simillar fact but there  is an 1% diffterence in it .
// console.log("this is rupam sabale");

// let a = 24;

// console.log(`the age of rupam Sabale is ${a}`);
//CLient - Server Model - as the client request the signal the server fulfill the client request so hence client - browser as well as server -  server respectively.
//eg - Amazon.in etc. 
//DNS - Domain Server System -  127.0.0.2 - It is an IPV4 address respectively for eg - airbnb .com etc. address of the server .
//  It is an IPV6 address  for e.g - google and Facebook etc.
//popular languages to build the backend is -
// JS (Node) - Bun,Deno.
// PHP
//Java -SpringBoot
//Scala
//rust
//ruby- Ruby on Rails
//Go Lang
//Python -Django,flask
//purpose of application server - it belongs from the  client in which it understands the request of the server  and it gives us the response to the client whatever it required .
// process of client- server communication : 
//Database(collects past orders of data) -> Application server which receives past Orders of database -> so hence it gives a response on past orders and it sends to an client whatever it requires .eg amazon etc.
//client-side rendering and server-side rendering concepts .
//client-server is a two way-process - 
// 1 accept the data from server 2 it sends  the data from the server respectively.
//LTS -Long Term Support - every product has versioning in it.
//V8 Engine -> Browser -> Machine -> Node 
//set Timeout 
//set Interval 
//console log 
// fetch 
 // browser ->
 //Node -> we do not have the browser 
 //Node -> V8 +libuv + node related Packages + external Modules 

//.createElement 
//.getElementById

// fetch();//Introduction to Backend-
 //what Exactly node is ?
 //Amazon -
 //Sign in - username and password
 //Backend - 
 //request -response cycle - we are trying to communicate with backend to get the information of about these page it may helps by an DNS system . for eg - amazon etc. DNS is a combination of key and value(IP).
 //Node - > It is an javascript runtime environment.
 // Browser -> JS  is an engine which supports  diffterent JS engines are ->
 //V8 - chrome , spider-Monkey -> Mozilla , Chakra - Edge
 // Basically  Node is able to compile and interpreted of js code respectively.they are 99% simillar fact but there  is an 1% diffterence in it .
 // console.log("this is rupam sabale");
 
 // let a = 24;
 
 // console.log(`the age of rupam Sabale is ${a}`);
 //CLient - Server Model - as the client request the signal the server fulfill the client request so hence client - browser as well as server -  server respectively.
 //eg - Amazon.in etc. 
 //DNS - Domain Server System -  127.0.0.2 - It is an IPV4 address respectively for eg - airbnb .com etc. address of the server .
 //  It is an IPV6 address  for e.g - google and Facebook etc.
 //popular languages to build the backend is -
 // JS (Node) - Bun,Deno.
 // PHP
 //Java -SpringBoot
 //Scala
 //rust
 //ruby- Ruby on Rails
 //Go Lang
 //Python -Django,flask
 //purpose of application server - it belongs from the  client in which it understands the request of the server  and it gives us the response to the client whatever it required .
 // process of client- server communication : 
 //Database(collects past orders of data) -> Application server which receives past Orders of database -> so hence it gives a response on past orders and it sends to an client whatever it requires .eg amazon etc.
 //client-side rendering and server-side rendering concepts .
 //client-server is a two way-process - 
 // 1 accept the data from server 2 it sends  the data from the server respectively.
 //LTS -Long Term Support - every product has versioning in it.
 //V8 Engine -> Browser -> Machine -> Node 
 //set Timeout 
 //set Interval 
 //console log 
 // fetch 
  // browser ->
  //Node -> we do not have the browser 
  //Node -> V8 +libuv + node related Packages + external Modules 
//   console.log("this is rupam sabale");
 
//  let a = 24;
//  const port = 3000;

//  http = require('http')


//  console.log(`the age of rupam Sabale is ${a}`);
//  setTimeout(() =>{
//      console.log("executed Later");
 
//  },1000)
 /*node
 .createElement 
 .getElementById
 */
// fetch();
  //node -  Internal Architecture of the node 
  //Event -Driven Model - event queue , microsoft queue ,data queue,call STack ,
  //client - server - *** -> root of the we development
  // node - is the 70% of javascript ->
  //related to  30% backend related Knowledge 
  //always and always be writing js ----
  //node Revision -
  // BE - 
  //what is map in js ?
  //call back 
  const {product,divide} = require('./operation.js');
const multiply = product(6,4);
const div = divide(4,2);
console.log(multiply);
console.log(div);
//server : - a server which keeps on listening the request  respectively.
//LINUX COMMANDS :
// pwd - path working directory 
//ls - content of working file init.
// rm - remove a file.
// rmdirr - remove a directory and its file.
//touch - create a file.
//mkdir - make a directory 
//cd - change a dirctory 
// cd.. - select the directory .
// rm- rf - remove a recursively double folder file.
//Backend -
//Node(js environment)
//database :
//SQL
//NoSQL
//SQL :
//Graph Db
//key value pair db
//time series db
//Examples of  NoSQL :
//a] cassandra b]Mongodb
//example of graph db :
//graph -> meta
//example of key -value pair db :
//a] Redis 
//Example of time-series db :
// a] neo4j
//Example of SQL :
//a] MySQL 
//b] Postgres
//c]Mirae Db
//Framework/library :
//It is same for you
// 1] CSS (Bootstrap library):
//2] Node -> directly
//3]Framework -> makes our life easier  a] Express ->  develop backend 
//Node ->developer basics 
//EXpress : COre work will be done in easier
//Because - a framework or llibrary abstrscts away the complexities of a particular techology.
//flow of a server : - client - > Deo.com -> modem -> ISP ->majority of cables and so on -> server to fetch the request.
//on asingle machine /laptop there can be more than 1 servers are running 
//approximation -64000  srvers are running at same time 
//https ->
//next lecture ->
//what are the opensource ?
// what are the packages ?
//what is package.json?
//what is package.lock.json?
//make our first node server ->
/*
node -> modules 

require ->exports
__dirname 
__filename


app.js

operation.js
((__dirname, __filename, require, exports,modules) =>{
    const abcd = 10;
    })()
    console.log(abcd);
    IIFE - immediately invoked Function expression
*/





