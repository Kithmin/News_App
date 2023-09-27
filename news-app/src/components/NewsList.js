import React, {useState,useEffect} from 'react'
import axios from 'axios'
import NewsItems from './NewsItems'

function NewsList() {
    const [articles,setArticles] = useState([])


    useEffect ( () => {
        const getArticle = async() =>{
            const response =await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-08-27&sortBy=publishedAt&apiKey=b731c12c39f8455fa91a78d79136d9f9')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticle()
    }, [])
    return (
        <div>{articles.map(articles =>{
            return(
                <NewsItems
                    title={articles.title}
                    date={articles.date}
                    description={articles.description}
                    url={articles.url}
                    urltoImage={articles.ur}
                
                />
            )
        })}</div>
  )
}

export default NewsList