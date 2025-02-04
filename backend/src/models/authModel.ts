import mongoose from 'mongoose';

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
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model("Auth", authSchema);