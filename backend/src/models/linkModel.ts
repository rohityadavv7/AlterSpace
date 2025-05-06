import mongoose from "mongoose";
import { Schema } from "mongoose";

const linkSchema = new Schema({

    shareKey:{
        type:String,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        unique:true
    }
})

export const Link = mongoose.model("Link", linkSchema)