import mongoose from "mongoose"
import {Schema} from "mongoose"

const userSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    passwordHash:{
        type:String,
        required:true
    }
})

export const User = mongoose.model("User", userSchema);