import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Articles from "../components/Articles";

const Home = () => {
  const [articles,setArtcicles] = useState([]);

  useEffect(()=>{
    const getArticles = async() =>{
      try {
        const response = await axios.get('http://localhost:8000/api/blogs?&limit=4');
        setArtcicles(response.data.data);
      } catch (error) {
        
      }
    }
    getArticles(); 
  },[])
  return (
    <div className='mb-20'>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Welcome to MERN Blog!</h1>

      <p className='mx-auto leading-relaxed text-base mb-4'>
      Dive into the world of the MERN stack—your go-to platform for everything related to MongoDB, Express.js, React.js, and Node.js. Whether you're just starting out or looking to deepen your understanding, MERN Blog offers a rich collection of articles, tutorials, and best practices tailored to developers of all levels.
      </p>
      <p className='mx-auto leading-relaxed text-base mb-4'>
      Stay updated with the latest trends, discover tips to optimize your projects, and explore real-world use cases to master full-stack development. Join a growing community of tech enthusiasts and transform your MERN stack journey with insights from industry experts.
      </p>
      <h3 className="text-2xl font-semibold mb-10">Start exploring and take your development skills to the next level!</h3>
      <Link to={`/articles-list`}><p  className=" mb-4 text-blue-600">recent blogs</p></Link>
      <div className='flex flex-wrap -m-4 mb-5'>
        <Articles  articles={articles}/>
      </div>
    </div>
  );
};

export default Home;
