import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Articles from '../components/Articles'

const ArticlesList = () => {
  // Set use states
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  // fetch atticles
  useEffect(()=>{
    const fetchArticles = async ()=>{
      try {
        const response = await axios.get("http://localhost:8000/api/blogs",);
        const articlesList  = response.data;
        console.log(articlesList);
        setArticles(articlesList);
      } catch (error) {
        setError("Failed to load Arcitles");
      }finally{
        setLoading(false);
      }
    };
    fetchArticles();
  },[]);

  if(loading){
    return <p className="text-center text-neutral-400">Loading Articles...</p>;
  }
  else{
    return (
      <div className='mb-20'>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'> Articles</h1>
        <div className='py-4 container mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <Articles articles={articles} />
          </div>
        </div>
      </div>
    )
  }
}

export default ArticlesList