import express from "express";
import { UserUpdate } from "../controllers/userController";
import { Protect } from "../middlewares/authMiddleware.js";

    
const router = express.Router();

router.put("/update", Protect, UserUpdate);

export default router;