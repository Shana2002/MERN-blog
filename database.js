import {MongoClient} from 'mongodb'


console.log("hellooo");
// Helper function for database operations
export const withDb = async (operation, res) => {
    let client;
    try {
        client = await MongoClient.connect("mongodb+srv://hansakaravi02:m8p7LaxEcJ7tjsCA@mern-blog.d4o2s.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog");
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