const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()


const {Schema} = mongoose
const boxSchema = new Schema({
    title:{type:String,required:true},
    date:{type:String},
    comment:{type:String},
    folder:{type:String},
    img:{type:String,required:true},
    text:{type:String,required:true},
})
const Box = mongoose.model("box",boxSchema)


const app = express()
app.use(cors())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("<h1>box</h1>")
})

app.get("/box",(req,res)=>{
    Box.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})




app.get("/box/:id",(req,res)=>{
    const {id} = req.params
    Box.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
            else{
                res.status(404).json({message:"not found"})
            }
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

app.delete("/box/:id",(req,res)=>{
    const {id} = req.params
    Box.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("deleted")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})


app.post("/box",(req,res)=>{
    const box = new Box({
        title:req.body.title,
        date:req.body.date,
        comment:req.body.comment,
        folder:req.body.folder,
        img:req.body.img,
        text:req.body.text
    })
    box.save()

    res.send("Saved!")
})



const port = process.env.port
const url = process.env.url.replace("<password>",process.env.password)

mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    console.log("Connect Succesfully!");
    app.listen(port,()=>{
        console.log("Server working");
    })
})