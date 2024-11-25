import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 10
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
})
export const User = mongoose.model("User",userSchema)