import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let dbConnection = null;

export async function getDatabase() {
    // If the database connection already exists, return it
    if (dbConnection) return dbConnection;


    // If the database connection does not exist, connect to the database
    try {
        await client.connect();

        await client.db("project1").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        dbConnection = client.db("project1");
        return dbConnection;

    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error);
        throw error;
    }
}
