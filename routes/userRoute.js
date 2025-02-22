import express from "express";
import userRoute from "../controllers/userController";

const router = express.Router();

router.get("/", userRoute);

export default router;
