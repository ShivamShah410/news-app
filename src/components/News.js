import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    // console.log("Constructer invocked for News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    // console.log("coppondidmount");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=63f47d8fe15946588643b125fb2ac87c";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h2>News-App - Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
                <div className="col-md-4 my-3" key={element.url} >
                  <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} key={element.url} newsurl={element.url} />
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
