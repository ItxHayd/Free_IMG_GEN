import User from "../Model/User.js"
import bcrypt from "bcryptjs"


export async function CreateUser (req,res){
    try {
        const {Username,Email,Password,ConfirmPass} = req.body;
        
        const existingUser = await User.findOne({ Email: Email.trim() });

        if (existingUser) {
        return res.status(409).json({ message: "Email is already registered" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create user
        const newUser = new User({
            Username: Username.trim(),
            Email: Email.trim(),
            Password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({messege:"success"});
    } catch (error) {
        res.status(500).json({messege:"error creating account"});
    }
}