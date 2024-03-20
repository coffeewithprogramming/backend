import express from "express";
import User from "../../db/model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const router = express.Router();



router.post("/signup", async (req, res) => {
    const body = { ...req.body };

    const user = await User.findOne({ username: body.username });
    if (user) {
        return res.status(403).json({ message: "username already taken" });
    }
    if (body.password !== body.confirmPassword) {
        return res.status(403).json({ message: "password does not match" });
    }
    const hashPassword = await bcrypt.hash(body.password, 2);
    body.password = hashPassword;

    await User.create(body);

    return res.status(201).json({ message: "signup successfull" });
});



    router.post("/login", async (req, res) => {
        const body = {...req.body};
    const user = await User.findOne({username : body.username});
    if (!user) {
        return res.status(403).json({ message: "Username or Password incorrect" });
    }
    const isMatching = await bcrypt.compare(body.password,user.password);
    if(!isMatching){
    return res.status(403).json({ message: "Username or Password incorrect" });
    }
    
    
        const token = jwt.sign(
        { role: "USER", id: user._id },
        process.env.USER_SECRET_KEY,
        {
            expiresIn: "7d",
        }
    );
    return res.status(200).json({ message: "Login sucessfull" ,token :token});
    });

    export default router;
