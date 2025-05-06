import express from "express"
import { Login, Signup } from "../controllers/userController";


const router = express.Router()

router.post("/signup", Signup)
router.post("/login", Login);

export default router;