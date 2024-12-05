import {withDb} from '../database.js'

export const showBlogs = async(req,res) =>{
    withDb(async (db)=>{
        const articles = await db.collection("articles").find({},{ projection: { title: 1, _id: 0 } }).toArray();
        if(articles){
            res.status(200).json(articles);
        }
        else{
            res.status(500).json({message:"error no articles found"});
        }
    },res);
}