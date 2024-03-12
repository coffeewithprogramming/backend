import express from "express";


const router = express.Router();

router.post('/signup',(req,res)=>{
    res.status(201).json({message:'Signup sucessfull'})
})

router.post("/login", (req, res) => {
    res.status(200).json({ message: "Login sucessfull" });
});

export default router;