import React from 'react'

const NewsItem=(props)=> {
  
    let {title,description,imgurl,newsUrl,author,date}=props;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author?author: "unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    )
  }


export default NewsItem
