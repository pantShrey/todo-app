const express = require('express');

const app = express() ;

app.use(express.json());

app.post('/todo',(req,res)=>{

})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{

})

app.listen(3000,(err)=>{
    console.log("Listening on port 3000");
})