const express = require('express')
const bcrypt = require('bcrypt')
const { usermodel } = require('../models/models')
const userrouter = express.Router()



     userrouter.post("/create-user",async(request,response) => {
      const {name,email,password} = await request.body
      const salt  = 10
      const hashedpassword = await bcrypt.hash(password,salt)

      const createuser = await usermodel.create({
        name,
        email,
        password : hashedpassword
      })
      response.send(createuser)


    } )


    module.exports = {
        userrouter
    }