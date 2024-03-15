import express from "express";
import Doctor from "../../db/model/doctorScehma.js";
import bcrypt from "bcrypt";


const router = express.Router();

router.post('/signup', async (req,res)=>{
    const body = {...req.body};
    const doctor = await Doctor.findOne({username : body.username})
    if(doctor){
        return res.status(403).json({message:"Username already exist"})
    }
    if(body.password !== body.conformPassword){
        return res.status(422).json({ message: "Password does not match" });
    }
    const hashedPassword =  await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    await Doctor.create(body);
    return res.status(201).json({ message: "Signup sucessfull" });
})

router.post("/login", (req, res) => {
    return res.status(200).json({ message: "Login sucessfull" });
});

export default router;