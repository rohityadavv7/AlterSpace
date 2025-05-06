import mongoose from "mongoose"
import { Schema } from "mongoose"


const contentSchema = new Schema({
    link:{
        type:String
    },
    Linktype:{
        type:String
    },
    title:{
        type:String
    },
    addedBy:{
        type:String
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    editable:{
        type:Boolean,
        default:false
    }
})

export const Content = mongoose.model("Content", contentSchema)