import mongoose from "mongoose";

mongoose
.connect("mongodb://localhost:27017/shefah")
.then(function(){
    console.log("DB connected")
})
.catch(function(err){
    console.log(err)
})

export const db = mongoose.connection;