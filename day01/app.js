const express = require("express");
const app = express(); //creating a server

app.get("/",(req,res)=>{
    res.send("hello World")
})
app.get("/home",(req,res)=>{
    res.send("This is the Home Page")
})
app.get("/about",(req,res)=>{
    res.send("This is the about page")
})
app.get("/something",(req,res)=>{
    res.send("This is the something Page")
})

app.listen(8000); //starting a server