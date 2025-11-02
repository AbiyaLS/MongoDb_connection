import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()

app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("DataBase connect successfully")
    app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`)
    })
}).catch((err)=>{
    console.log("ERROR OCCURS", err)
})

