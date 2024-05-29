import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="my-3"></div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl? "https://www.livemint.com/lm-img/img/2023/07/14/600x338/Utkarsh_Small_Finance_Bank_IPO_GMP_1689307276849_1689307290865.JPG" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel = "noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
