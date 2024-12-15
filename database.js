import {MongoClient} from 'mongodb'
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URL = process.env.MONGODB_URL;
if (!MONGO_URL) {
  throw new Error("MONGODB_URL environment variable is not defined.");
}

// Helper function for database operations
export const withDb = async (operation, res) => {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URL);
        console.log('connected')
        const db = client.db("mernblog");
        await operation(db);
    } catch (error) {
        console.error("Error connecting to database:", error);
        res.status(500).json({ message: "Error connecting to database", error });
    } finally {
        if (client) {
            await client.close();
        }
    }
};