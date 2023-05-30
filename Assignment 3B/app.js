const express = require("express")
const mongoose = require("mongoose")

var url = "mongodb://127.0.0.1:27017/RestApiDB"

const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on("open", ()=>{
    console.log("Connected to Database")
})

app.use(express.json())

const employeeRouter = require("./routes/employees")

app.use("/employees",employeeRouter)

app.listen(8084,()=>{

    console.log("Server started")
})