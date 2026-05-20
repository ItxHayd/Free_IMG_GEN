import User from "../Model/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function GetUser (req,res){
    try {
        const { Email, Password } = req.body;

        const user = await User.findOne({ Email: Email.trim() });

        if (!user) {
            return res.status(404).json({ message: "Email not found. Please signup first." });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        

        const token = jwt.sign(
            { id: user._id },
            "secretkey",
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token: token
        });

        
    }catch (error) {
        res.status(500).json({messege:`error creating account ${error}`});
    }
}