// import { useState, useEffect } from "react";
// import axios from "axios";
// import { ArticlesIndex } from "./ArticlesIndex";

// export function Homepage() {
//   const [articles, setArticles] = useState([]);

//   const handleArticlesIndex = () => {
//     axios
//       .get(`https://newsapi.org/v2/everything?q=jobs&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
//       .then((response) => {
//         const limitedArticles = response.data.articles.slice(0, 10);
//         // console.log(response.data.articles);
//         setArticles(limitedArticles);
//         // setArticles(response.data.articles);
//       });
//   };

//   useEffect(handleArticlesIndex, []);

//   return (
//     <main>
//       <h1 className="text-3xl font-bold p-4 text-center">Job News</h1>
//       <ArticlesIndex articles={articles} />
//     </main>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";
import "./index.css"; // Import the CSS file for styling

export function Homepage() {
  const [articles, setArticles] = useState([]);

  // Define the handleArticleClick function
  const handleArticleClick = (article) => {
    // Perform actions when article is clicked
    window.open(article.url, "_blank"); // Open the article link in a new tab
  };

  const handleArticlesIndex = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=jobs&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((response) => {
        const limitedArticles = response.data.articles.slice(0, 12);
        setArticles(limitedArticles);
      });
  };

  useEffect(handleArticlesIndex, []);

  return (
    <main>
      {/* Big Blue Header Section */}
      <div className="big-blue-header">
        {/* <h5>4536+ Jobs listed</h5>
        <h3>Find your Dream Job</h3>
        <p>We provide online instant cash loans with quick approval that suit your term length</p> */}
        <div className="slider_btn"></div>
      </div>

      {/* Header Component */}
      {/* First Blank Section */}
      <div className="homepage-section-1 mb-4 pt-4 pb-4">
        <h2 className="hp-title">{/* <b>Job Hound</b> */}</h2>
        <h4 className="hp-line">
          <b>Providing employment solutions for everyone.</b>
        </h4>
        <p className="hp-co-text">
          <b>
            Wherever you are on your career journey, Job Hound makes it easier for workers and companies to find the
            perfect match.
          </b>
        </p>
        <div className="workers-image-container">
          <img
            src="https://www.pngplay.com/wp-content/uploads/6/Employment-Background-PNG-Image.png"
            alt=""
            className="workers-image"
          />
        </div>
        <div className="upload-resume-container">
          <button className="upload-resume-button">
            <a href="#" className="boxed-btn3">
              <b>Upload your Resume</b>
            </a>
          </button>
        </div>
      </div>

      {/* Second Blank Section */}
      <div className="homepage-section-2">{/* Add any content or leave it empty */}</div>

      {/* Third News API Section */}
      <div className="homepage-section mb-4">
        <h2 className="text-3xl font-bold p-4 text-center">
          <b className="job-news-title">Job News</b>
          <p>Source of job news across the nation</p>
        </h2>
        <div className="card-container d-flex justify-content-center">
          {articles.map((article) => (
            <div key={article.title} className="card small-card">
              <img src={article.urlToImage} alt={article.title} className="card-img-top" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <button onClick={() => handleArticleClick(article)} className="btn btn-secondary">
                  <b>Read More</b>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Blank Section */}
      <div className="homepage-section mb-4">{/* Add any content or leave it empty */}</div>
    </main>
  );
}
