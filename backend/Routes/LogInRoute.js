import express from "express";
import {  GetUser } from "../controllers/LogIn.js";

const router = express.Router();


router.post("/", GetUser);


export default router;