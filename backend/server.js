const express =require('express')
const app =express();
const cors=require('cors')
const {data} =require('./data')


app.use(cors());
app.listen(4000,()=>console.log("Server starting in 4000 port....."));
app.get('',(req,res)=>{
    res.send(data)
})

