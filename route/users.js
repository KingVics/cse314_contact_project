import { Router } from "express";
import { getAllUsers, getUserById } from "../controller/users.js";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;