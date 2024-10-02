

// console.log("hello world");
//2 diffterent types of machines communication has been established 
//-> Destructuring - 70%of JS
// const arr1 = ['naman',18];
// const[name,age] = arr1;
// console.log(name,age);// output naman ,18
//array based destructuring works on the principle  of sequencing,
//object based destructuring works on the principle of key matching .
//Modules in js -
//seperation of concerns 
//HTML -
//why opt for a diffternt JS file?

//<script>
//</script>
//BACKEND ->
//data flow  journey ->
//file structuring -> how will be  organising the BE code so that we  are able to acheive the seperation of concerns effectively.
//three diffterent js files ->
//one.js
//two.js
//three.js
//File- System -> File Moduling ->
//1]Common JS module system(default)
//2]ES6 Module System
//syntatic diffternce 

//Main file - two.js
//add and Subtract 
// const operations =  require("./operation.js");//importing a particular file data.
// console.log(operations);

// const sum = operations.add(a,b);
// console.log(sum);
// import add from './operation.js'
//GIT - modules in  remote nad local should be aligned.
const {add,product,divide} = require('./operation.js');
 const sum = add(1,2);
 const mul = product(5,4);
 const div = divide(6,2);
 console.log(sum);
 console.log(mul);
 console.log(div);
// const {product,divide} = require('./operation2.js');
// const multiply = product(6,4);
// const div = divide(4,2);
// console.log(multiply);
// console.log(div);