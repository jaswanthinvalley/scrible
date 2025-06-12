const express = require("express");
const Db = require("./Db");
const bcrypt = require("bcrypt")
const { usermodel } = require("./models/models")
const { userrouter } = require("./routes/userroute");
const { adminrouter } = require("./routes/adminroute");

const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

async function startServer() {
  try {
    await Db();
    app.listen(PORT, () =>
      console.log(`the server is running in the port : ${PORT}`)
    );



    app.use('/api/v1',userrouter)
    app.use("/api/v1",adminrouter)

    app.get("/api/todo", (request, respone) =>
      respone.json({ message: "welcome to the application" })
    );
    app.post("/api/todo", async (request, response) => {
      const { name, email, password } = await request.body;
      const createuser = await usermodel.create({
        name,
        email,
        password,
      });
      response.json({
        message: "user creation sucessful",
        createduser: createuser,
      });
    });


    app.get("/create-user",((request,response) => response.json({ message : "welocome to the create user end point"})))



    app.use('/api/v1',userrouter)



  } catch (error) {
    console.log("the error is ", error);
  }
}

startServer();
