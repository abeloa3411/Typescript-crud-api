import { Router } from "express";
import { getAll } from "./goals.controllers";

const router = Router();

router.get("/", getAll);

export default router;
