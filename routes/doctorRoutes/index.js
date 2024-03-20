import express from "express";
import Doctor from "../../db/model/doctorScehma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const router = express.Router();

router.post('/signup', async (req,res)=>{
    const body = {...req.body};
    const doctor = await Doctor.findOne({username : body.username})
    if(doctor){
        return res.status(403).json({message:"Username already exist"})
    }
    if(body.password !== body.confirmPassword){
        return res.status(422).json({ message: "Password does not match" });
    }
    const hashedPassword =  await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;

    await Doctor.create(body);
    return res.status(201).json({ message: "Signup sucessfull" });
})

router.post("/login", async (req, res) => {
    const body = {...req.body};
    const doctor = await Doctor.findOne({username : body.username});
    if (!doctor) {
        return res.status(403).json({ message: "Username or Password incorrect" });
    }
    const isMatching = await bcrypt.compare(body.password,doctor.password);
    if(!isMatching){
    return res.status(403).json({ message: "Username or Password incorrect" });
    }
    
        const token = jwt.sign(
        { role: "DOCTOR", id: doctor._id },
        process.env.USER_SECRET_KEYy,
        {
            expiresIn: "7d",
        }
    );
    return res.status(200).json({ message: "Login sucessfull" ,token :token});
    });



export default router;