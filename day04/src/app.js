const express = require("express")
const app = express()

//middlewhere
app.use(express.json())

const note = []
//get api
app.get("/notes",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        "message":"Note Fetched succesfully",
        "note":note
        
    })
})

//post api

app.post("/notes",(req,res)=>{
    
    note.push(req.body)
    
    res.status(201).json({
        "message":"Note Created Successfully"
    })
})

//delete api with params

app.delete("/notes/:index",(req,res)=>{
    delete note[req.params.index]
    res.status(204).json({
        "message":"The note was deleted succesfully"
    })
})

//patch api
app.patch("/notes/:index",(req,res)=>{
    note[req.params.index].Description=req.body.Description
    res.status(201).json({
        "message":"description updated successfully"
    })
})

module.exports=app