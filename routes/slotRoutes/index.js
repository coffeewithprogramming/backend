import express from 'express';
import Slot from '../../db/model/slotSchema.js';

const router = express.Router();

//add slot by doctor ----doctor route
router.post('/', async (req,res) =>{

    const body = [...req.body] // adding multiple datas
    await Slot.insertMany(body)
    return res.status(203).json({message : 'Slot added'})
})

//list slot by user ---- user route

router.get('doctor/:id', async (req,res) =>{
    const id = req.params;
    const slots = await Slot.find({doctor : id});
    res.status(200).json(slots);
})

export default router;