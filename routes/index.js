import express from "express";
import doctorRoutes from './doctorRoutes/index.js'
import departmentRoutes from './departmentRoutes/index.js';
import imageRoutes from './imageRoutes/index.js'
import userRoutes from './userRoutes/index.js'
import pharmacyRoutes from './pharmacyRoutes/index.js'
import slotRoutes from './slotRoutes/index.js'


const router = express.Router();


router.use('/doctor', doctorRoutes)
router.use("/department", departmentRoutes);
router.use("/upload", imageRoutes);
router.use("/user", userRoutes);
router.use("/slot", slotRoutes);
router.use("/pharmacy",pharmacyRoutes);




export default router;