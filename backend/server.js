const express = require("express");
const Db = require("./Db");
const { usermodel } = require("./modles/models");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT

async function startServer() {
  try {
    
    await Db();
    app.listen(PORT, () => console.log(`the server is running in the port : ${PORT}`));

    app.get("/api/todo",((request,respone) => respone.json({message : "welcome to the application"}) ))
    app.post("/api/todo", async (request,response) => {

      const {name, email, password} = request.body
        const createuser = await usermodel.create({
          name,
          email,
          password
        })
        response.json(
         {message : "user creation sucessful",
          createduser : "createuser"}
        )
      
 


    })
  } catch (error) {
    console.log("the error is ", error);
  }
}


startServer();