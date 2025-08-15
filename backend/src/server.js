import express from "express";
const app=express();
const port =3000;
// app.use(cors())
app.use(express.json());
app.listen(port,(req,res)=>{
    console.log(`port is running on ${port}`);
    
})
