const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema({
    name: String,
      email: {type: String, unique:true},
      pass: String,
      cPass: String,
      age: String,
      dob: String,
      contact: String,
      city: String,
},
{
collection:"User"}
)

mongoose.model("User",userDetailsSchema)