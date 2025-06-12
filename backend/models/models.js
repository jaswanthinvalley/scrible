const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : String,
    email : String,
    password : String

})


const adminschema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})


const todoschema = new mongoose.Schema({
    todo : String
})


const usermodel = mongoose.model("user", userschema)
const todomodel = mongoose.model("todo", todoschema)
const adminmodel = mongoose.model("admin",adminschema)


module.exports = {
    usermodel,
    todomodel,
    adminmodel
    
}