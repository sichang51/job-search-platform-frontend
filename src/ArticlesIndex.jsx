import React from "react";
import "./ArticlesIndex.css"; // Import the CSS file for styling

export function ArticlesIndex({ articles }) {
  // console.log(props.articles);
  return (
    <div className="articles-container">
      {articles.map((article) => (
        <div key={article.title} className="article">
          <img src={article.urlToImage} alt={article.title} width="300" height="250" />
          <h3>{article.title}</h3>
          <p>{article.description || "No description available"}</p>
        </div>
      ))}
      {/* <h1>All Articles</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <p>Author: {article.author}</p>
          <p>Description: {article.description}</p>
          <p>Source: {article.source.name}</p>
        </div>
      ))} */}
    </div>
  );
}
