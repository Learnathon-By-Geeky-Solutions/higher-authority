import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/shefah';
mongoose
.connect("MONGODB_URI")
.then(function(){
    console.log("DB connected")
})
.catch(function(err){
    console.log(err)
})

export const db = mongoose.connection;