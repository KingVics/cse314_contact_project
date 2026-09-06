import 'dotenv/config';
import express from "express";
import cors from "cors";
import { getDatabase } from "./db/connection.js";

// routes
import { userRoute } from "./route/index.js";

// Create an instance of the Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


// Use the userRoute for handling requests to /users
app.use("/", userRoute);



// Start the server after establishing a database connection
const startServer = async () => {

    try {
        console.log('🔄 Initializing database connection...');
        await getDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start the server:', error);
        process.exit(1);
    }

}

startServer();


