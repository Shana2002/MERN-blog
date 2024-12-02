// import { json } from "express";
import React,{useState} from "react";

const AddCommentForm = ({articlename,setArticalInfo}) => {
    const [username,setUserName] = useState('');
    const [commentText,setCommentText] = useState('');
    const addComments = async (e) =>{
      e.preventDefault();
        const result = await fetch(`http://localhost:8000/api/articles/${articlename}/add-comments`,{
            method:'POST',
            body: JSON.stringify({username ,text:commentText }),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const body = await result.json();
        setArticalInfo(body);
        setUserName('');
        setCommentText('');

    }
  return (
    <form onSubmit={addComments} className="shadow rounded px-8 pt-6 pb-4 mb-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Add Comment</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name :
      </label>
      <input
        type="text"
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />
      <label className="text-xl font-bold mb-4 text-gray-900">Comment</label>
      <textarea
      value={commentText}
      onChange={(e)=>setCommentText(e.target.value)}
        rows="4"
        cols="5"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      ></textarea>
      <button type="submit"  className="bg-blue-500 hover:bg-blur-700 text-white font-bold py-2 px-4 rounded focus:outline-none ">
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
