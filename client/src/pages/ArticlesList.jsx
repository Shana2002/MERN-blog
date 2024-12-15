import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Articles from '../components/Articles'

const ArticlesList = () => {
  // Set use states
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  // const articlesPerPage = 10; 
  // fetch atticles
  useEffect(()=>{
    const fetchArticles = async ()=>{
      try {
        const response = await axios.get(`http://localhost:8000/api/blogs?page=${currentPage}&limit=5`,);
        const {data,totalPage}  = response.data;
        console.log(data);
        setArticles(data);
        setTotalPages(totalPage);
      } catch (error) {
        setError("Failed to load Arcitles");
      }finally{
        setLoading(false);
      }
    };
    fetchArticles();
  },[currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

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
        {/* Pagination Buttons */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>
        <span className="mx-3">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>
      </div>
    )
  }
}

export default ArticlesList