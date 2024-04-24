import express from "express";
import mongoose from "mongoose";
import router from "./routes/user.route.js";

const app = express();

mongoose.connect('mongodb+srv://himanipanchani6060:JuFzUJmoFBNcPkiF@cluster0.4yqxlhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err);
})

app.use(express.json())

app.use('/api/auth',router)

app.listen(3000, () => {
    console.log('Server start...')
})