const app=require("./src/app")
const mongoose=require("mongoose")
require('dotenv').config()

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connect to database")
        })
}

connectToDb()

app.listen(8000,()=>{
    console.log("Server has started in port 8000")
})