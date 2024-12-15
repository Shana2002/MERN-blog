import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../components/Articles";
import NotFount from "./NotFount";
import CommentList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import axios from "axios";

const Article = () => {
  const [article, setArticleData] = useState({});
  const [otherArticles, setOtherArticles] = useState([]);
  const { name } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/articles/${name}`
        );
        if (response.status === 404) {
          setLoading(false);
          setError('Article not found');
          return;
        }
        const article = response.data;
        console.log(response.status);
        setArticleData(article);
      } catch (error) {
        setError('Failed to fetch article');
      } finally {
        setLoading(false);
      }
    };
    const getOtherArticles = async()=>{
      try {
        const response = await axios.get(`http://localhost:8000/api/blogs?other=${name}&limit=4`);
        setOtherArticles(response.data);
      } catch (error) {
        setError('Failed to fetch article');
      }
    }
    getArticle();
    getOtherArticles();
  }, [name]);

  if (loading) {
    return <p className="text-center text-neutral-400">Loading Articles...</p>;
  }
  if (error) {
    return <NotFount/>;
  }

  if (!article) {
    return <NotFount/>;
  }
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {" "}
        This is the {article.title} Article
      </h1>
      {article.content.map((para, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {para}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold text-gray-900 my-5">
        Other Articles
      </h1>
      <div className='flex flex-wrap -m-4 mb-5'>
        <Articles  articles={otherArticles}/>
      </div>
      <AddCommentForm articlename={name} setArticalInfo={setArticleData} />
      <CommentList comments={article.comments} />
    </>
  );
};

export default Article;
