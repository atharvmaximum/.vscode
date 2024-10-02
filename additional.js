// console.log(__dirname);
// console.log(__filename);

/*
node -> modules 

require ->exports

app.js

operation.js
((__dirname, __filename, require, exports,modules) =>{
    const abcd = 10;
    })()
    console.log(abcd);
    IIFE - immediately invoked Function expression
*/
// Path Module->
// const path = require('path');
/*
path.join -> fs module
*/
// console.log(path.dirname(__filename));//it may tells the directory part of a particular file.
// console.log(path.basename(__filename));//it may tells us the basename of the particular file.
// console.log(path.extname(__filename));//it may tells  us the correct extension of aparticular file.
// console.log(path.parse(__filename));// it may gives us the main details of the particular file.
/*
OS Module
*/
const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.hostname());
//Inbuilt Modules
/*
1] custom modules 
2]external modules -> AXIOS -> Calling API'S.
*/
/*
package ?
package.lock.json?
package.json?
OpenSource ->
a] Code is publicly available ?
b] Anyone can contribute to their code if their PR is publicly available.
c]Moderators each Repository ->
d] why -> a] development becomes faster -> limited resources -> free ->the whole world ->(contributions.large companies);
5] why should be careFul about using any opensource code ->
 -> large companies ->
 Opensourcecode -> approval ->
 -.stop Maintaining that code -> 
  lodash -> node 10 ->node 20 ->
  6] npmjs -> 
  /*
   npm -> node package manager ->
   Fetch and Axios  -> API Calls 
   1] Fetch ->
   The way status code are treated ->
   axios is a more feature package ->
   Error Handling ->
   4xx ->
   try ->
   response.ok  ->fetch -> 400
   throw Error 
   catch ->
   Axios ->4xx errors 
   -> const  response = fetch()
   response.json() ->stream to json ->
   Axios handled it automatically ->
   Axios is a more Feature Packaged  -> A little bulky  than fetch
   -> 1.1.0 ->major update. minor update.patch update
   npm  init , npm init -y , -> it may helps us to open the package.json file respectively 
   -> before version 4npm ->
   after version -> npm i dotenv
   c] dev dependencies vs dependencies ->
   There are a few packages that you are require only in a local development you do not need them at that time of product deployment these packages/dependencies are also referredto as Dev dependencies . these dependencies that are often only used at that time of product deployment is called as normal dependencies.
   nodemon ->dev dependencies .

  */
 /*
 Http modules ->
 localhost :3000
URI ->
https/www.facebook.com/abcd -> https ->protocol www.facebook.com -> Domain server system  abcd -> resource .
-> transititive dependencies -> Dependencies of dependencies .
->  node ->dotenv -> 
 ^ ~ 
 ~4.1.6 -> without any symbol ->  major update, minor update , patch update 
 npm i 
 ~ (tilled symbol)->
 4.1.x -> 
 4.1.2 -> pathc update 
 ^(caret symbol) ->
 4.x.x ->
 4.1.2 -> 4.2.8 

 3] major -> you should have to do manually -> Diffterences
 pathch  -> very small update can be installed without bugs with highest probability 
 minor ->   few code changes , which wont impact  your existing core functionality.
 major ->  your code will definitely brake , super high chances .
 they might have to revamp their existing code to enjoy the upgrade  benefits .
 Ports ->
 https ->443
 http ->80
 ftp ->21

process ->
http module -> 
.createServer()
.listen()


  
 */




