import { Router } from "express";
import { createOne, getAll } from "./goals.controllers";

const router = Router();

router.get("/", getAll);
router.post("/", createOne);

export default router;
