import express from "express";
import Department from "../../db/model/departmnetSchema.js";

const router = express.Router();

router.post("/", async(req, res) => {
    const body = {...req.body}
    await Department.create(body);
    res.status(201).json({ message: "Department added sucessfull" });
});

router.post("/l", async(req, res) => {
    const departments = await Department.find();
    res.status(200).json(departments);
});

export default router;
