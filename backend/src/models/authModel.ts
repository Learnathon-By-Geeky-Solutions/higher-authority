import mongoose from 'mongoose';
import validator from "validator";
const authSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: "Invalid Email"
        }
    },
    password: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model("Auth", authSchema);