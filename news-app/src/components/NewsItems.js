import React from 'react'
import './NewsItems.css'

function NewsItems({title,source,url,author,publishedAt,description,urlToImage}) {
  return (
    <div className='news-app'>
        <div className='news-item'/>
        <img className='news-img' src={urlToImage} alt={urlToImage}/>
        <h3><a href={url}>{title}</a></h3>
        <h5><author>{author}</author></h5>
        <date>{publishedAt}</date>
        <p>{description}</p>
    </div>
  )
}

export default NewsItems 
