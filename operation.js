

//helper  File - one.js
// module is used to export the particular file or data to another file.
// module.exports.add =add;
const add = function(a,b){
    return a+b;
}
const product = function(a,b){
    return a*b;
}
const divide = function(a,b){
    return a/b;
}
module.exports={product,divide,add};
// module.exports={add};
