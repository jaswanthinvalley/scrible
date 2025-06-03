const mongoose = require("mongoose");
async function Db() {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("already connected to the database");
    }
    const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connection sucessful")
    return connection
  } catch (error) {
    console.log(error)
  }
}

module.exports = Db;
