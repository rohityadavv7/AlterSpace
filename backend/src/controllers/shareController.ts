import { Request,Response } from "express"
import {randomString} from "../utils"
import { Link } from "../models/linkModel";
import { NewLineKind } from "typescript";
import { Content } from "../models/contentModel";

export const shareSpace = async(req:Request, res:Response):Promise<void> => {
    try{
        const {share} = req.body;

        let hash;
        let newLink;  
        
        console.log("share -> ", share)

        if(share){

            const existingLink = await Link.findOne({userId:req.userId})

            if(existingLink){
                res.status(200).json({
                    message:"Shareable Link already exists!",
                    existingLink
                })
                return;
            }

            hash = randomString(10);
            newLink = await Link.create({
                shareKey:hash,
                userId : req.userId
            })
        }
        else{
            await Link.findOneAndDelete({userId:req.userId})
        }

        res.status(200).json({
            success:true,
            message:"Updated Shareable link!",
            newLink
        })


    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"something went wrong while sharing!"
        })
    }
}

export const shareSpaceToOthers = async(req:Request, res:Response):Promise<void> => {

    try{
        
        const shareKey = req.params.id;
      

        const linkDetails = await Link.findOne({shareKey}).populate("userId", "username")

        if(!linkDetails){
            res.status(403).json({
                success:false,
                message:"sorry, Incorrect shareKey or url!"
            })
            return;
        }

        const contentDetails = await Content.find({userId:linkDetails.userId?._id})

  

        res.status(200).json({
            success:true,
            message:"User Space fetched!",
            Space_Owner: linkDetails.userId,
            content:contentDetails
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Something went wrong while fetching user's space!"
        })
    }
}