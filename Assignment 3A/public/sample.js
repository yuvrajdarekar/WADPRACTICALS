var exp = require("express")

var app = exp()

const PORT =3000
app.get("/", (req,res)=> {

    res.end("This is sample program")
})

app.listen(PORT,()=>{
    console.log(`server is running on port on ${PORT}`)
})