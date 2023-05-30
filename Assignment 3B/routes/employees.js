const express = require("express")
const router = express.Router();

const Employee = require("../models/employee");
//const employee = require("../models/employee");

router.get("/", async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.json(employees)
    }
    catch(err)
    {
        res.send("Error is:"+err)
    }
})

router.post("/", async(req,res)=>{
   const employee = new Employee({
    name : req.body.name,
    designation : req.body.designation
   })

   try{
    const e1 = await employee.save()
    res.send(e1)
    res.json(e1)
   }

   catch(err)
   {
    res.send("Error is:"+err)
   }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await employee.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await employee.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router