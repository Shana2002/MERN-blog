const express = require('express');
const app = express();
const cors = require('cors')
const { MongoClient } = require('mongodb');
const PORT = 8000;

// Test route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use(cors({
    origin: 'http://localhost:5173',  // Replace with your frontend URL
    credentials: true,  // Allow cookies to be sent
    allowedHeaders: ['Content-Type', 'Authorization'] // Add other headers as necessary
  }));

app.use(express.json());
// Helper function for database operations
const withDb = async (operation, res) => {
    let client;

    try {
        client = await MongoClient.connect('mongodb://localhost:27017');
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

// Route to get article by name
app.get('/api/articles/:name', (req, res) => {
    withDb(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection("articles").findOne({ name: articleName });

        if (articleInfo) {
            res.status(200).json(articleInfo);
        } else {
            res.status(404).json({ message: "Article not found" });
        }
    }, res);
});


app.post('/api/articles/:name/add-comments',(req,res)=>{
    const {username , text }=req.body;
    const articleName = req.params.name;

    withDb(async(db)=>{
        const articleInfo = await db.collection("articles").findOne({name:articleName});
        await db.collection('articles').updateOne({name:articleName},{$set:{comments:articleInfo.comments.concat({username,text})}});
        const updateArticleInfo = await db.collection("articles").findOne({name:articleName});
        res.status(200).json(updateArticleInfo);
    },res);
})

// Start the server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
