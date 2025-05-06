import express from "express"
import { userMiddleware } from "../middlewares/userMiddleware"
import { createContent, deleteContent, getAllContent, updateContent } from "../controllers/contentController"

const router = express.Router()

router.post("/createContent", userMiddleware, createContent)
router.put("/updateContent", userMiddleware, updateContent)

router.delete("/deleteContent", userMiddleware, deleteContent);

router.get("/getAllContent", userMiddleware, getAllContent)

export default router;