import {withDb} from '../database.js'

export const showBlogs = async(req,res) =>{
    const name = req.query.other??"";
    const limit = parseInt(req.query.limit)??10;
    withDb(async (db)=>{
        const articles = await db.collection("articles").find({name: { $ne: name }},{ projection: { title: 1, _id: 0 ,thumbnail:1,content:1,name:1} }).limit(limit).toArray();
        if(articles){
            res.status(200).json(articles);
        }
        else{
            res.status(500).json({message:"error no articles found"});
        }
    },res);
}