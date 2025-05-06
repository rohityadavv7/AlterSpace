import express from "express"
const app = express();
import {DB_URL, PORT} from "./config"

import userRoutes from "./routes/userRoutes"
import contentRoutes from "./routes/contentRoutes"
import shareRoutes from "./routes/shareRoutes"

import mongoose from "mongoose";


app.use(express.json())

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/content",contentRoutes )
app.use("/api/v1/space",shareRoutes )

app.get("/", (req,res) => {
    res.send("hi there")
})

mongoose.connect(DB_URL!)

app.listen(PORT || 4000);
