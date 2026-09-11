import { ObjectId } from 'mongodb';
import { getDatabase } from "../db/connection.js";

class User {
    contructor(firstName, lastName, email, favoriteColor, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.favoriteColor = favoriteColor;
        this.birthday = birthday;
    }

    static async getCollection() {
        const db = await getDatabase();
        return db.collection('users');
    }

    static async getAllUsers() {
        const collection = await User.getCollection();
        return collection.find({}).toArray();
    }

    static async getUserById(id) {
        if (typeof id !== 'string' || !ObjectId.isValid(id)) {
            return null;
        }
        const collection = await User.getCollection();
        const user = await collection.findOne({ _id: new ObjectId(id) });
        return user;
    }

    static async createUser(userData) {
        const collection = await User.getCollection();
        const result = await collection.insertOne(userData);
        return result.insertedId;
    }

    static async updateUser(id, updateData) {
        if (typeof id !== 'string' || !ObjectId.isValid(id)) {
            return null;
        }
        const collection = await User.getCollection();
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );
        return result.modifiedCount > 0;
    }

    static async deleteUser(id) {
        if (typeof id !== 'string' || !ObjectId.isValid(id)) {
            return null;
        }
        const collection = await User.getCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    }
}

export default User;