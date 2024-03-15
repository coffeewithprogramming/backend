import express from 'express';
import User from "../../db/model/userSchema.js";
import bcrypt from 'bcrypt'


const router = express.Router();

router.post('/signup', async (req,res) =>{
    const body = {...req.body};
    const user = await User.findOne({username : body.username});

    if(user){
        return res.status(403).json({message:'User already exist'});
    }
    if(body.password !== body.conformPassword){
        return res.status(403).json({ message: "Password doesnot match!" });
    }

    const hashedPassword = await bcrypt.hash(body.password, 2);
        body.password = hashedPassword;
        await Doctor.create(body);
        
    return res.status(201).json({message : 'Successfuly signup'})
})

router.post('/login' ,async (req,res) =>{
    res.status(200).json({message:'Login successfuly'});
})




export default router;