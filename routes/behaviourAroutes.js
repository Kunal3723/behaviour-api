import express from "express";
import { getList, deleteList, postList } from "../controllers/behaviourType.js";
const router = express.Router();
import auth from "../middleware/auth.js"
router.post("/type",auth, getList);
router.post("/post",auth, postList);
router.delete("/post/:id",auth, deleteList);

export default router;

