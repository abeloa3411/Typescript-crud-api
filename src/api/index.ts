import express from "express";
import MessageResponse from "../interfaces/MessageResponse";
import goals from "./goals/goals.routes";

const router = express.Router();

router.use("/goals", goals);

export default router;
