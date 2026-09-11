
import { ObjectId } from "mongodb";
import userModel from "../model/users.js";
import { userSchema } from "../utils/validator.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.getUserById(userId);
        return user ? res.json(user) : res.status(404).json({ error: 'User not found' });
    }
    catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createNewUser = async (req, res) => {
    try {
        const { value, error } = userSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            return res.status(400).json({ errors: errorMessages });
        }

        const newUser = await userModel.createUser(value);
        res.status(201).json({ message: 'User created successfully', userId: newUser });

    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { value, error } = userSchema.validate(req.body, { abortEarly: false });

        if (!userId || !ObjectId.isValid(userId)) {
            return res.status(400).json({ error: "Invalid user ID" });
        }
        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            return res.status(400).json({ errors: errorMessages });
        }

        const updateSuccess = await userModel.updateUser(userId, value);
        return res.status(200).json({ message: "Usser updated successfully" });

    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteSuccess = await userModel.deleteUser(userId);
        if (deleteSuccess) {
            return res.status(200).json({ message: "User deleted successfully" });
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    }
    catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export { getAllUsers, getUserById, createNewUser, updateUser, deleteUser };