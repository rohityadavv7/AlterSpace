import { Request,Response } from "express"
import { User } from "../models/userModel";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config";

export const Signup = async(req:Request,res:Response):Promise<void> => {
    try{
        const {username, password} = req.body;

        //check if user already exist
        const checkUser = await User.findOne({username})

        if(checkUser){
            res.status(403).json({
                success:false,
                message:"User already exists!"
            })
        }

        //hash the password before storing
        const hashedPass = await bcrypt.hash(password,10)
        const newUser = await User.create({
            username:username,
            passwordHash:hashedPass
        })

        res.status(200).json({
            success:true,
            message:"User signed up!",
            newUser
        })
    }catch(error:any){
        console.log(error.message)
        res.status(500).json({
            success:false,
            message:"Could not sign up!, please try again later!"
        })
    }
}

export const Login = async(req:Request, res:Response):Promise<void>=> {
    try{
        const {username, password} = req.body;

        //check if user exists
        const checkUser = await User.findOne({username})

        if(!checkUser ){
           res.status(403).json({
            success:false,
            message:"user not found!"
           })
        }

        let token;

        if(await bcrypt.compare(password, checkUser?.passwordHash as string)){
            token = jwt.sign({
                userId:checkUser?._id
            },SECRET_KEY!)
            
        }

        res.status(200).json({
            success:true,
            message:"user logged in", 
            token
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Could not log in!"
        })
    }
}