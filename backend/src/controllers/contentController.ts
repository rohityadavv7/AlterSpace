import { Request,Response } from "express"
import { User } from "../models/userModel";
import { Content } from "../models/contentModel";


export const createContent = async(req:Request, res:Response):Promise<void> => {
    try{
        const{link, linkType, title, tag, userId, editable} = req.body;

        const userTokenId = req.userId;
        // console.log("tokenid-> ", userTokenId)
        // console.log("userId-> ", userId)

        let authorName;

        const userDetails = await User.findById({_id:userTokenId});
        // console.log("user details -> ", userDetails)

        if(userId === userTokenId){
            authorName = "You"
        }
        else{
            authorName = userDetails?.username;
        }

        // console.log("author-> ",authorName )

        const newContent = await Content.create({
            link:link,
            Linktype:linkType,
            title:title,
            addedBy:authorName,
            tag:tag,
            userId:userId,
            editable
        })

        res.status(200).json({
            success:true,
            message:"content Created!",
            newContent
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Could not upload your content, try again later!"
        })
    }
}

export const updateContent = async(req:Request, res:Response):Promise<void>=> {
    try{
        const {link,title,userId } = req.body;

        const userTokenId = req.userId;

        console.log(userId)
        console.log(req.userId)

        const contentDetails = await Content.findOne({link})

        if(userId !== userTokenId && contentDetails?.editable !== true){
            res.status(403).json({
                success:false,
                message:"The owner does not allow edit to his Space!"
            })
            return;
        }

        const updatedContent = await Content.findOneAndUpdate({link}, {
            title:title
        },{new:true})

        res.status(200).json({
            success:true,
            message:"Content updated!",
            updatedContent
        })


    }catch(error){
        res.status(500).json({
            success:false,
            message:"Could not edit!, try again later!"
        })
    }
}

export const deleteContent = async(req:Request, res:Response):Promise<void> => {
    try{
        const {link} = req.body;
        const userTokenId = req.userId;

        const contentDetails = await Content.findOne({userId:userTokenId})



        let contentUserId = contentDetails?.userId;

        console.log("in delete",contentDetails, contentDetails?.userId)

        if(!contentUserId){
            res.status(403).json({
                success:false,
                message:"something went wrong with ids"
            })
            return;
        }

        

        if(contentUserId.toString() !== userTokenId){
            res.status(403).json({
                success:false,
                message:"You are not allowed to delete content from someones else's Space"
            })
            return;
        }

        const deletedContent = await Content.findOneAndDelete({link,userId:userTokenId})

        res.status(200).json({
            success:false,
            message:"Content deleted!",
            deletedContent
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Could not delete Content, try again!"
        })
    }
}

export const getAllContent = async(req:Request, res:Response):Promise<void> => {
    try{
        const userTokenId = req.userId

        const allContent = await Content.find({userId:userTokenId})

        // console.log("allcontent-> ", allContent)

        res.status(200).json({
            success:false,
            message:"Content fetched!",
            allContent
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Could not fetch content!"
        })
    }
}