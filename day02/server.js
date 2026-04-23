const express = require("express")
const app=express()
app.use(express.json())
const note =[]


app.post("/notes",(req,res)=>{
    console.log(req.body)
    note.push(req.body)
    res.send("Note Created")
})

app.get("/notes",(req,res)=>{
    res.send(note)
})

app.listen(8000,()=>{
    console.log("Server is running in port: 8000")
})