import express from "express"
import { retwepones, retweponesByID } from "./app.js";
const app  = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("welcome to my sever say hello");
})
app.get ('/am',async (req,res)=>{
    try {
        const data = await retwepones()
        console.log(data);
        
        res.json(data);
    } catch (error) {
        res.status(500).json({
            err:true,
            messeg:error
        })        
    }
    
})
app.get('/am:id',(req,res)=>{
    res.send(retweponesByID(req.params.id));
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