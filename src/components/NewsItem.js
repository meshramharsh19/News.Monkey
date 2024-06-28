import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
            <div className="card" >
            <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGvR8jQK7Q12Qi_R5zEXFtbeHkoGMoOYT5g&s":imageUrl}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="badge rounded-pill bg-success">{source}</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted"></small>By {!author?"Unknown":author} on {new Date(date).toGMTString()} </p>
                    <a rel="noreferrer" href={newsUrl}  target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
} 

export default NewsItem
