import dotenv from "dotenv"
dotenv.config()

export const SECRET_KEY = process.env.JWT_SECRET
export const DB_URL = process.env.MONGO_URL
export const PORT = process.env.PORT