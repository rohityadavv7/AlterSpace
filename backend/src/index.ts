import express from "express"
const app = express();

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

// MONGO_URL = "mongodb+srv://sungjinwoosrank100:Srank100@cluster0.xjzp30d.mongodb.net/PayDashDB"

mongoose.connect("mongodb+srv://sungjinwoosrank100:Srank100@cluster0.xjzp30d.mongodb.net/AlterSpaceDB")

app.listen(3000)
