const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : String,
    email : String,
    password : String

})


const todoschema = new mongoose.Schema({
    todo : String
})


const usermodel = mongoose.model("user", userschema)
const todomodel = mongoose.model("todo", todoschema)


module.exports = {
    usermodel,
    todomodel
}