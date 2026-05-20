import express from "express";
import { CreateUser } from "../controllers/signUp.js";

const router = express.Router();

router.post("/",CreateUser);


export default router;