import React from 'react'
import './NewsItems.css'

function NewsItems({title,source,url,author,date,description,urltoImage}) {
  return (
    <div className='news-app'>
        <div className='news-item'/>
        <img className='news-img' src={urltoImage} alt={urltoImage}/>
        <h3><a href={url}>{title}</a></h3>
        <date>{date}</date>
        <p>{description}</p>
    </div>
  )
}

export default NewsItems 
