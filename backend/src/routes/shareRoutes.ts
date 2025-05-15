import express from "express"
import { userMiddleware } from "../middlewares/userMiddleware"
import { shareSpace, shareSpaceToOthers } from "../controllers/shareController"
const router = express.Router()

router.post("/share", userMiddleware, shareSpace);
router.get("/share/:shareId",  shareSpaceToOthers);

export default router;