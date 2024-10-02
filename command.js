const Command =  require('express');
const  operations = Command();
require('dotenv').config();
const PORT = process.env.PORT|| 3001;
operations.listen(PORT ,()=>{
    console.log("Server started at port",PORT);
})
operations.get('/number/multiply/:num1/:num2',(req,res)=>{
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    const multiply = (num1*num2);
     res.end(`the multiplication of two numbers: ${multiply}`);
})
operations.get('/number/add/:num1/:num2',(req,res)=>{
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const add = num1+num2;
     res.end(`the addition   of two numbers : ${add}`);
})
operations.get('/number/:operations/:num1/:num2',(req,res)=>{
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);
        const operation = req.params.operations;
      if(operation=== 'divide'){
          res.end(`${num1/num2}`);
      }
      if(operation === 'subtract'){
        res.end(`${num1-num2}`);
    }
      const divide = (num1/num2);
      const sub = (num1-num2);
      if(divide) {
        return res.end(`the division  of two numbers : ${divide}`);
}
    else{
        return  res.end(`the subtratction of two numbers : ${sub}`);
    }
})

