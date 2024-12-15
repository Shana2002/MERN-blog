import express from 'express'
import cors from 'cors'
const PORT =8000;
import {withDb} from './database.js'
import blogs from './routes/blogs.js'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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


// // Route to get article by name
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

// routes 
app.use('/api/blogs',blogs);
app.use('/images', express.static(path.join(__dirname, 'images')));

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
