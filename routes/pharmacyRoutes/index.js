import express from 'express';
import Pharmacy from '../../db/model/phramacySChema';


const router = express.Router();

router.post('/pharmacy' , async (req,res) =>{
    res.status.json({message : 'Medicine added successfully'})
})

export default router;