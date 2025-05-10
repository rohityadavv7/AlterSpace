import { Request,Response } from "express"
import {randomString} from "../utils"
import { Link } from "../models/linkModel";
import { NewLineKind } from "typescript";
import { Content } from "../models/contentModel";

export const shareSpace = async(req:Request, res:Response):Promise<void> => {
    try{
        const {share} = req.body;

        console.log("id-> ", req.userId)

        console.log("sahre -> ",share)

        let hash;
        let newLink; 
        let link; 
        
        // console.log("share -> ", share)

        if(share){

            //checking if alredy exists

            link = await Link.findOne({userId:req.userId})

            

            console.log("existing-> ",link)

            if(link){
                res.status(200).json({
                    message:"Shareable Link already exists!",
                    link
                })
                return;
            }
            console.log("hi")
            hash = randomString(10);
            link = await Link.create({
                shareKey:hash,
                userId:req.userId
            })
        }
        else{
            await Link.findOneAndDelete({userId:req.userId})
        }

        console.log("new link generated-> ",newLink)

        res.status(200).json({
            success:true,
            message:"Updated Shareable link!",
            link
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