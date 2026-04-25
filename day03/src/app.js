const express = require("express")
const app = express()
//Middle ware used
app.use(express.json())

const note=[]

//Post api /note => It is used to update the note array
app.post("/note",(req,res)=>{
    
    note.push(req.body)
    console.log(note)
    res.send("Note created")
})
//get api /note => It is used to fetch the data on the client side(Frontend side)
app.get("/note",(req,res)=>{

    res.send(note)

})
//delete api /note => It is used to delete the data.

app.delete("/note/:index",(req,res)=>{
    
    delete note[req.params.index]
    res.send("Note Deleted")
})

//now we will use patch => used to update some part of the body. 

app.patch("/note/:index",(req,res)=>{
    note[req.params.index].Description=req.body.Description
    res.send("Description updated")
})

module.exports=app
