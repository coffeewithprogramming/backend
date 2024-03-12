import express from 'express';
import multer from 'multer';

const router = express.Router();
const storage = multer.diskStorage({
    destination : (req,res,cb) =>{
        cb(null,'public');
    },
    filename : (req,res,cd) =>{
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({storage : storage});

router.post( '/image', upload.single('file'), async ( req,res) =>{
        res.json({ url:`htpp://localhost:4000/${req.file.filename}`});
});



export default router;