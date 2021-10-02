import React, { Component } from "react";

export class NewsItem extends Component {
  render() {

    let {title, description, imageurl, newsurl} = this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I=":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsurl} target="_blank" rel="noreferrer" type="button" className="btn btn-sm btn-secondary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
