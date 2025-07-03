const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://user:user@cluster0.7m6bnyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0s")
.then(()=>{
   console.log("connected to mongodb")
})