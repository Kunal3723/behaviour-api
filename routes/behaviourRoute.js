import express from "express";
import { getBehaviours } from "../controllers/behaviour.js";
const router= express.Router();

router.get("/",getBehaviours);

export default router;

