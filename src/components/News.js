import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Load from './Load'
const News=(props)=>{
  const[article,setArticle]=useState([]);
  const[page,setPage]=useState(1);
  const[totalres,setTotalres]=useState(0);
  const[loading,setLoading]=useState(false);
  const handleprev=async()=>{
    setLoading(true);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=63f85000ef334b0c9b1afa39d9d66ca4&page=${page-1}&pagesize=${props.pagesize}`
    let data=await fetch(url);
    let parseddata= await data.json();
    setPage(page-1);
    setArticle(parseddata.articles);
    setLoading(false);
    
  }
  const handlenext=async()=>{
    if(page>=(Math.ceil(totalres/18))){

    }
    else{
      setLoading(true);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=63f85000ef334b0c9b1afa39d9d66ca4&page=${page+1}&pagesize=${props.pagesize}`
      let data=await fetch(url);
      let parseddata= await data.json();
      setPage(page+1);
      setArticle(parseddata.articles);
      setLoading(false);
    }
  }
   
   const update=async()=>{
    setLoading(true);
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=63f85000ef334b0c9b1afa39d9d66ca4&page=${page}&pagesize=${props.pagesize}`
    let data=await fetch(url);
    let parseddata= await data.json();
    setArticle(parseddata.articles);
    setTotalres(parseddata.totalResults);
    setLoading(false);
    props.setProgress(100);
   }
   useEffect(()=>{
    document.title=`NewsMonkey - ${props.category}`
    update();
   },[]);
    
    
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:"30px",marginTop:"80px"}}>NewsMonkey- Top {props.category} Headlines</h2>
        {loading && <Load/>}
        <div className="row">
        {article.map((elements)=>{
          return <div className="col md-4" key={elements.url}>
          <NewsItem title={elements.title?elements.title.slice(0,45):""} description={elements.description?elements.description.slice(0,70):""} imgurl={elements.urlToImage?elements.urlToImage:"https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/0x0.png?format=png&width=1200"} newsUrl={elements.url} author={elements.author} date={elements.publishedAt}/>
        </div>
        })}

        </div>
        <div className="container my-3 mx-3 d-flex justify-content-between">
        <button type="button" disabled={page<=1} className="btn btn-primary" onClick={handleprev}>&larr; Previous</button>
        <button type="button" disabled={(page>=(Math.ceil(totalres/18)))} className="btn btn-primary" onClick={handlenext}>Next &rarr;</button>
        
        </div>
      </div>
      
    )
    
    }
  


export default News
