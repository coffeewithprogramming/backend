import express from "express";
import Department from "../../db/model/departmnetSchema.js";
import checkToken from "../../middlewares/checkToken.js";

const router = express.Router();

router.post("/",checkToken, async(req, res) => {
    const body = {...req.body}
    await Department.create(body);
    res.status(201).json({ message: "Department added sucessfull" });
});

router.get("/", checkToken, async(req, res) => {
    const departments = await Department.find();
    res.status(200).json(departments);
});

export default router;
