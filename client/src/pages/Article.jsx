import React from 'react'
import {useParams} from 'react-router-dom'
import articleContent from './article-content'
import articles from './article-content';
import Articles from '../components/Articles';
import NotFount from './NotFount';

const Article = () => {
    const {name} = useParams();
    const article = articleContent.find((article)=> article.name === name);
    if(!article) return <NotFount/>
    const otherArticles = articleContent.filter(article=>article.name != name);
  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'> This is the {article.title} Article</h1>
      {article.content.map((para,index)=>(
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{para}</p>
      ))}
      <h1 className='sm:text-2xl text-xl font-bold text-gray-900'>Other Details</h1>
      <div className='flex flex-wrap -m-4'>
        <Articles  articles={otherArticles}/>
      </div>
    </>
  )
}

export default Article