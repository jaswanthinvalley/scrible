const express  = require("express")
const adminrouter = express.Router()
const bcrypt = require("bcrypt")
const { adminmodel } = require("../models/models")


adminrouter.get("/admin",((req,res) => res.json({greet : "welcome admin"}) ))



adminrouter.post("/create-admin", async (req,res) => {
    const {name,email,password} = await req.body

    if(!name || !email || !password) {
        res.status(404).json({ error : "all feilds required" })
    }

    const hashedpassword = await bcrypt.hash(password,10)
    

    const createadmin = await adminmodel.create(
        {name,
        email,
        password : hashedpassword}
    )

    res.send(createadmin)
    



})





module.exports = {
    adminrouter
}