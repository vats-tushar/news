import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
    

  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  async function updateNews(){
    document.title=capitalize(props.category) + '-NewsBurst';
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  },[]);
  
  const fetchMoreData = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data=await fetch(url);
    let parsedData=await data.json();

    setPage(page+1);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }


    return (
      <>
        <h1 className='text-center' style={{marginTop: '80px', color: props.mode === 'light' ? 'black' : 'white'}}>NewsBurst - Top {capitalize(props.category)} Headlines</h1>
        <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} mode={props.mode}/>
              </div>
            })} 
          </div>
        </div>
        </InfiniteScroll></div>
      </>
    )
}
News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News