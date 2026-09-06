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
}

export default User;