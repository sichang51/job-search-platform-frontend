import React from "react";
import "./ArticlesIndex.css"; // Import the CSS file for styling

export function ArticlesIndex({ articles, onArticleClick }) {
  // console.log(props.articles);
  return (
    <div className="articles-container">
      {articles.map((article) => (
        <div key={article.title} className="article" onClick={() => onArticleClick(article)}>
          <img src={article.urlToImage} alt={article.title} width="150" height="125" />
          <h3 className="article-title-small">{article.title}</h3>
          <p className="article-description-small">{article.description || "No description available"}</p>
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
