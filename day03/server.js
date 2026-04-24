const express=require("express")
const app = express()
app.use(express.json())
const note = []

app.post("/note",(req,res)=>{
    console.log(req.body)
    note.push(req.body)
    res.send("Note created")
})
app.get("/note",(req,res)=>{
    res.send(note)
})

app.listen(8000,()=>{
    console.log("Server is started on port 8000")
})