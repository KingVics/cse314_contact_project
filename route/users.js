import { Router } from "express";
import {
    getAllUsers, getUserById, createNewUser,
    updateUser,
    deleteUser
} from "../controller/users.js";

const router = Router();


router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createNewUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;