const express = require('express');
const {createTodo, updateTodo} = require('./types');
const app = express() ;

app.use(express.json());

app.post('/todo',(req,res)=>{
        const todo = req.body;
        const parseTodo=createTodo.safeParse(todo);
        if(!parseTodo.success)
        {
            res.status(411).json({msg:"Wrong inputs"});
        }

})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{
    const todoID  = req.body;
    const parsetodoID = updateTodo.safeParse(todoID);
    if(!parsetodoID)
    {
        res.status(411).json({
            msg:"Wrong inputs",
        });
    }
    
})

app.listen(3000,(err)=>{
    console.log("Listening on port 3000");
})