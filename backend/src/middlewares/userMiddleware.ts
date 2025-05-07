
import { NextFunction, Request,Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { SECRET_KEY } from "../config"



export const userMiddleware = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try{
        const token = req.headers.authorization?.split(" ")[1];     

        if(!token){
            res.status(403).json({
                success:false,
                message:"Token not found"
            })
            return;
        }

     

        const verifyToken = jwt.verify(token,SECRET_KEY!)

      

        if(!verifyToken){
            res.status(403).json({
                success:false,
                message:"Invalid token!"
            })
            return;
        }

        req.userId = (verifyToken as JwtPayload).userId;

        // console.log("id-> ", req.userId)

        next();

    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Something is wrong, try again later!"
        })
    }
}