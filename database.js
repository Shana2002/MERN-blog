import {MongoClient} from 'mongodb'

// Helper function for database operations
export const withDb = async (operation, res) => {
    let client;

    try {
        client = await MongoClient.connect('mongodb://localhost:27017');
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