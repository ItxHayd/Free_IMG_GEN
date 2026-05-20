import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import signUpRoute from './Routes/signUpRoute.js';
import LogInRoute from  './Routes/LogInRoute.js'
import { connectDB } from "./DataBase/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const PORT = process.env.PORT|| '5001';
const app = express();

// app.get ('/login',(req,res)=>{
//     res.status(200).send("holla")
// })

//Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);


app.use('/api/signup',signUpRoute);
app.use('/api/login',LogInRoute);

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server Started Successfully...")
    })
});
