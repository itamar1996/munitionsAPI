import express from "express"
import { retwepones } from "./app.js";
const app  = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("welcome to my sever say hello");
})
app.get('/am',(req,res)=>{
    res.send(retwepones());
})
app.get('/am:id',(req,res)=>{
    res.send(retwepones());
})
app.get('/am:sumary',(req,res)=>{
    res.send(retwepones());
})
app.post('/am',(req,res)=>{
    res.send(retwepones());
})
app.listen(port,()=>{
    console.log("server run");
})